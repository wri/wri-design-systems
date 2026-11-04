import { renderHook, act } from '@testing-library/react'
import { usePlacementSync } from './usePlacementSync'

const setPlacement = async (node: HTMLElement, placement: string) => {
  await act(async () => {
    node.setAttribute('data-placement', placement)
  })
}

describe('usePlacementSync', () => {
  it('defaults to bottom placement', () => {
    const { result } = renderHook(() => usePlacementSync())

    expect(result.current.placement).toBe('bottom')
  })

  it('reads top placement when the node reports data-placement="top"', () => {
    const { result } = renderHook(() => usePlacementSync())

    const node = document.createElement('div')
    node.setAttribute('data-placement', 'top')

    act(() => result.current.contentRef(node))

    expect(result.current.placement).toBe('top')
  })

  it('reads bottom placement when the node reports data-placement="bottom"', () => {
    const { result } = renderHook(() => usePlacementSync())

    const node = document.createElement('div')
    node.setAttribute('data-placement', 'bottom')

    act(() => result.current.contentRef(node))

    expect(result.current.placement).toBe('bottom')
  })

  it('falls back to bottom when data-placement is missing', () => {
    const { result } = renderHook(() => usePlacementSync())

    act(() => result.current.contentRef(document.createElement('div')))

    expect(result.current.placement).toBe('bottom')
  })

  it('treats any placement starting with "top" (e.g. top-start) as top', () => {
    const { result } = renderHook(() => usePlacementSync())

    const node = document.createElement('div')
    node.setAttribute('data-placement', 'top-start')

    act(() => result.current.contentRef(node))

    expect(result.current.placement).toBe('top')
  })

  it('updates placement when the node mutates data-placement', async () => {
    const { result } = renderHook(() => usePlacementSync())

    const node = document.createElement('div')
    act(() => result.current.contentRef(node))
    expect(result.current.placement).toBe('bottom')

    await setPlacement(node, 'top')
    expect(result.current.placement).toBe('top')

    await setPlacement(node, 'bottom')
    expect(result.current.placement).toBe('bottom')
  })

  it('stops observing after the ref is re-attached to another node', async () => {
    const { result } = renderHook(() => usePlacementSync())

    const first = document.createElement('div')
    const second = document.createElement('div')
    act(() => result.current.contentRef(first))
    act(() => result.current.contentRef(second))

    // Mutating the first node must no longer affect placement.
    await setPlacement(first, 'top')
    expect(result.current.placement).toBe('bottom')

    await setPlacement(second, 'top')
    expect(result.current.placement).toBe('top')
  })

  it('disconnects the observer when the node is removed (null ref)', async () => {
    const { result } = renderHook(() => usePlacementSync())

    const node = document.createElement('div')
    act(() => result.current.contentRef(node))
    act(() => result.current.contentRef(null))

    await setPlacement(node, 'top')
    expect(result.current.placement).toBe('bottom')
  })
})
