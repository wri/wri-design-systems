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
  'size' | 'variant' | 'colorPalette' | 'value' | 'onChange' | 'children'
> & {
  name: string
  defaultValue?: string
  horizontal?: boolean
  onChange?: (name: string, selectedValue: string) => void
  customGap?: string
  children?: React.ReactNode
}
