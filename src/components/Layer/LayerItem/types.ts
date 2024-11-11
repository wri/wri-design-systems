export type LayerItemProps = {
  name: string
  label: string
  caption?: string
  showInfoButton?: boolean
  infoButtonLabel?: string
  variant?: 'switch' | 'radio'
  isDisabled?: boolean
  onInfoClick?: () => void
  isDefaultSelected?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
