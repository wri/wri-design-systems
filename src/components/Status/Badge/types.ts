import type { ReactNode } from 'react'
import type { BadgeLabels } from '../../../lib/i18n/types'

export type { BadgeLabels }

export type BadgeSize = 'small' | 'large'

export type BadgeProps = {
  /** Whether to show the notification dot when there is no count */
  hasNotification?: boolean
  /** Number to display; counts above 99 render as 99+ */
  notificationCount?: number
  /** Text label rendered next to the notification */
  label?: string
  /** Size of the notification indicator. Defaults to `'large'` */
  size?: BadgeSize
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<BadgeLabels>
  /** Custom content rendered instead of the default bell icon */
  children?: ReactNode
}
