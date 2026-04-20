import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import { ListItemProps } from '../../DataDisplay/List/types'
import type { SearchLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'

export type { SearchLabels }

export type SearchProps = Omit<
  ChakraInputProps,
  'variant' | 'colorPalette' | 'defaultChecked'
> & {
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'default'
  options: ListItemProps[]
  resultsMaxHeight?: SizeValue
  isLoading?: boolean
  displayResults?: 'none' | 'text' | 'list' | 'custom'
  onSelect?: (selectedOption: ListItemProps) => void
  onQueryChange?: (query: string) => void
  onClear?: () => void
  renderResults?: (params: {
    items: any[]
    highlightedIndex: number
    query: string
    onSelect: (id: string) => void
  }) => React.ReactNode
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<SearchLabels>
}
