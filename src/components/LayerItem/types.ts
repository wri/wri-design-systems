export type LayerItemProps = {
  id: string
  label: string
  caption?: string
  showInfoButton?: boolean
  infoButtonLabel?: string
  variant?: 'switch' | 'radio'
  isDisabled?: boolean
  onInfoClick?: () => void
  isDefaultSelected?: boolean
}
