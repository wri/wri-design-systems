import type { ComboboxLabels } from '../../../../lib/i18n/types'

export type { ComboboxLabels }

export type ComboboxProps = {
  initialItems?: { label: string; value: string }[]
  label?: string
  required?: boolean
  caption?: string
  errorMessage?: string
  size?: 'small' | 'default'
  disabled?: boolean
  showOptionalLabel?: boolean
  placeholder?: string
  labels?: Partial<ComboboxLabels>
  noMarginBottom?: boolean
  multiple?: boolean
  showSelectedItems?: boolean
}
