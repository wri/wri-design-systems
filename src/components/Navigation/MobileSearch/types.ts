import type { InputProps as ChakraInputProps } from '@chakra-ui/react'
import type { ListItemProps } from '../../DataDisplay/List/types'
import type { MobileSearchLabels } from '../../../lib/i18n/types'

export type { MobileSearchLabels }

export type MobileSearchProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  /** Controlled input value, uncontrolled internal state is used when omitted */
  value?: string
  /** Placeholder and aria-label for the search input. Defaults to `labels.inputAriaLabel` */
  placeholder?: string
  /** Shows the info InlineMessage above the results list. Defaults to `true` */
  showInfoMessage?: boolean
  /** List items shown as results, filtered by the current query. Defaults to `[]` */
  items?: ListItemProps[]
  /** Called on each input change event */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Called with the current query string whenever it changes */
  onQueryChange?: (query: string) => void
  /** Called when the cancel button is pressed, clears the query and closes the results */
  onCancel?: () => void
  /** Called with the clicked item when a result item is clicked */
  onItemClick?: (item: ListItemProps) => void
  /** Override internal UI labels for internationalization support */
  labels?: Partial<MobileSearchLabels>
}
