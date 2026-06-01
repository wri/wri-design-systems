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
  fontSize?: string
  items?: MenuItemProps[]
  groups?: {
    title: string
    items: MenuItemProps[]
  }[]
  onSelect?: (value: string) => void
  customTrigger?: React.ReactNode
  /** When set, enables checkable items. 'multiple' allows many items checked at once; 'radio' allows only one. Omit (default) for a non-selectable menu. */
  selectionMode?: 'multiple' | 'radio'
  /** Values that are checked by default on first render. */
  defaultSelectedValues?: string[]
}
