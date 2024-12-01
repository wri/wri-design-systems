import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type CloseButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  disabled?: boolean
}
