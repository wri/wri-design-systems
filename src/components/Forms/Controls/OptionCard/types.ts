import { RadioCardRootProps } from '@chakra-ui/react'

export type OptionCardItemProps = {
  /** Visible label text of the card */
  label?: string
  /** Secondary caption text under the label */
  caption?: string
  /** Icon rendered at the start of the card header */
  icon?: React.ReactNode
  /** Disables the card and applies disabled styles */
  disabled?: boolean
  /** Extra content rendered in the addon area. Only rendered with variant expanded */
  children?: React.ReactNode
  /** Unique value submitted for the item when selected */
  value: string
  /** Custom border and icon color applied when the card is selected. Defaults to `getThemedColor('primary', 700)` */
  selectedColor?: string
  /** Custom background color applied when the card is selected. Defaults to `getThemedColor('primary', 100)` */
  selectedBackgroundColor?: string
}

export type OptionCardProps = Omit<
  RadioCardRootProps,
  | 'colorPalette'
  | 'size'
  | 'variant'
  | 'as'
  | 'asChild'
  | 'unstyled'
  | 'defaultChecked'
> & {
  /** Value of the item initially selected */
  defaultValue?: string
  /** List of option card items to render */
  items: OptionCardItemProps[]
  /** Called with the selected value when the selection changes */
  onValueChange?: ({ value }: { value: string }) => void
  /** Visual layout of the cards. Defaults to `default` */
  variant?: 'default' | 'centered' | 'expanded'
  /** Custom width for each card. Defaults to `15.0625rem` */
  itemWidth?: string
  /** Hides the radio indicator on each card. Defaults to `false` */
  hideControl?: boolean
}
