import type { AvatarLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'
import type { BadgeSize } from '../Badge/types'

export type { AvatarLabels }

export type AvatarProps = {
  /** Name used for the initials fallback and the default aria-label */
  name: string
  /** Accessible name for the avatar; defaults to the name */
  ariaLabel?: string
  /** Avatar size preset. Defaults to `'medium'` */
  size?: 'small' | 'medium' | 'large'
  /** Custom size overriding the size preset */
  customSize?: SizeValue
  /** Image source of the avatar */
  src?: string
  /** Image source set of the avatar */
  srcSet?: string
  /** Called when the avatar is clicked; also gives it button semantics */
  onClick?: () => void
  /** Notification count rendered as a Badge overlay */
  notificationCount?: number
  /** Size of the notification Badge. Defaults to `'large'` */
  badgeSize?: BadgeSize
  /** Whether the avatar is disabled. Defaults to `false` */
  disabled?: boolean
  /** Custom background color of the avatar circle. Defaults to `''` */
  customBackgroundColor?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AvatarLabels>
}
