export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type PopoverArrowAlignment = 'left' | 'center' | 'right'

export type PopoverProps = {
  /** Element that triggers the popover */
  children: React.ReactNode
  /** Content shown inside the popover */
  content: React.ReactNode
  /** Width of the popover content. Defaults to the Figma width */
  width?: string
  /** Hides the popover arrow; the arrow is visible by default */
  hideArrow?: boolean
  /** Alignment of the arrow along the popover edge. Defaults to `'left'` */
  arrowAlignment?: PopoverArrowAlignment
  /** Placement of the popover relative to the trigger. Defaults to `'bottom-start'` */
  placement?: PopoverPlacement
  /** Controlled open state of the popover */
  open?: boolean
  /** Called when the popover closes */
  onClose?: () => void
  /** Closes the popover when the escape key is pressed. Defaults to `true` */
  closeOnEscape?: boolean
  /** Closes the popover when clicking outside. Defaults to `true` */
  closeOnInteractOutside?: boolean
  /** Prevents the popover from opening */
  disabled?: boolean
  /** Container element for the popover portal */
  portalRef?: React.RefObject<HTMLElement | null>
}
