import { Placement } from '@floating-ui/react'

export type MapPopUpProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** The element that the modal/connector should point to */
  anchorRef: React.RefObject<HTMLButtonElement | null>
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  placement?: Placement
  /** Gap between anchor and modal. Also affects connector length */
  offset?: number // default: 30
  closeOnEscape?: boolean // default: true
  closeOnOutsideClick?: boolean // default: false
}
