import type { ToolbarLabels } from '../../../../lib/i18n/types'

export type { ToolbarLabels }

export interface ToolbarItem {
  icon: React.ReactElement
  ariaLabel: string
  label?: string
  disabled?: boolean
  onClick?: () => void
  gap?: boolean
  tooltip?: string
}

export interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean
  showExpandedToggle?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
  autoCollapse?: boolean
  /** Override internal UI labels for internationalization support. */
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
  showGap?: boolean
  vertical?: boolean
}

export interface UseToolbarOverflowParams {
  itemsCount: number
  isExpanded: boolean
  isVertical: boolean
  collapsedWidth: number // 48px
  expandedLabelWidth: number
  gap?: number
  showExpandedToggle?: boolean
  autoCollapse?: boolean
}
