import type { ComboboxLabels } from '../../../../lib/i18n/types'

export type { ComboboxLabels }

export type ComboboxItem = { label: string; value: string }

export type ComboboxProps = {
  /**
   * Dropdown options for both static lists and dynamically updated results.
   * Changes to the list contents replace the dropdown options. Defaults to `[]`
   */
  items?: ComboboxItem[]
  /**
   * Legacy dropdown options, read only on mount when `items` is omitted.
   * Pass the options through `items` instead. Defaults to `[]`
   * @deprecated
   */
  initialItems?: ComboboxItem[]
  /** Field label rendered above the input */
  label?: string
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Helper text rendered below the label */
  caption?: string
  /** Error message rendered below the input */
  errorMessage?: string
  /** Controls the input size Defaults to `'default'` */
  size?: 'small' | 'default'
  /** Disables the input and the dropdown */
  disabled?: boolean
  /** Shows the "(optional)" suffix for non-required fields */
  showOptionalLabel?: boolean
  /** Placeholder text shown when no option is selected */
  placeholder?: string
  /** Override internal UI labels for internationalization support */
  labels?: Partial<ComboboxLabels>
  /** Removes the bottom margin below the field */
  noMarginBottom?: boolean
  /** Allows selecting multiple options; pair with `showSelectedItems` to show them as removable tags */
  multiple?: boolean
  /** Shows the selected values as removable tags under the input */
  showSelectedItems?: boolean
  /**
   * Controlled selected values. When provided, the component is fully
   * controlled — pair with `onChange`.
   */
  value?: string[]
  /** Initial selected values for uncontrolled usage. Defaults to `[]` */
  defaultValue?: string[]
  /** Called with the selected values whenever the selection changes. */
  onChange?: (values: string[]) => void
  /**
   * Whether the user can create options that do not exist in the item list.
   * When `true`, typing a non-matching value shows a "Create …" row that adds
   * the entry to the list on selection. Defaults to `false`
   */
  creatable?: boolean
  /**
   * Called with the current input text on every change, including the empty
   * string when the input resets after a selection or clear (use it to restore
   * the full list). Providing this
   * callback enables server-side filtering mode: the built-in client-side
   * filtering is skipped and the rendered list is whatever `items` currently
   * contains, so the consumer can fetch matching items and pass them back via
   * the `items` prop.
   */
  onQueryChange?: (query: string) => void
  /**
   * Shows a loading spinner inside the dropdown and hides the "No items
   * found" empty state. Intended for server-side filtering mode while a
   * request triggered by `onQueryChange` is in flight. Defaults to `false`
   */
  isLoading?: boolean
}
