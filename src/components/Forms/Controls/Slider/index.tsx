import React, { useState } from 'react'

import { Slider as ChakraSlider, For } from '@chakra-ui/react'
import { SliderMarksProps, SliderProps } from './types'
import {
  ChakraSliderRoot,
  StyledSliderMarker,
  StyledSliderRange,
  StyledSliderThumb,
  StyledSliderThumbLabel,
  StyledSliderTrack,
} from './styled'

const SliderThumbs = (props: { value?: number[] }) => {
  const { value } = props
  return (
    <For each={value}>
      {(_, index) => (
        <StyledSliderThumb key={index} index={index}>
          <StyledSliderThumbLabel className='slider-value-preview'>
            {_}
          </StyledSliderThumbLabel>
          <ChakraSlider.HiddenInput />
        </StyledSliderThumb>
      )}
    </For>
  )
}

const SliderMarks = React.forwardRef<HTMLDivElement, SliderMarksProps>(
  (props, ref) => {
    const { marks, isCentred } = props
    if (!marks?.length) return null

    return (
      <ChakraSlider.MarkerGroup ref={ref}>
        {marks.map((mark, index) => {
          const value = typeof mark === 'number' ? mark : mark.value
          const label = typeof mark === 'number' ? undefined : mark.label
          const isMiddleMark = isCentred && index === 1

          return (
            <StyledSliderMarker
              key={value}
              value={value}
              isCentred={isCentred}
              isMiddleMark={isMiddleMark}
            >
              <ChakraSlider.MarkerIndicator />
              <p>{label}</p>
            </StyledSliderMarker>
          )
        })}
      </ChakraSlider.MarkerGroup>
    )
  },
)

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { marks: marksProp, onValueChange, isCentred, ...rest } = props
  const [value, setValue] = useState(props.defaultValue || props.value || [0])

  let marks = marksProp?.map((mark) => {
    if (typeof mark === 'number') return { value: mark, label: undefined }
    return mark
  })

  if (isCentred) {
    const min = props.min || 0
    const max = props.max || 100

    marks = [min, (min + max) / 2, max].map((mark) => ({
      value: mark,
      label: undefined,
    }))
  }

  const hasMarkLabel = !!marks?.some((mark) => mark.label)

  const handleOnValueChange = (e: { value: number[] }) => {
    setValue(e.value)

    if (onValueChange) {
      onValueChange(e)
    }
  }

  return (
    <ChakraSliderRoot
      ref={ref}
      thumbAlignment='center'
      onValueChange={handleOnValueChange}
      origin={isCentred ? 'center' : 'start'}
      {...rest}
    >
      {/*
        {label && !showValue && (
          <ChakraSlider.Label>{label}</ChakraSlider.Label>
        )}
        {label && showValue && (
          <HStack justify="space-between">
            <ChakraSlider.Label>{label}</ChakraSlider.Label>
            <ChakraSlider.ValueText />
          </HStack>
        )}
        */}
      <ChakraSlider.Control data-has-mark-label={hasMarkLabel || undefined}>
        <StyledSliderTrack>
          <StyledSliderRange />
        </StyledSliderTrack>
        <SliderThumbs value={value} />
        <SliderMarks marks={marks} isCentred={isCentred} />
      </ChakraSlider.Control>
    </ChakraSliderRoot>
  )
})

export default Slider
