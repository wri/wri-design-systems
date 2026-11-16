import type { MaybeElement } from '@zag-js/types'
import { SizeValue } from '../../../lib/sizing'
import type { DialogLabels } from '../../../lib/i18n/types'

export type { DialogLabels }

export type DialogProps = {
  /** Dialog title, rendered in the header */
  title: string
  /** Body content rendered under the title */
  children?: React.ReactNode
  /** Footer content rendered right-aligned below the body; compose Buttons (e.g. a secondary Cancel followed by the primary action) as needed */
  footer?: React.ReactNode
  /** Hides the close button in the header. Defaults to `false` */
  hideCloseButton?: boolean
  /** Controls whether the dialog is rendered */
  open: boolean
  /** Called when the dialog is closed via the close button, escape key or outside interaction */
  onClose?: () => void
  /** Overrides the fixed design width (27.5rem / 440px) */
  width?: SizeValue
  /** Closes the dialog when the escape key is pressed. Defaults to `true` */
  closeOnEscape?: boolean
  /** Closes the dialog on backdrop or outside interaction. Defaults to `true` */
  closeOnInteractOutside?: boolean
  /** Returns the element that receives focus when the dialog opens */
  initialFocusEl?: () => MaybeElement
  /** Scroll behavior when the content overflows. Defaults to `'inside'` */
  scrollBehavior?: 'inside' | 'outside'
  /** Vertical placement of the dialog in the viewport. Defaults to `'top'` */
  placement?: 'top' | 'center' | 'bottom'
  /** Override internal UI labels for internationalization support */
  labels?: Partial<DialogLabels>
}
