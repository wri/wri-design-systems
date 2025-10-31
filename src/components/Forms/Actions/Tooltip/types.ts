export type TooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
  showArrow?: boolean // default: true
  disabled?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left' // default: 'bottom'
  variant?: 'pill' | 'text' // default: 'pill'
  portalRef?: React.RefObject<HTMLElement | null>
  openDelay?: number
  closeDelay?: number
}
