import type { ToastLabels } from '../../../lib/i18n/types'

export type { ToastLabels }

export type ToastProps = {
  label: string
  caption?: React.ReactNode
  type: 'success' | 'warning' | 'error' | 'info' | 'loading'
  placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  duration?: number
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  closable?: boolean
  closableLabel?: string
}

export type ToastComponentProps = {
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ToastLabels>
}
