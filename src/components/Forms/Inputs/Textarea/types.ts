import { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react'
import type { TextareaLabels } from '../../../../lib/i18n/types'

export type { TextareaLabels }

export type TextareaProps = Omit<
  ChakraTextareaProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label?: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  minLength?: number
  maxLength?: number
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TextareaLabels>
}
