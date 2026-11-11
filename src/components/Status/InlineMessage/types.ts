import type { InlineMessageLabels } from '../../../lib/i18n/types'

export type { InlineMessageLabels }

export type InlineMessageSize =
  | 'small'
  | 'large'
  | 'full-width'
  | 'small-full-width'

export type InlineMessageProps = {
  /** Primary message text */
  label: string | React.ReactNode
  /** Secondary message text rendered under the label */
  caption?: string | React.ReactNode
  /** Color scheme of the message */
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  /** Message size and width. Defaults to `'large'` */
  size?: InlineMessageSize
  /** Icon rendered before the label. Defaults to `<InfoIcon height='1rem' width='1rem' />` */
  icon?: React.ReactNode
  /** Called when the action button is clicked */
  onActionClick?: VoidFunction
  /** Text of the optional action button; renders the button when set */
  actionLabel?: string
  /** Variant of the action button. Defaults to `'secondary'` */
  actionButtonVariant?:
    | 'primary'
    | 'secondary'
    | 'borderless'
    | 'outline'
    | 'negative'
  /** Whether the action button sits to the right of the message */
  isButtonRight?: boolean
  /** Icon rendered before the action button label */
  buttonLeftIcon?: React.ReactNode
  /** Icon rendered after the action button label */
  buttonRightIcon?: React.ReactNode
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<InlineMessageLabels>
}
