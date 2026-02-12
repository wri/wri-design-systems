export type ModalProps = {
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full-width'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
  width?: string
  height?: string
  maxHeight?: string
}
