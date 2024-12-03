import { SliderRootProps as ChakraSliderRootProps } from '@chakra-ui/react'

export type SliderMarksProps = {
  marks?: Array<number | { value: number; label: React.ReactNode }>
}

type ValueChangeDetails = {
  value: number[]
}

export type SliderProps = Omit<
  ChakraSliderRootProps,
  'size' | 'variant' | 'colorPalette' | 'thumbAlignment' | 'thumbSize' | 'label' | 'defaultChecked'
> & {
  min?: number
  max?: number
  defaultValue?: number[]
  value?: number[]
  marks?: Array<number | { value: number; label: React.ReactNode }>
  step?: number
  disabled?: boolean
  width?: string
  onValueChange?: (details: ValueChangeDetails) => void
  onValueChangeEnd?: (details: ValueChangeDetails) => void
}
