import type { ReactNode } from 'react'
import type { BadgeLabels } from '../../../lib/i18n/types'

export type { BadgeLabels }

export type BadgeSize = 'small' | 'large'

export type BadgeNotificationColor = {
  background?: string
  text?: string
}

export type BadgeProps = {
  hasNotification?: boolean
  notificationCount?: number
  label?: string
  size?: BadgeSize
  color?: BadgeNotificationColor
  labels?: Partial<BadgeLabels>
  children?: ReactNode
}
