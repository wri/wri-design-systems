import React, { ReactElement } from 'react'

export type ListItemVariant = 'data' | 'navigation'

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
}

export interface ListProps {
  items: ListItemProps[]
}
