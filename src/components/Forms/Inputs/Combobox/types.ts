import type { TextInputLabels } from '../../../../lib/i18n/types'

export type ComboboxProps = {
  initialItems?: { label: string; value: string }[]
  label?: string
  required?: boolean
  caption?: string
  errorMessage?: string
  size?: 'small' | 'default'
  disabled?: boolean
  placeholder?: string
  labels?: Partial<TextInputLabels>
  noMarginBottom?: boolean
  multiple?: boolean
  showSelectedItems?: boolean
}
