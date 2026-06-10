import type { MapMarkerLabels } from '../../../lib/i18n/types'

export type { MapMarkerLabels }

export type MapMarkerProps = {
  ariaLabel?: string
  icon?: React.ReactNode
  backgroundColor?: string
  onClick?: () => void
  showFocusState?: boolean
  count?: number
  mode?: 'dark' | 'light'
  variant?: 'cluster' | 'simple-pin' | 'icon'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MapMarkerLabels>
}
