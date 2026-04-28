import { useEffect, useState, useRef } from 'react'
import { UseToolbarOverflowParams } from './types'
import { SizeValue, resolveSizeValue } from '../../../../lib/sizing'

const toRems = (value: SizeValue): number => {
  const resolved = resolveSizeValue(value)
  const rootFontSize =
    parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
  if (resolved.endsWith('px')) {
    return parseFloat(resolved) / rootFontSize
  }
  if (resolved.endsWith('rem')) {
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
      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
      setContainerWidth(entry.contentRect.width / rootFontSize)
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

    const collapsedWidthRems = toRems(collapsedWidth)
    const expandedLabelWidthRems = toRems(expandedLabelWidth)
    const gapRems = toRems(gap)

    const toggleWidth = showExpandedToggle ? collapsedWidthRems + gapRems : 0
    const availableWidth = containerWidth - toggleWidth

    const itemWidthCollapsed = collapsedWidthRems + gapRems
    const itemWidthExpanded = expandedLabelWidthRems + gapRems
    const currentItemWidth = isExpanded ? itemWidthExpanded : itemWidthCollapsed

    const totalWidthNeeded = itemsCount * currentItemWidth - gapRems

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
