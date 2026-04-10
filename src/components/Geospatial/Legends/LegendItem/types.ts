import type { LegendItemLabels } from '../../../../lib/i18n/types'

export type { LegendItemLabels }

export type LegendItemProps = {
  layerName: string
  dataUnit: string
  onDrag: VoidFunction
  onUpClick: VoidFunction
  onDownClick: VoidFunction
  onRemoveClick: VoidFunction
  children: React.ReactNode
  onInfoClick: VoidFunction
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LegendItemLabels>
}
