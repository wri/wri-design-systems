import { SliderProps } from '../../Controls/Slider/types'

export type SliderInputProps = {
  /** Field label rendered above the slider */
  label: string
  /** Helper text rendered below the label */
  caption?: string
  /** Controls the field text size and spacing Defaults to `'default'` */
  size?: 'default' | 'small'
  /** Slider configuration props from the `Slider` component; when `step` and `marks` are set the numeric input is replaced by a select of the marks */
  sliderItem: SliderProps
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Called with the current slider values whenever the slider or an input commits a change */
  onChange?: (value: number[]) => void
}
