export type AvatarProps = {
  name: string
  ariaLabel?: string
  size?: 'small' | 'medium' | 'large'
  customSize?: string
  src?: string
  srcSet?: string
  onClick?: () => void
  notificationCount?: number
  disabled?: boolean
}
