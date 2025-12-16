import React, { ReactElement } from 'react'

export type ListItemVariant = 'data' | 'navigation' | 'select'

export interface ListItemProps {
  id?: string
  label: string
  caption?: string
  icon?: ReactElement
  value?: string
  variant?: ListItemVariant
  isExpanded?: boolean
  onItemClick?: () => void
  ariaLabel?: string
  disabled?: boolean
  isHighlighted?: boolean
}

export interface ListProps {
  items: ListItemProps[]
  noBorder?: boolean
  highlightedIndex?: number
}
