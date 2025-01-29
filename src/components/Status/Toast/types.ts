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
