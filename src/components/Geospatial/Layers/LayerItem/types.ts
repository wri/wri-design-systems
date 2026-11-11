import type { LayerItemLabels } from '../../../../lib/i18n/types'

export type { LayerItemLabels }

export type LayerItemProps = {
  /** Unique name identifying the layer, used as the Switch name or Radio value */
  name: string
  /** Display name of the layer */
  label: string
  /** Optional description shown under the layer label */
  caption?: string
  /** Shows the info button below the layer. Defaults to `true` */
  showInfoButton?: boolean
  /** Custom label for the info button; falls back to the aboutDataLabel label */
  infoButtonLabel?: string
  /** Control rendered for the layer; switch shows a Switch, radio shows a Radio. Defaults to `switch` */
  variant?: 'switch' | 'radio'
  /** Disables the layer control and info button */
  disabled?: boolean
  /** Called when the info button is clicked */
  onInfoClick?: () => void
  /** Selects the layer by default on first render. Defaults to `false` */
  isDefaultSelected?: boolean
  /** Called with the layer name and new checked state when the control changes */
  onChange?: (name: string, checked: boolean, selectedValue?: string) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LayerItemLabels>
}
