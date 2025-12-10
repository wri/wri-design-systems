import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import { ListItemProps } from '../../DataDisplay/List/types'

export type SearchProps = Omit<
  ChakraInputProps,
  'variant' | 'colorPalette' | 'defaultChecked'
> & {
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'default'
  options: ListItemProps[]
  onSelect?: (selectedOption: ListItemProps) => void
  onQueryChange?: (query: string) => void
  onClear?: () => void
}
