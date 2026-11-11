import type { MapMarkerLabels } from '../../../lib/i18n/types'

export type { MapMarkerLabels }

export type MapMarkerProps = {
  /** Custom aria-label for the marker button; falls back to a label based on the count or variant */
  ariaLabel?: string
  /** Icon rendered inside the marker when variant is icon */
  icon?: React.ReactNode
  /** Background color of the marker */
  backgroundColor?: string
  /** Called when the marker button is clicked */
  onClick?: () => void
  /** Wraps the marker in a container that shows a focus ring */
  showFocusState?: boolean
  /** Number of features in a cluster, formatted and shown when variant is cluster */
  count?: number
  /** Color scheme of the marker; dark or light */
  mode?: 'dark' | 'light'
  /** Marker style; cluster shows a count, simple-pin a plain pin, icon a custom icon. Defaults to `icon` */
  variant?: 'cluster' | 'simple-pin' | 'icon'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MapMarkerLabels>
}
