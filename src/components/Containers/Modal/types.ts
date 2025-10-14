export type ModalProps = {
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
}
