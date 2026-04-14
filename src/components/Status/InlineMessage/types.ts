import type { InlineMessageLabels } from '../../../lib/i18n/types'

export type { InlineMessageLabels }

export type InlineMessageProps = {
  label: string
  caption?: string | React.ReactNode
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'large' | 'full-width'
  icon?: React.ReactNode
  onActionClick?: VoidFunction
  actionLabel?: string
  isButtonRight?: boolean
  buttonLeftIcon?: React.ReactNode
  buttonRightIcon?: React.ReactNode
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<InlineMessageLabels>
}
