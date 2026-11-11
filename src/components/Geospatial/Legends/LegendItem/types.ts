import type { LegendItemLabels } from '../../../../lib/i18n/types'

export type { LegendItemLabels }

export type LegendItemProps = {
  /** Name of the layer shown as the legend item title */
  layerName: string
  /** Unit of the layer data shown under the layer name */
  dataUnit: string
  /** Reserved for drag-and-drop reordering of the legend item */
  onDrag?: VoidFunction
  /** Called when the move-up button is clicked */
  onUpClick: VoidFunction
  /** Called when the move-down button is clicked */
  onDownClick: VoidFunction
  /** Called when the remove button is clicked */
  onRemoveClick: VoidFunction
  /** Legend content, such as ScaleBar or QualitativeAttribute components */
  children: React.ReactNode
  /** Called when the about-data button is clicked */
  onInfoClick: VoidFunction
  /** Called with the new opacity value when the opacity control changes */
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LegendItemLabels>
}
