import { renderHook, act } from '@testing-library/react'
import { useTabFocus } from './useTabFocus'

// The hook returns React's synthetic FocusEvent type, but tests dispatch
// plain DOM events; cast since the hook only forwards the object.
type FocusEvt = Parameters<ReturnType<typeof useTabFocus>['onFocus']>[0]
const focusEvent = (type: string) =>
  new FocusEvent(type) as unknown as FocusEvt

const keydown = (key: string, modifiers = {}) =>
  act(() => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key, bubbles: true, ...modifiers }),
    )
  })

const pointerdown = () =>
  act(() => {
    document.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }))
  })

describe('useTabFocus', () => {
  beforeEach(() => {
    // The hook keeps its modality in module-level state that survives
    // between tests. Reset it to 'pointer' through a throwaway
    // subscription (listeners only exist while a hook is mounted).
    const { unmount } = renderHook(() => useTabFocus())
    pointerdown()
    unmount()
  })

  it('is not tab-focused initially', () => {
    const { result } = renderHook(() => useTabFocus())

    expect(result.current.isTabFocused).toBe(false)
  })

  it('becomes tab-focused after keyboard focus following a Tab keydown', () => {
    const { result } = renderHook(() => useTabFocus())

    keydown('Tab')
    act(() => result.current.onFocus(focusEvent('focus')))

    expect(result.current.isTabFocused).toBe(true)
  })

  it('is not tab-focused when focus comes from a pointer interaction', () => {
    const { result } = renderHook(() => useTabFocus())

    act(() => result.current.onFocus(focusEvent('focus')))

    expect(result.current.isTabFocused).toBe(false)
  })

  it('loses tab focus on blur', () => {
    const { result } = renderHook(() => useTabFocus())

    keydown('Tab')
    act(() => result.current.onFocus(focusEvent('focus')))
    act(() => result.current.onBlur(focusEvent('blur')))

    expect(result.current.isTabFocused).toBe(false)
  })

  it('treats Escape as keyboard modality', () => {
    const { result } = renderHook(() => useTabFocus())

    keydown('Escape')
    act(() => result.current.onFocus(focusEvent('focus')))

    expect(result.current.isTabFocused).toBe(true)
  })

  it('ignores modifier-key combos (meta/alt/ctrl)', () => {
    const { result } = renderHook(() => useTabFocus())

    keydown('Tab', { metaKey: true })
    act(() => result.current.onFocus(focusEvent('focus')))

    expect(result.current.isTabFocused).toBe(false)
  })

  it('forwards the wrapped onFocus handler', () => {
    const onFocus = jest.fn()
    const { result } = renderHook(() => useTabFocus(onFocus))

    const event = focusEvent('focus')
    act(() => result.current.onFocus(event))

    expect(onFocus).toHaveBeenCalledWith(event)
  })

  it('forwards the wrapped onBlur handler', () => {
    const onBlur = jest.fn()
    const { result } = renderHook(() => useTabFocus(undefined, onBlur))

    const event = focusEvent('blur')
    act(() => result.current.onBlur(event))

    expect(onBlur).toHaveBeenCalledWith(event)
  })

  it('switches back to pointer modality after a pointerdown', () => {
    const { result } = renderHook(() => useTabFocus())

    keydown('Tab')
    act(() => result.current.onFocus(focusEvent('focus')))
    expect(result.current.isTabFocused).toBe(true)

    pointerdown()
    expect(result.current.isTabFocused).toBe(false)
  })

  it('removes document listeners after unmount (no leaked subscriptions)', () => {
    const keydownSpy = jest.spyOn(document, 'addEventListener')
    const removeSpy = jest.spyOn(document, 'removeEventListener')

    const { unmount } = renderHook(() => useTabFocus())
    unmount()

    expect(removeSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
      true,
    )
    expect(removeSpy).toHaveBeenCalledWith(
      'pointerdown',
      expect.any(Function),
      true,
    )

    keydownSpy.mockRestore()
    removeSpy.mockRestore()
  })
})
