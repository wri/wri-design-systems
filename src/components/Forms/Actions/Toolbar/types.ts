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
  breakpoint?: number
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
