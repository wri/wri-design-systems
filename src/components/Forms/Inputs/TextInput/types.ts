import { InputProps as ChakraInputProps } from '@chakra-ui/react'

export type TextInputProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label?: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  noMarginBottom?: boolean
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
