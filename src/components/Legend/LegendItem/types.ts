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
}
