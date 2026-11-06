import { Tag as ChakraTag } from '@chakra-ui/react'
import type { TagLabels } from '../../../lib/i18n/types'

export type { TagLabels }

export type TagProps = Omit<
  ChakraTag.RootProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label: React.ReactNode
  /** Optional accessible name when `label` is not plain text. */
  ariaLabel?: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  icon?: React.ReactNode
  /** Whether the icon renders before (start) or after (end) the label. */
  iconPosition?: 'start' | 'end'
  /** Optional custom background color, overriding the variant background. */
  color?: string
  /** Optional custom border color; when set, the border renders on any size. */
  borderColor?: string
  /** Optional custom color for the close icon, overriding the default. */
  closeIconColor?: string
  onClose?: VoidFunction
  closable?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TagLabels>
}
