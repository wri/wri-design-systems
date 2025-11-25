import { useEffect, useState, useRef } from 'react'
import { UseToolbarOverflowParams } from './types'

export function useToolbarOverflow({
  itemsCount,
  isExpanded,
  isVertical,
  collapsedWidth,
  expandedLabelWidth,
  gap = 0,
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

    const itemWidthCollapsed = collapsedWidth + gap
    const itemWidthExpanded = expandedLabelWidth + gap
    const currentItemWidth = isExpanded ? itemWidthExpanded : itemWidthCollapsed

    const totalWidthNeeded = itemsCount * currentItemWidth - gap

    const mustCollapse = totalWidthNeeded > containerWidth
    setShouldForceCollapse(mustCollapse)
    if (!isVertical) {
      setvisibleNumberOfItems(Math.floor(containerWidth / itemWidthCollapsed))
    }
  }, [
    containerWidth,
    itemsCount,
    isVertical,
    collapsedWidth,
    expandedLabelWidth,
    gap,
  ])

  return {
    containerRef,
    visibleNumberOfItems,
    shouldForceCollapse,
  }
}
