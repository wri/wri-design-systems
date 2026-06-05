import type { ToastLabels } from '../../../lib/i18n/types'

export type { ToastLabels }

export type ToastProps = {
  id?: string // Optional ID for the toast, useful for programmatically closing it
  label: string
  caption?: React.ReactNode
  type: 'success' | 'warning' | 'error' | 'info' | 'loading'
  placement:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
  duration?: number
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  closable?: boolean
  closableLabel?: string
  onClose?: () => void
  maxWidth?: string
}

export type ToastComponentProps = {
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ToastLabels>
}
