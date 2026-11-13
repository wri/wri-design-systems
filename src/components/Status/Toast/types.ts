import type { ToastLabels } from '../../../lib/i18n/types'

export type { ToastLabels }

export type ToastProps = {
  /** Optional ID for the toast, useful for programmatically closing it */
  id?: string
  /** Primary toast content. Accepts any React node; set `ariaLabel` when the content is not plain text */
  label: React.ReactNode
  /** Accessible name of the toast. Provide it when `label` is not plain text */
  ariaLabel?: string
  /** Secondary toast text rendered under the label */
  caption?: React.ReactNode
  /**
   * Toast type controlling the icon and color scheme.
   * `info` is deprecated and maps to `general` — use `general` instead
   */
  type:
    | 'success'
    | 'warning'
    | 'error'
    | 'general'
    | 'information'
    | 'loading'
    | 'info'
  /** Screen position where the toast appears */
  placement:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
  /** How long the toast stays visible in milliseconds. Defaults to `5000` */
  duration?: number
  /** Custom icon replacing the default type icon */
  icon?: React.ReactNode
  /** Hides the icon entirely, including the default type icon. Defaults to `false` */
  hideIcon?: boolean
  /** Optional action button shown in the toast. When combined with `closable`, the labelled borderless dismiss button is rendered instead of the close (X) button */
  action?: {
    label: string
    onClick: () => void
  }
  /**
   * Whether the toast can be dismissed. Renders the close (X) button, or the
   * labelled borderless dismiss button when an `action` is also present
   */
  closable?: boolean
  /**
   * Label on the dismiss button and accessible name of the close (X) button.
   * @deprecated The close button is icon-only now. Kept for backwards
   * compatibility; it overrides the dismiss button label and the close button
   * accessible name
   */
  closableLabel?: string
  /** Called when the close or dismiss button is clicked */
  onClose?: () => void
  /** Custom width of the toast */
  width?: string
  /**
   * Custom max width of the toast.
   * @deprecated Use `width` instead
   */
  maxWidth?: string
}

export type ToastComponentProps = {
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ToastLabels>
}
