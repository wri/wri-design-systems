import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import { ListItemProps } from '../../DataDisplay/List/types'
import type { SearchLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'

export type { SearchLabels }

export type SearchProps = Omit<
  ChakraInputProps,
  | 'variant'
  | 'colorPalette'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'onChange'
> & {
  /** Placeholder and aria-label for the search input. Defaults to `labels.filterPlaceholder` */
  placeholder?: string
  /** Disables the search input */
  disabled?: boolean
  /** Size of the search input and icon. Defaults to `'default'` */
  size?: 'small' | 'default'
  /** Options to filter and display as results. Defaults to `[]` */
  options: ListItemProps[]
  /** Maximum height of the results popover, numbers resolve to spacing-scale rem values. Defaults to `50` */
  resultsMaxHeight?: SizeValue
  /** Shows a spinner in the results popover when true. Defaults to `false` */
  isLoading?: boolean
  /** How results are rendered, one of 'none', 'text', 'list', or 'custom'. Defaults to `'text'` */
  displayResults?: 'none' | 'text' | 'list' | 'custom'
  /** Called with the selected option when a result is selected */
  onSelect?: (selectedOption: ListItemProps) => void
  /**
   * Called with the current query whenever it changes.
   * @deprecated Use `onChange` instead — it fires on typing, selection, and
   * clear, and is required to drive the controlled `value` prop.
   */
  onQueryChange?: (query: string) => void
  /** Called when the clear button is pressed */
  onClear?: () => void
  /**
   * Controlled input value: the query text while typing, or the selected
   * option's label after selection. When provided, the component is fully
   * controlled — pair with `onChange`.
   */
  value?: string
  /** Initial value for uncontrolled usage. Defaults to `''` */
  defaultValue?: string
  /** Called with the current input value whenever it changes (typing, selection, clear) */
  onChange?: (value: string) => void
  /** Custom results renderer used when displayResults is 'custom', receives items, highlightedIndex, query, and onSelect */
  renderResults?: (params: {
    items: any[]
    highlightedIndex: number
    query: string
    onSelect: (id: string) => void
  }) => React.ReactNode
  /** Override internal UI labels for internationalization support */
  labels?: Partial<SearchLabels>
}
