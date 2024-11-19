export type LayerItemProps = {
  name: string
  label: string
  caption?: string
  showInfoButton?: boolean
  infoButtonLabel?: string
  variant?: 'switch' | 'radio'
  disabled?: boolean
  onInfoClick?: () => void
  isDefaultSelected?: boolean
  onChange?: (name: string, checked: boolean) => void
}
