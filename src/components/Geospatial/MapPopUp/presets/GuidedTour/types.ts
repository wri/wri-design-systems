import type { Placement } from '@floating-ui/react'
import type {
  GuidedTourLabels,
  MapPopUpLabels,
} from '../../../../../lib/i18n/types'

export type { GuidedTourLabels }

export type GuidedTourStep = {
  /** Stable identifier for the step, useful as a React key and for tracking. */
  id: string
  /** The element the popup/connector should point to for this step. */
  anchorRef: React.RefObject<HTMLButtonElement | null>
  /** Preferred placement. Default: "bottom" */
  placement?: Placement
  /** Gap between anchor and popup. Also affects connector length. Default: 30 */
  offset?: number
  /** Bold heading rendered in the popup header. */
  title: React.ReactNode
  /** Optional secondary line under the title. */
  caption?: React.ReactNode
  /** Optional icon rendered before the title. */
  icon?: React.ReactNode
  /** Body of the step. */
  content: React.ReactNode
  /** Extra content appended below the tour footer controls for this step. */
  footer?: React.ReactNode
  /** Override internal MapPopUp labels for this step. */
  labels?: Partial<MapPopUpLabels>
}

export type GuidedTourProps = {
  /** Whether the tour is visible. */
  open: boolean
  onOpenChange: (open: boolean) => void
  /** The tour steps, in order. */
  steps: GuidedTourStep[]
  /** Zero-based index of the visible step. */
  activeStepIndex: number
  /** Called with the next/previous index when navigating. */
  onStepChange: (index: number) => void
  /** Called on Finish (last step). Defaults to closing the tour. */
  onFinish?: () => void
  /** Called on Skip all. Defaults to closing the tour. */
  onSkip?: () => void
  /**
   * Surface style of the popup. `dark` uses neutral/800 as background,
   * neutral/100 as text color and neutral/900 for the connector (arrow).
   * Default: "dark"
   */
  variant?: 'default' | 'dark'
  /** Close the tour with the Escape key. Default: true */
  closeOnEscape?: boolean
  /** Close the tour when clicking outside the popup. Default: false */
  closeOnOutsideClick?: boolean
  /** Renders the dimmed backdrop layer behind the popup. Default: true */
  showOverlay?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<GuidedTourLabels>
}
