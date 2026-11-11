import type { QualitativeAttributeLabels } from '../../../../lib/i18n/types'

export type { QualitativeAttributeLabels }

export type QualitativeAttributeProps = {
  /** Visual indicator style; raster shows a square, line a bar, point a circular icon */
  type: 'raster' | 'line' | 'point'
  /** Attribute name shown next to the indicator */
  label: string | React.ReactNode
  /** Optional description shown under the label */
  caption?: string
  /** Color applied to the visual indicator */
  color: string
  /** Shows the show/hide action button; requires onActionClick */
  showActionButton?: boolean
  /** Called when the show/hide action button toggles visibility */
  onActionClick?: () => void
  /** Custom icon rendered inside the point indicator. Defaults to `PlaceholderIcon` */
  pointIcon?: React.ReactNode
  /** Extra type text passed to the aria-label template. Defaults to `''` */
  ariaLabelType?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<QualitativeAttributeLabels>
}
