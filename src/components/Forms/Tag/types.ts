import { Tag as ChakraTag } from '@chakra-ui/react'
import type { TagLabels } from '../../../lib/i18n/types'

export type { TagLabels }

export type TagProps = Omit<
  ChakraTag.RootProps,
  'size' | 'variant' | 'colorPalette' | 'children' | 'border' | 'color'
> & {
  /** Label content of the tag. Can be plain text or a React node */
  label: React.ReactNode
  /** Optional accessible name used when the label is not plain text */
  ariaLabel?: string
  /** Visual style of the tag */
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  /** Size of the tag. Defaults to `'default'` */
  size?: 'small' | 'default' | 'large'
  /** Disables the tag and applies disabled styles. Also hides the close button */
  disabled?: boolean
  /** Icon rendered inside the tag */
  icon?: React.ReactNode
  /** Whether the icon renders before (start) or after (end) the label. Defaults to `'start'` */
  iconPosition?: 'start' | 'end'
  /**
   * Optional custom background color, overriding the variant background.
   * Only valid CSS colors are applied (hex, named colors, color functions);
   * any other value is ignored to prevent CSS injection
   */
  backgroundColor?: string
  /**
   * Optional custom border color; when set, the border renders on any size.
   * Only valid CSS colors are applied (hex, named colors, color functions);
   * any other value is ignored to prevent CSS injection
   */
  borderColor?: string
  /**
   * Optional custom color for the close icon, overriding the default.
   * Only valid CSS colors are applied (hex, named colors, color functions);
   * any other value is ignored to prevent CSS injection
   */
  closeIconColor?: string
  /** Called when the close trigger is activated */
  onClose?: VoidFunction
  /** Renders a close button. Hidden when disabled or size small */
  closable?: boolean
  /** Override internal UI labels for internationalization support */
  labels?: Partial<TagLabels>
}
