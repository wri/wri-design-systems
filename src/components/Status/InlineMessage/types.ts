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
  /**
   * Arbitrary content rendered inside the message (e.g. actions, links, custom markup).
   * Takes precedence over the deprecated action button props
   */
  children?: React.ReactNode
  /**
   * Whether the message content is aligned to the right of the message.
   * Defaults to `false`.
   */
  isContentRight?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<InlineMessageLabels>
  /** @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set */
  onActionClick?: VoidFunction
  /** @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set */
  actionLabel?: string
  /** @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set */
  actionButtonVariant?:
    | 'primary'
    | 'secondary'
    | 'borderless'
    | 'outline'
    | 'negative'
  /** @deprecated Use `isContentRight` instead. Ignored when `isContentRight` is set */
  isButtonRight?: boolean
  /** @deprecated Use `children` with a `<Button leftIcon={…} />` instead. Ignored when `children` is set */
  buttonLeftIcon?: React.ReactNode
  /** @deprecated Use `children` with a `<Button rightIcon={…} />` instead. Ignored when `children` is set */
  buttonRightIcon?: React.ReactNode
}
