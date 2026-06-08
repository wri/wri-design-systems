import type { LayerItemLabels } from '../../../../lib/i18n/types'

export type { LayerItemLabels }

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
  onChange?: (name: string, checked: boolean, selectedValue?: string) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LayerItemLabels>
}
