export type MenuItemProps = {
  label?: string
  caption?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  command?: string
  children?: React.ReactNode
  value?: string
  disabled?: boolean
  submenu?: MenuItemProps[]
  onClick?: () => void
  link?: string
}

export type MenuProps = {
  theme?: 'light' | 'dark'
  label: string
  items?: MenuItemProps[]
  groups?: {
    title: string
    items: MenuItemProps[]
  }[]
  onSelect?: (value: string) => void
  customTrigger?: React.ReactNode
}
