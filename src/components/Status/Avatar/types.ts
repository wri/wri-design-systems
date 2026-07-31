import type { AvatarLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'
import type { BadgeSize } from '../Badge/types'

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
  badgeSize?: BadgeSize
  disabled?: boolean
  customBackgroundColor?: string
  labels?: Partial<AvatarLabels>
}
