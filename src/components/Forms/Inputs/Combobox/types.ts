import type { ComboboxLabels } from '../../../../lib/i18n/types'

export type { ComboboxLabels }

export type ComboboxItem = { label: string; value: string }

export type ComboboxProps = {
  /**
   * Items to render in the dropdown. Reactive: when this prop changes (e.g.
   * after an async fetch), the dropdown list is replaced.
   * @default []
   */
  items?: ComboboxItem[]
  /**
   * Seed items for the dropdown list. Only read on first mount; use `items`
   * for a list that updates. `items` takes precedence when both are provided.
   * @default []
   */
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
   * Whether the user can create options that do not exist in the item list.
   * When `true`, typing a non-matching value shows a "Create …" row that adds
   * the entry to the list on selection.
   * @default false
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
   * request triggered by `onQueryChange` is in flight.
   * @default false
   */
  isLoading?: boolean
}
