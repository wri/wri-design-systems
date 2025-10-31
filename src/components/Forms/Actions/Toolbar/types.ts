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
  variant?: 'default' | 'another-variant'
  expanded?: boolean
  toggleControl?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
}
