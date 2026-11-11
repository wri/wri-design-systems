export type CheckboxOptionCardItemProps = {
  /** Visible label text of the card */
  label: string
  /** Secondary caption text under the label */
  caption?: string
  /** Icon rendered to the left of (or above, when centered) the label */
  icon?: React.ReactNode
  /** Visual layout of the card. Defaults to `default` */
  variant?: 'default' | 'centered' | 'expanded'
  /** Disables the card and applies disabled styles */
  disabled?: boolean
  /** Extra content rendered in the addon area. Only rendered with variant expanded */
  children?: React.ReactNode
  /** Unique value submitted for the item when checked */
  value: string
}

export type CheckboxOptionCardProps = {
  /** Values of the items initially checked. When omitted, every item starts checked */
  defaultValue?: string[]
  /** List of option card items to render */
  items: CheckboxOptionCardItemProps[]
  /** Called with the array of checked values when the selection changes */
  onValueChange?: (value: string[]) => void
}
