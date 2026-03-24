import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import type { TextInputLabels } from '../../../../lib/i18n/types'

export type { TextInputLabels }

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
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TextInputLabels>
}
