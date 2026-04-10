import type { QualitativeAttrLabels } from '../../../../lib/i18n/types'

export type { QualitativeAttrLabels }

export type QualitativeAttributeProps = {
  type: 'raster' | 'line' | 'point'
  label: string | React.ReactNode
  caption?: string
  color: string
  showActionButton?: boolean
  onActionClick?: () => void
  pointIcon?: React.ReactNode
  ariaLabelType?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<QualitativeAttrLabels>
}
