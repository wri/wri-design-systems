import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import type { CloseButtonLabels } from '../../../../lib/i18n/types'

export type { CloseButtonLabels }

export type CloseButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  disabled?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<CloseButtonLabels>
}
