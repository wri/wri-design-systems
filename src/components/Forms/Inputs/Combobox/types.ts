import type { ComboboxLabels } from '../../../../lib/i18n/types'

export type { ComboboxLabels }

export type ComboboxItem = { label: string; value: string }

export type ComboboxProps = {
  initialItems?: ComboboxItem[]
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
  /**
   * Controlled selected values. When provided, the component is fully
   * controlled — pair with `onChange`.
   */
  value?: string[]
  /** Initial selected values for uncontrolled usage. */
  defaultValue?: string[]
  /** Called with the selected values whenever the selection changes. */
  onChange?: (values: string[]) => void
  /**
   * Whether the user can create options that do not exist in `initialItems`.
   * When `true`, typing a non-matching value shows a "Create …" row that adds
   * the entry to the list on selection.
   * @default false
   */
  creatable?: boolean
}
