import type { ToolbarLabels } from '../../../../lib/i18n/types'

export type { ToolbarLabels }

export type ToolbarExpandSide = 'left' | 'right'

export interface ToolbarItem {
  icon: React.ReactElement
  ariaLabel: string
  label?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  gap?: boolean
  tooltip?: string
  active?: boolean
}

export interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean
  showExpandedToggle?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
  autoCollapse?: boolean
  expandSide?: ToolbarExpandSide
  labels?: Partial<ToolbarLabels>
}

export interface ToolbarButtonProps {
  isExpanded: boolean
  ariaLabel: string
  icon?: React.ReactNode
  label?: React.ReactNode
  tooltip?: string
  disabled?: boolean
  onClick?: () => void
  vertical?: boolean
  expandSide?: ToolbarExpandSide
  active?: boolean
}

export interface UseToolbarOverflowParams {
  itemsCount: number
  isExpanded: boolean
  isVertical: boolean
  endsGroup: boolean[]
  showExpandedToggle?: boolean
  autoCollapse?: boolean
}
