import { Placement } from '@floating-ui/react'
import type { MapPopUpLabels } from '../../../lib/i18n/types'

export type { MapPopUpLabels }

export type MapPopUpProps = {
  /** Controls whether the popup is rendered */
  open: boolean
  /** Called with the next open state when the popup opens or closes */
  onOpenChange: (open: boolean) => void
  /** The element that the modal/connector should point to */
  anchorRef: React.RefObject<HTMLButtonElement | null>
  /** Content rendered in the popup header, next to the close button */
  header: React.ReactNode
  /** Main content rendered in the popup body */
  content: React.ReactNode
  /** Optional content rendered in the popup footer */
  footer?: React.ReactNode
  /** Preferred placement of the popup relative to the anchor, flipped when there is not enough space. Defaults to `bottom` */
  placement?: Placement
  /**
   * Surface style of the popup. `dark` uses neutral/800 as background,
   * neutral/100 as text color and neutral/900 for the connector (arrow).
   * Defaults to `default`
   */
  variant?: 'default' | 'dark'
  /** Gap between anchor and modal. Also affects connector length. Defaults to `30` */
  offset?: number // default: 30
  /** Closes the popup when the escape key is pressed. Defaults to `true` */
  closeOnEscape?: boolean // default: true
  /** Closes the popup when clicking outside of it. Defaults to `false` */
  closeOnOutsideClick?: boolean // default: false
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MapPopUpLabels>
}
