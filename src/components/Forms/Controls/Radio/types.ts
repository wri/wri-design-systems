import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import type { Interpolation, Theme } from '@emotion/react'

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
  | 'color'
> & {
  name: string
  value?: ChakraRadioGroup.ItemProps['value']
  horizontal?: boolean
  onChange?: (name: string, selectedValue: string) => void
  customGap?: string
  css?: Interpolation<Theme>
  children?: React.ReactNode
}
