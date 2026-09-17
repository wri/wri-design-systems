import { Placement } from '@floating-ui/react'
import type { MapPopUpLabels } from '../../../lib/i18n/types'

export type { MapPopUpLabels }

export type MapPopUpProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** The element that the modal/connector should point to */
  anchorRef: React.RefObject<HTMLButtonElement | null>
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  placement?: Placement
  /**
   * Surface style of the popup. `dark` uses neutral/800 as background,
   * neutral/100 as text color and neutral/900 for the connector (arrow).
   * Default: "default"
   */
  variant?: 'default' | 'dark'
  /** Gap between anchor and modal. Also affects connector length */
  offset?: number // default: 30
  closeOnEscape?: boolean // default: true
  closeOnOutsideClick?: boolean // default: false
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MapPopUpLabels>
}
