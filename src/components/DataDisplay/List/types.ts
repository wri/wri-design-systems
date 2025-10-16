import React, { ReactElement } from 'react'

export type ListItemVariant = 'data' | 'navigation'

export interface ListItemProps {
  label: string
  caption?: string
  icon?: ReactElement
  value?: string
  variant?: ListItemVariant
  isExpanded?: boolean
  id?: string
  onItemClick?: () => void
  ariaLabel?: string
}

export interface ListProps {
  items: ListItemProps[]
}
