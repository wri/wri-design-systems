import { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react'

export type TextareaProps = Omit<
  ChakraTextareaProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
