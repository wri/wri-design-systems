export type ScaleBarProps = {
  /** Color stops of the scale bar, one per segment or gradient stop */
  colors: string[]
  /** Value labels rendered under the scale bar */
  values: string[]
  /** Optional secondary labels rendered under the value labels */
  subLabels?: string[]
  /** Renders the colors as a continuous gradient instead of discrete segments */
  isGradient?: boolean
}
