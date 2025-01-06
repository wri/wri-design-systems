export type InlineMessageProps = {
  label: string
  caption?: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'large'
  icon?: React.ReactNode
  onActionClick?: VoidFunction
  actionLabel?: string
  isButtonRight?: boolean
}
