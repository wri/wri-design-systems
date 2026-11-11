import React, { ReactElement } from 'react'

export type ListItemVariant = 'data' | 'navigation' | 'select'

export interface ListItemProps {
  /** Unique element id for the item row */
  id?: string
  /** Primary content of the item row */
  label: React.ReactNode
  /** Plain-text copy of the label used for search filtering */
  searchLabel?: string
  /** Secondary text rendered under the label */
  caption?: string
  /** Optional icon rendered before the label */
  icon?: ReactElement
  /** Right-aligned value shown in the data variant */
  value?: React.ReactNode
  /** Visual and behavioral variant of the item row. Defaults to `'data'` */
  variant?: ListItemVariant
  /** Whether a clickable item is announced as expanded. Defaults to `false` */
  isExpanded?: boolean
  /** Called when a navigation or select item is clicked */
  onItemClick?: () => void
  /** Accessible name for the item row, derived from the label when omitted */
  ariaLabel?: string
  /** Whether the item row is disabled. Defaults to `false` */
  disabled?: boolean
  /** Whether the item row is highlighted. Defaults to `false` */
  isHighlighted?: boolean
}

export interface ListProps {
  /** Item definitions rendered as list rows */
  items: ListItemProps[]
  /** Whether to remove the border around the list container */
  noBorder?: boolean
  /** Index of the item to highlight, used by keyboard navigation */
  highlightedIndex?: number
}
