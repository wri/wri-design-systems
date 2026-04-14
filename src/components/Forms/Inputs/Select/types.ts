import { SelectRootProps as ChakraSelectRootProps } from '@chakra-ui/react'
import type { SelectLabels } from '../../../../lib/i18n/types'

export type { SelectLabels }

export type SelectItemProps = {
  label: string
  caption?: string
  value: string
}

export type SelectProps = Omit<
  ChakraSelectRootProps,
  | 'collection'
  | 'size'
  | 'colorPalette'
  | 'variant'
  | 'onValueChange'
  | 'onChange'
  | 'defaultChecked'
  | 'invalid'
> & {
  label?: string
  caption?: string
  placeholder?: string
  defaultValue?: string[]
  items: SelectItemProps[]
  size?: 'default' | 'small'
  required?: boolean
  disabled?: boolean
  onChange?: (value: string[]) => void
  errorMessage?: string
  multiple?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<SelectLabels>
}
