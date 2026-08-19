import type { InlineMessageLabels } from '../../../lib/i18n/types'

export type { InlineMessageLabels }

export type InlineMessageSize =
  | 'small'
  | 'large'
  | 'full-width'
  | 'small-full-width'

export type InlineMessageProps = {
  label: string | React.ReactNode
  caption?: string | React.ReactNode
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: InlineMessageSize
  icon?: React.ReactNode
  onActionClick?: VoidFunction
  actionLabel?: string
  isButtonRight?: boolean
  buttonLeftIcon?: React.ReactNode
  buttonRightIcon?: React.ReactNode
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<InlineMessageLabels>
}
