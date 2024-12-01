import React from 'react'
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type IconButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  icon: React.ReactNode
  disabled?: boolean
}
