import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import React from 'react'

export type MultiActionButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small'
  mainActionLabel: string
  mainActionOnClick: VoidFunction
  otherActions: {
    label: React.ReactNode
    value: string
    onClick: VoidFunction
  }[]
  disabled?: boolean
}
