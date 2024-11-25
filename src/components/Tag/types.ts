import { Tag as ChakraTag } from '@chakra-ui/react'

export type TagProps = Omit<
  ChakraTag.RootProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  icon?: React.ReactNode
  onClose?: VoidFunction
  closable?: boolean
}
