export type ModalProps = {
  title: string
  content: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
  showCancelButton?: boolean
  cancelLabel?: string
  showActionButton?: boolean
  actionLabel?: string
  onActionClick?: VoidFunction
}
