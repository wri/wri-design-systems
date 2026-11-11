import { SliderRootProps as ChakraSliderRootProps } from '@chakra-ui/react'

export type SliderMarksProps = {
  /** Tick marks to render as track markers */
  marks?: Array<number | { value: number; label: React.ReactNode }>
  /** Emphasizes the middle marker for centred sliders */
  isCentred?: boolean
}

type ValueChangeDetails = {
  value: number[]
}

export type SliderProps = Omit<
  ChakraSliderRootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'thumbAlignment'
  | 'thumbSize'
  | 'label'
  | 'defaultChecked'
  | 'origin'
  | 'defaultValue'
> & {
  /** Custom width for the slider */
  width?: string
  /** Minimum slider value. Defaults to `0` */
  min?: number
  /** Maximum slider value. Defaults to `100` */
  max?: number
  /** Controlled value(s) of the slider. Defaults to `[0]` */
  value?: number[]
  /** Tick marks on the track. Numbers render markers only; objects can also render a label below the track */
  marks?: Array<number | { value: number; label: React.ReactNode }>
  /** Increment between selectable values */
  step?: number
  /** Disables the slider and applies disabled styles */
  disabled?: boolean
  /** Called with the current value(s) while the value changes */
  onValueChange?: (details: ValueChangeDetails) => void
  /** Called with the final value(s) when the change interaction ends */
  onValueChangeEnd?: (details: ValueChangeDetails) => void
  /** Renders a centred origin: the filled range grows from the middle and a middle marker is drawn between min and max */
  isCentred?: boolean
  /** Colors used to render a gradient track, e.g. for data-driven scales (low → high) */
  colors?: string[]
}
