import React, { ReactElement } from 'react'

export type ListItemVariant = 'data' | 'navigation'

export interface ListItemProps {
  label: string
  caption?: string
  icon?: ReactElement
  value?: string
  variant?: ListItemVariant
  isExpanded?: boolean
  id?: string | number
  onItemClick?: () => void
}

export interface ListProps {
  items: ListEntry[]
}

export interface ListEntry {
  id?: string | number
  label: string
  data?: string
  caption?: string
  icon?: ReactElement
  variant?: 'data' | 'navigation'
  onClick?: () => void
}
