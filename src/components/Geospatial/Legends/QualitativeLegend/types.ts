export type QualitativeLegendProps = {
  type: 'raster' | 'line' | 'point'
  label: string
  caption?: string
  color: string
  showActionButton?: boolean
  onActionClick?: () => void
  pointIcon?: React.ReactNode
}
