import { useEffect, useState, useRef } from 'react'
import { UseToolbarOverflowParams } from './types'
import { SizeValue, resolveSizeValue } from '../../../../lib/sizing'

const toPixels = (value: SizeValue): number => {
  const resolved = resolveSizeValue(value)
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  if (resolved.endsWith('rem')) {
    return parseFloat(resolved) * rootFontSize
  }
  if (resolved.endsWith('px')) {
    return parseFloat(resolved)
  }
  return parseFloat(resolved)
}

export function useToolbarOverflow({
  itemsCount,
  isExpanded,
  isVertical,
  collapsedWidth,
  expandedLabelWidth,
  gap = 0,
  showExpandedToggle,
  autoCollapse,
}: UseToolbarOverflowParams) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const [visibleNumberOfItems, setvisibleNumberOfItems] = useState(itemsCount)
  const [shouldForceCollapse, setShouldForceCollapse] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      setContainerWidth(Math.floor(entry.contentRect.width))
    })
    observer.observe(containerRef.current)
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (containerWidth === 0) return

    if (!autoCollapse) {
      setShouldForceCollapse(false)
      setvisibleNumberOfItems(itemsCount)
      return
    }

    const collapsedWidthPx = toPixels(collapsedWidth)
    const expandedLabelWidthPx = toPixels(expandedLabelWidth)
    const gapPx = toPixels(gap)

    const toggleWidth = showExpandedToggle ? collapsedWidthPx + gapPx : 0
    const availableWidth = containerWidth - toggleWidth

    const itemWidthCollapsed = collapsedWidthPx + gapPx
    const itemWidthExpanded = expandedLabelWidthPx + gapPx
    const currentItemWidth = isExpanded ? itemWidthExpanded : itemWidthCollapsed

    const totalWidthNeeded = itemsCount * currentItemWidth - gapPx

    const mustCollapse = totalWidthNeeded > availableWidth
    setShouldForceCollapse(mustCollapse)

    if (itemsCount > 1 && !isVertical) {
      setvisibleNumberOfItems(Math.floor(availableWidth / itemWidthCollapsed))
    }
  }, [
    containerWidth,
    itemsCount,
    isExpanded,
    isVertical,
    collapsedWidth,
    expandedLabelWidth,
    gap,
    showExpandedToggle,
    autoCollapse,
  ])

  return {
    containerRef,
    visibleNumberOfItems,
    shouldForceCollapse,
  }
}
