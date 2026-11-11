import type { SheetLabels } from '../../../lib/i18n/types'

export type { SheetLabels }

export type SheetProps = {
  /** Optional content rendered in the sheet header, next to the grabber */
  header?: React.ReactNode
  /** Main content rendered in the sheet body */
  content: React.ReactNode
  /** Optional content rendered in the sheet footer */
  footer?: React.ReactNode
  /** Controls whether the sheet is open. */
  open: boolean
  /** Called when the sheet is dismissed */
  onClose?: () => void
  /** Minimized snap height in pixels; falls back to the header height when omitted */
  minimizedHeight?: number
  /** Intermediate snap height in pixels. Defaults to `200` */
  midHeight?: number // default 200px
  /** Fully expanded snap height in pixels; falls back to five sixths of the available height when omitted */
  maxFullHeight?: number
  /** Snap point the sheet opens at; one of closed, minimized, mid or full. Defaults to `minimized` */
  defaultSnap?: 'closed' | 'minimized' | 'mid' | 'full'
  /** Class name applied to the sheet container */
  className?: string
  /** Prevents interaction with the page behind the sheet */
  blocking?: boolean
  /** z-index applied to the sheet overlay. Defaults to `1000` */
  zIndex?: number // default 1000
  /** Overrides the grabber aria-labels for localization */
  labels?: Partial<SheetLabels>
}
