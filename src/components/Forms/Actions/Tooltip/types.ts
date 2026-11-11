export type TooltipProps = {
  /** Element that triggers the tooltip */
  children: React.ReactNode
  /** Content shown inside the tooltip */
  content: React.ReactNode
  /** Shows the tooltip arrow; only applies to the `pill` variant. Defaults to `true` */
  showArrow?: boolean
  /** Prevents the tooltip from opening */
  disabled?: boolean
  /** Placement of the tooltip relative to the trigger. Defaults to `'bottom'` */
  position?: 'top' | 'right' | 'bottom' | 'left'
  /** Visual style of the tooltip. Defaults to `'pill'` */
  variant?: 'pill' | 'text'
  /** Container element for the tooltip portal */
  portalRef?: React.RefObject<HTMLElement | null>
  /** Delay in milliseconds before the tooltip opens. Defaults to `0` */
  openDelay?: number
  /** Delay in milliseconds before the tooltip closes. Defaults to `0` */
  closeDelay?: number
  /** Uses the child as the trigger without adding tab focus or trigger styles. Defaults to `false` */
  preserveFocusOnChild?: boolean
}
