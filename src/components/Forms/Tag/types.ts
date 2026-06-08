import { Tag as ChakraTag } from '@chakra-ui/react'
import type { TagLabels } from '../../../lib/i18n/types'

export type { TagLabels }

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
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TagLabels>
}
