import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import React from 'react'
import type { ButtonLabels } from '../../../../lib/i18n/types'

export type { ButtonLabels }

export type ButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  /** Button content; may be any React node, but only plain text is used as the accessible name */
  label?: string | React.ReactNode
  /** Shows a spinner in place of the icons and disables the button */
  loading?: boolean
  /** Visual style of the button. Defaults to `'primary'` */
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline' | 'negative'
  /** Size of the button. Defaults to `'default'` */
  size?: 'default' | 'small'
  /** Disables the button */
  disabled?: boolean
  /** Icon rendered before the button content */
  leftIcon?: React.ReactNode
  /** Icon rendered after the button content */
  rightIcon?: React.ReactNode
  /** Button content; use instead of `label` */
  children?: React.ReactNode
  /** Override internal UI labels for internationalization support */
  labels?: Partial<ButtonLabels>
}
