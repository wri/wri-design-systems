import type { AvatarLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'

export type { AvatarLabels }

export type AvatarProps = {
  name: string
  ariaLabel?: string
  size?: 'small' | 'medium' | 'large'
  customSize?: SizeValue
  src?: string
  srcSet?: string
  onClick?: () => void
  notificationCount?: number
  disabled?: boolean
  customBackgroundColor?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AvatarLabels>
}
