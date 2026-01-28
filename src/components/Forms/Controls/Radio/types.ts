import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'

export type RadioProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'name' | 'defaultChecked' | 'onChange'
> & {
  value: string
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
  name: string
  value: ChakraRadioGroup.ItemProps['value']
  horizontal?: boolean
  onChange?: (name: string, selectedValue: string) => void
  customGap?: string
  children?: React.ReactNode
}
