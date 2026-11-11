import { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react'
import type { TextareaLabels } from '../../../../lib/i18n/types'

export type { TextareaLabels }

export type TextareaProps = Omit<
  ChakraTextareaProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  /** Field label rendered above the textarea */
  label?: string
  /** Helper text rendered below the label */
  caption?: string
  /** Placeholder text shown when the field is empty */
  placeholder?: string
  /** Error message rendered below the textarea */
  errorMessage?: string
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Disables the textarea */
  disabled?: boolean
  /** Controls the textarea size Defaults to `'default'` */
  size?: 'small' | 'default'
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Initial value for uncontrolled usage Defaults to `''` */
  defaultValue?: string
  /** Called on each textarea change event */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Minimum character count; shows a helper or error message under the textarea */
  minLength?: number
  /** Maximum character count; shows a helper or error message under the textarea */
  maxLength?: number
  /** Override internal UI labels for internationalization support */
  labels?: Partial<TextareaLabels>
}
