export interface ToolbarItem {
  icon: React.ReactElement
  ariaLabel: string
  label?: string
  disabled?: boolean
  onClick?: () => void
  gap?: boolean
}

export interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean
  toggleControl?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
  breakpoint?: number
}
