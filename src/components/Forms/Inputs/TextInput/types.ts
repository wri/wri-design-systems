import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import type { TextInputLabels } from '../../../../lib/i18n/types'

export type { TextInputLabels }

export type TextInputProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  /** Field label rendered above the input */
  label?: string
  /** Helper text rendered below the label */
  caption?: string
  /** Placeholder text shown when the field is empty */
  placeholder?: string
  /** Error message rendered below the input */
  errorMessage?: string
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Disables the input */
  disabled?: boolean
  /** Controls the input size Defaults to `'default'` */
  size?: 'small' | 'default'
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Removes the bottom margin below the field Defaults to `false` */
  noMarginBottom?: boolean
  /** Initial value for uncontrolled usage Defaults to `''` */
  defaultValue?: string
  /** Called on each input change event */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Override internal UI labels for internationalization support */
  labels?: Partial<TextInputLabels>
}
