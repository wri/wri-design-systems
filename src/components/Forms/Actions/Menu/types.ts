import type { MenuLabels } from '../../../../lib/i18n/types'

export type { MenuLabels }

export type MenuItemProps = {
  /** Primary text of the item */
  label?: string
  /** Secondary text shown under the label */
  caption?: string
  /** Icon rendered before the item label */
  startIcon?: React.ReactNode
  /** Icon rendered at the end of the item; replaced by a check icon when the item is checked */
  endIcon?: React.ReactNode
  /** Keyboard shortcut shown next to the label */
  command?: string
  /** Custom item content; replaces the default label, caption, and icons layout */
  children?: React.ReactNode
  /** Value passed to `onSelect` when the item is selected. Defaults to `label` */
  value?: string
  /** Disables the item */
  disabled?: boolean
  /** Nested items rendered in a submenu */
  submenu?: MenuItemProps[]
  /** Called when the item is selected */
  onClick?: () => void
  /** URL that turns the item into a link */
  link?: string
  /** Width of the submenu opened from this item. Defaults to `'14rem'` */
  menuWidth?: string | 'content'
}

export type MenuProps = {
  /** Color theme of the trigger button. Defaults to `'light'` */
  theme?: 'light' | 'dark'
  /** Text of the default trigger button; also the fallback aria-label of the menu content */
  label: string
  /** Hides the decorative arrow on the menu content. Defaults to `false` */
  hideArrow?: boolean
  /** Font size of the trigger label. Defaults to `'1rem'` */
  fontSize?: string
  /** Flat list of menu items rendered before any groups */
  items?: MenuItemProps[]
  /** Items rendered as titled groups, separated by dividers */
  groups?: {
    title: string
    items: MenuItemProps[]
  }[]
  /** Called with the value of the selected item */
  onSelect?: (value: string) => void
  /** Custom trigger element that replaces the default button trigger */
  customTrigger?: React.ReactNode
  /**
   * When set, enables checkable items. 'multiple' allows many items checked
   * at once; 'radio' allows only one. Omit for a non-selectable menu
   */
  selectionMode?: 'multiple' | 'radio'
  /** Values that are checked by default on first render. Defaults to `[]` */
  defaultSelectedValues?: string[]
  /** Width of the menu content. Defaults to `'14rem'` */
  menuWidth?: string | 'content'
  /** Override internal UI labels for internationalization support */
  labels?: Partial<MenuLabels>
}
