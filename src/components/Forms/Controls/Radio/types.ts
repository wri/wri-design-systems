import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'

export type RadioProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'name' | 'defaultChecked' | 'onChange'
> & {
  /** Value submitted for the radio when selected */
  value: string
  /** Disables the radio and applies disabled styles */
  disabled?: boolean
}

export type RadioGroupProps = Omit<
  ChakraRadioGroup.ItemProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'value'
  | 'onChange'
  | 'children'
  | 'defaultValue'
> & {
  /** Name of the radio group, also passed to the onChange callback */
  name: string
  /** Currently selected value (controlled). Defaults to `''` */
  value?: ChakraRadioGroup.ItemProps['value']
  /** Lays the radios out in a row instead of a column. Defaults to `false` */
  horizontal?: boolean
  /** Called with the group name and the newly selected value when the selection changes */
  onChange?: (name: string, selectedValue: string) => void
  /** Custom gap between items. Defaults to `1.25rem` when horizontal and `0.5rem` when vertical */
  customGap?: string
  /** Radio items to render inside the group */
  children?: React.ReactNode
}
