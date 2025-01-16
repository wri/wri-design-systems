import { SliderRootProps as ChakraSliderRootProps } from '@chakra-ui/react'

export type SliderMarksProps = {
  marks?: Array<number | { value: number; label: React.ReactNode }>
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
> & {
  width?: string
  min?: number
  max?: number
  defaultValue?: number[]
  value?: number[]
  marks?: Array<number | { value: number; label: React.ReactNode }>
  step?: number
  disabled?: boolean
  onValueChange?: (details: ValueChangeDetails) => void
  onValueChangeEnd?: (details: ValueChangeDetails) => void
  isCentred?: boolean
}
