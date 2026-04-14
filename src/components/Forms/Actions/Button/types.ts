import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import React from 'react'
import type { ButtonLabels } from '../../../../lib/i18n/types'

export type { ButtonLabels }

export type ButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label?: string
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode // use instead of label
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ButtonLabels>
}
