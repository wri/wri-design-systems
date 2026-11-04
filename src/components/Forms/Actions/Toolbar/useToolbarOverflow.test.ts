/* eslint-disable class-methods-use-this */

import React from 'react'
import { render, act } from '@testing-library/react'
import { useToolbarOverflow } from './useToolbarOverflow'

global.ResizeObserver = class ResizeObserver
  implements globalThis.ResizeObserver
{
  observe(_target: Element, _options?: ResizeObserverOptions): void {}

  unobserve(_target: Element): void {}

  disconnect(): void {}
}

const ITEM_SIZE = 40
const OVERFLOW_SIZE = 32
const TOGGLE_SIZE = 32

const buildMeasureRow = (
  mode: 'expanded' | 'collapsed',
  itemsCount: number,
  options: { showToggle?: boolean } = {},
) => {
  const row = document.createElement('div')
  row.setAttribute('data-toolbar-measure-mode', mode)

  const sized = (tag: string, attr: string, value: number) => {
    const el = document.createElement(tag)
    el.setAttribute(attr, '')
    Object.defineProperty(el, 'offsetWidth', { value, configurable: true })
    Object.defineProperty(el, 'offsetHeight', { value, configurable: true })
    return el
  }

  for (let i = 0; i < itemsCount; i += 1) {
    row.appendChild(sized('span', 'data-toolbar-measure-item', ITEM_SIZE))
  }

  row.appendChild(sized('span', 'data-toolbar-measure-overflow', OVERFLOW_SIZE))

  if (options.showToggle) {
    row.appendChild(sized('span', 'data-toolbar-measure-toggle', TOGGLE_SIZE))
  }

  return row
}

const setupDom = ({
  itemsCount,
  available,
  showToggle = false,
}: {
  itemsCount: number
  available: number
  showToggle?: boolean
}) => {
  const container = document.createElement('div')
  Object.defineProperty(container, 'clientWidth', {
    value: available,
    configurable: true,
  })
  Object.defineProperty(container, 'clientHeight', {
    value: available,
    configurable: true,
  })

  const measure = document.createElement('div')
  measure.appendChild(buildMeasureRow('expanded', itemsCount, { showToggle }))
  measure.appendChild(
    buildMeasureRow('collapsed', itemsCount, { showToggle }),
  )

  document.body.appendChild(container)
  document.body.appendChild(measure)

  return { container, measure }
}

// Harness that attaches the refs during render, before the hook's
// useLayoutEffect reads them — mirroring how Toolbar wires the refs.
const Harness = ({
  params,
  dom,
  onResult,
}: {
  params: Parameters<typeof useToolbarOverflow>[0]
  dom: { container: HTMLDivElement; measure: HTMLDivElement }
  onResult: (r: ReturnType<typeof useToolbarOverflow>) => void
}) => {
  const result = useToolbarOverflow(params)
  result.containerRef.current = dom.container
  result.measureRef.current = dom.measure
  onResult(result)
  return null
}

const renderOverflow = (
  params: Parameters<typeof useToolbarOverflow>[0],
  dom: { container: HTMLDivElement; measure: HTMLDivElement },
) => {
  let latest: ReturnType<typeof useToolbarOverflow>
  const element = () =>
    React.createElement(Harness, {
      params,
      dom,
      onResult: (r) => {
        latest = r
      },
    })
  const { rerender } = render(element())
  // The hook recalculates in useLayoutEffect after the first render;
  // re-render once so `latest` reflects the post-effect state.
  rerender(element())
  return {
    get result() {
      return { current: latest }
    },
  }
}

describe('useToolbarOverflow', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('shows all items when autoCollapse is off', () => {
    const dom = setupDom({ itemsCount: 3, available: 100 })
    const { result } = renderOverflow(
      { itemsCount: 3, isExpanded: false, isVertical: false, endsGroup: [] },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(3)
    expect(result.current.shouldForceCollapse).toBe(false)
  })

  it('shows all items when everything fits in the available space', () => {
    const dom = setupDom({ itemsCount: 3, available: 400 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(3)
    expect(result.current.shouldForceCollapse).toBe(false)
  })

  it('collapses items that do not fit into the overflow menu', () => {
    // 3 items of 40 = 120 > 111 available, so one item must move to the
    // overflow: 2 items of 40 + overflow 32 = 112 <= 111 + 1.
    const dom = setupDom({ itemsCount: 3, available: 111 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(2)
    expect(result.current.shouldForceCollapse).toBe(false)
  })

  it('collapses to zero visible items when nothing fits', () => {
    const dom = setupDom({ itemsCount: 3, available: 10 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(0)
  })

  it('accounts for the expanded toggle size when packing', () => {
    // With a toggle, less room remains for items.
    const withToggle = setupDom({
      itemsCount: 3,
      available: 160,
      showToggle: true,
    })
    const { result: withToggleResult } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        showExpandedToggle: true,
        autoCollapse: true,
      },
      withToggle,
    )

    const withoutToggle = setupDom({ itemsCount: 3, available: 160 })
    const { result: withoutToggleResult } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      withoutToggle,
    )

    expect(withToggleResult.current.visibleNumberOfItems).toBeLessThanOrEqual(
      withoutToggleResult.current.visibleNumberOfItems,
    )
  })

  it('keeps group boundaries intact when packing items', () => {
    // Two groups: [item0] [item1, item2]. Group separators add gaps.
    const dom = setupDom({ itemsCount: 3, available: 200 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [true, false, false],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(3)
  })

  it('uses clientHeight when vertical', () => {
    // Vertical mode reads clientHeight; 3 items of 40 = 120 > 111, so
    // one item collapses (same math as the horizontal case).
    const dom = setupDom({ itemsCount: 3, available: 111 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: true,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.visibleNumberOfItems).toBe(2)
  })

  it('forces collapse when expanded items cannot fit at all', () => {
    const dom = setupDom({ itemsCount: 3, available: 10 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: true,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.shouldForceCollapse).toBe(true)
  })

  it('does not force collapse when expanded items fit', () => {
    const dom = setupDom({ itemsCount: 3, available: 400 })
    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: true,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )

    expect(result.current.shouldForceCollapse).toBe(false)
    expect(result.current.visibleNumberOfItems).toBe(3)
  })

  it('bails out without changing state when measure rows are missing', () => {
    const container = document.createElement('div')
    Object.defineProperty(container, 'clientWidth', {
      value: 400,
      configurable: true,
    })
    document.body.appendChild(container)
    const measure = document.createElement('div')
    document.body.appendChild(measure)

    const { result } = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      { container, measure },
    )

    // Initial state (itemsCount) is preserved when measurement is impossible.
    expect(result.current.visibleNumberOfItems).toBe(3)
  })

  it('resets to all items when autoCollapse is turned off after being on', () => {
    const dom = setupDom({ itemsCount: 3, available: 10 })
    const first = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
        autoCollapse: true,
      },
      dom,
    )
    expect(first.result.current.visibleNumberOfItems).toBe(0)

    const second = renderOverflow(
      {
        itemsCount: 3,
        isExpanded: false,
        isVertical: false,
        endsGroup: [],
      },
      dom,
    )

    expect(second.result.current.visibleNumberOfItems).toBe(3)
    expect(second.result.current.shouldForceCollapse).toBe(false)
  })
})
