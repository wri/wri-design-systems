import type { InputProps as ChakraInputProps } from '@chakra-ui/react'
import type { ListItemProps } from '../../DataDisplay/List/types'
import type { MobileSearchLabels } from '../../../lib/i18n/types'

export type { MobileSearchLabels }

export type MobileSearchProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  value?: string
  placeholder?: string
  showInfoMessage?: boolean
  items?: ListItemProps[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onQueryChange?: (query: string) => void
  onCancel?: () => void
  onItemClick?: (item: ListItemProps) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MobileSearchLabels>
}
