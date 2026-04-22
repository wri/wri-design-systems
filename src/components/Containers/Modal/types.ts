import { SizeValue } from '../../../lib/sizing'

export type ModalProps = {
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full-width'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
  width?: SizeValue
  height?: SizeValue
  maxHeight?: SizeValue
}
