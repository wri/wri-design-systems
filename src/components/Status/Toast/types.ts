import type { ToastLabels } from '../../../lib/i18n/types'

export type { ToastLabels }

export type ToastProps = {
  /** Optional ID for the toast, useful for programmatically closing it */
  id?: string
  /** Primary toast text */
  label: string
  /** Secondary toast text rendered under the label */
  caption?: React.ReactNode
  /** Toast type controlling the icon and color scheme */
  type: 'success' | 'warning' | 'error' | 'info' | 'loading'
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
  /** Optional action button shown in the toast */
  action?: {
    label: string
    onClick: () => void
  }
  /** Whether to show the dismiss button */
  closable?: boolean
  /** Label on the dismiss button */
  closableLabel?: string
  /** Called when the dismiss button is clicked */
  onClose?: () => void
  /** Custom max width of the toast */
  maxWidth?: string
}

export type ToastComponentProps = {
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ToastLabels>
}
