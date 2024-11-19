import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'

export type RadioProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'name' | 'defaultChecked'
> & {
  value: string
  disabled?: boolean
}

export type RadioGroupProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'value'
> & {
  name: string
  defaultValue?: string
  isRow?: boolean
  onValueChange?: (value: string) => void
}
