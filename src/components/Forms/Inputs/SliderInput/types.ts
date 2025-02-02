import { SliderProps } from '../../Controls/Slider/types'

export type SliderInputProps = {
  label: string
  caption?: string
  size?: 'default' | 'small'
  sliderItem: SliderProps
  required?: boolean
  onChange?: (value: number[]) => void
}
