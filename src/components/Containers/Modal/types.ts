import type { MaybeElement } from '@zag-js/types'
import { SizeValue } from '../../../lib/sizing'
import type { ModalLabels } from '../../../lib/i18n/types'

export type { ModalLabels }

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
  labels?: Partial<ModalLabels>
  lazyMount?: boolean
  unmountOnExit?: boolean
  restoreFocus?: boolean
  modal?: boolean
  initialFocusEl?: () => MaybeElement
  finalFocusEl?: () => MaybeElement
  trapFocus?: boolean
}
