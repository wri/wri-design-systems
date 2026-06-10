import type { BadgeLabels } from '../../../lib/i18n/types'

export type { BadgeLabels }

export type BadgeProps = {
  hasNotification?: boolean
  notificationCount?: number
  label?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<BadgeLabels>
}
