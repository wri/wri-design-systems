import type { MaybeElement } from '@zag-js/types'
import { SizeValue } from '../../../lib/sizing'
import type { ModalLabels } from '../../../lib/i18n/types'

export type { ModalLabels }

export type ModalProps = {
  /** Content rendered in the modal header */
  header: React.ReactNode
  /** Main content rendered in the modal body */
  content: React.ReactNode
  /** Optional content rendered in the modal footer, below the body */
  footer?: React.ReactNode
  /** Preset controlling the modal width and maximum height, overridden by explicit width or maxHeight. Defaults to `medium` */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full-width'
  /** Makes the modal draggable and removes the backdrop, allowing interaction with the page behind it */
  draggable?: boolean
  /** Hides the close button and disables closing via escape key or outside interaction */
  blocking?: boolean
  /** Controls whether the modal is rendered */
  open: boolean
  /** Called when the modal is closed via the close button, escape key or outside interaction */
  onClose?: () => void
  /** Overrides the preset width for the selected size */
  width?: SizeValue
  /** Explicit modal height; defaults to auto, or 90% for the full-width size */
  height?: SizeValue
  /** Overrides the preset maximum height for the selected size, capped at 80vh */
  maxHeight?: SizeValue
  /** Overrides built-in labels such as the dialog aria-label for localization */
  labels?: Partial<ModalLabels>
  /** Delays mounting the modal content until the first time it opens */
  lazyMount?: boolean
  /** Unmounts the modal content from the DOM when it closes */
  unmountOnExit?: boolean
  /** Returns focus to the previously focused element when the modal closes */
  restoreFocus?: boolean
  /** Passed to the underlying Chakra dialog to control its mode, such as outside-interaction behavior */
  modal?: boolean
  /** Returns the element that receives focus when the modal opens */
  initialFocusEl?: () => MaybeElement
  /** Returns the element that receives focus when the modal closes */
  finalFocusEl?: () => MaybeElement
  /** Keeps keyboard focus inside the modal while it is open */
  trapFocus?: boolean
}
