import type { SizeValue } from '../../../lib/sizing'

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
}
