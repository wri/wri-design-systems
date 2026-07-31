import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { UseToolbarOverflowParams } from './types'

const sizeOf = (el: Element | null, vertical: boolean) => {
  if (!el || !(el instanceof HTMLElement)) return 0
  return vertical ? el.offsetHeight : el.offsetWidth
}

const groupCountForVisible = (
  visibleCount: number,
  endsGroup: boolean[],
  hasOverflow: boolean,
  hasToggle: boolean,
) => {
  let groups = 0
  if (visibleCount > 0) {
    groups = 1
    for (let i = 0; i < visibleCount - 1; i += 1) {
      if (endsGroup[i]) groups += 1
    }
  }
  if (hasOverflow) groups += 1
  if (hasToggle) groups += 1
  return groups
}

const packVisibleCount = ({
  itemSizes,
  endsGroup,
  overflowSize,
  toggleSize,
  gap,
  available,
}: {
  itemSizes: number[]
  endsGroup: boolean[]
  overflowSize: number
  toggleSize: number
  gap: number
  available: number
}) => {
  const itemsCount = itemSizes.length
  if (itemsCount === 0) return 0

  const fits = (visibleCount: number) => {
    const hasOverflow = visibleCount < itemsCount
    let total = 0
    for (let i = 0; i < visibleCount; i += 1) {
      total += itemSizes[i]
    }
    if (hasOverflow) total += overflowSize
    if (toggleSize > 0) total += toggleSize
    const groups = groupCountForVisible(
      visibleCount,
      endsGroup,
      hasOverflow,
      toggleSize > 0,
    )
    total += Math.max(groups - 1, 0) * gap
    return total <= available + 1
  }

  for (let count = itemsCount; count >= 0; count -= 1) {
    if (fits(count)) return count
  }
  return 0
}

const readMeasureMode = (
  root: HTMLElement,
  mode: 'expanded' | 'collapsed',
  isVertical: boolean,
  showExpandedToggle?: boolean,
) => {
  const row = root.querySelector(`[data-toolbar-measure-mode="${mode}"]`)
  if (!row) {
    return {
      itemSizes: [] as number[],
      overflowSize: 0,
      toggleSize: 0,
      gap: 0,
    }
  }

  const gap = Number.parseFloat(getComputedStyle(row).gap || '0') || 0
  const itemSizes = Array.from(
    row.querySelectorAll('[data-toolbar-measure-item]'),
  ).map((el) => sizeOf(el, isVertical))
  const overflowSize = sizeOf(
    row.querySelector('[data-toolbar-measure-overflow]'),
    isVertical,
  )
  const toggleSize = showExpandedToggle
    ? sizeOf(row.querySelector('[data-toolbar-measure-toggle]'), isVertical)
    : 0

  return { itemSizes, overflowSize, toggleSize, gap }
}

export function useToolbarOverflow({
  itemsCount,
  isExpanded,
  isVertical,
  endsGroup,
  showExpandedToggle,
  autoCollapse,
}: UseToolbarOverflowParams) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  const [visibleNumberOfItems, setVisibleNumberOfItems] = useState(itemsCount)
  const [shouldForceCollapse, setShouldForceCollapse] = useState(false)

  const recalculate = useCallback(() => {
    const container = containerRef.current
    const measure = measureRef.current

    if (!autoCollapse || !container || !measure) {
      setShouldForceCollapse(false)
      setVisibleNumberOfItems((prev) =>
        prev === itemsCount ? prev : itemsCount,
      )
      return
    }

    const available = isVertical
      ? container.clientHeight
      : container.clientWidth
    if (available <= 0) return

    const expanded = readMeasureMode(
      measure,
      'expanded',
      isVertical,
      showExpandedToggle,
    )
    const collapsed = readMeasureMode(
      measure,
      'collapsed',
      isVertical,
      showExpandedToggle,
    )

    if (
      expanded.itemSizes.length !== itemsCount ||
      collapsed.itemSizes.length !== itemsCount
    ) {
      return
    }

    const expandedVisible = packVisibleCount({
      itemSizes: expanded.itemSizes,
      endsGroup,
      overflowSize: expanded.overflowSize,
      toggleSize: expanded.toggleSize,
      gap: expanded.gap,
      available,
    })

    const collapsedVisible = packVisibleCount({
      itemSizes: collapsed.itemSizes,
      endsGroup,
      overflowSize: collapsed.overflowSize,
      toggleSize: collapsed.toggleSize,
      gap: collapsed.gap,
      available,
    })

    if (isExpanded && expandedVisible > 0) {
      setShouldForceCollapse(false)
      setVisibleNumberOfItems((prev) =>
        prev === expandedVisible ? prev : expandedVisible,
      )
      return
    }

    if (isExpanded && expandedVisible === 0) {
      setShouldForceCollapse(true)
      setVisibleNumberOfItems((prev) =>
        prev === collapsedVisible ? prev : collapsedVisible,
      )
      return
    }

    setShouldForceCollapse(false)
    setVisibleNumberOfItems((prev) =>
      prev === collapsedVisible ? prev : collapsedVisible,
    )
  }, [
    autoCollapse,
    endsGroup,
    isExpanded,
    isVertical,
    itemsCount,
    showExpandedToggle,
  ])

  useLayoutEffect(() => {
    recalculate()

    const container = containerRef.current
    const measure = measureRef.current
    if (!container) return undefined

    const observer = new ResizeObserver(() => {
      recalculate()
    })
    observer.observe(container)
    if (measure) observer.observe(measure)

    return () => observer.disconnect()
  }, [recalculate])

  return {
    containerRef,
    measureRef,
    visibleNumberOfItems,
    shouldForceCollapse,
  }
}
