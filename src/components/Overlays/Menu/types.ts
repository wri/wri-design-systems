export type MenuItemProps = {
  label?: string
  caption?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  command?: string
  children?: React.ReactNode
  value: string
  disabled?: boolean
  submenu?: MenuItemProps[]
}

export type MenuProps = {
  label: string
  items?: MenuItemProps[]
  groups?: {
    title: string
    items: MenuItemProps[]
  }[]
  onSelect?: (value: string) => void
}
