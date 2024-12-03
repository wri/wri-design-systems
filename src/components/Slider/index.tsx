import React, { useState } from 'react'

import { Slider as ChakraSlider, For } from '@chakra-ui/react'
import { SliderMarksProps, SliderProps } from './types'
import { ChakraSliderRoot, StyledSliderMarker, StyledSliderRange, StyledSliderThumb, StyledSliderThumbLabel, StyledSliderTrack } from './styled'

const SliderThumbs = (props: { value?: number[] }) => {
  const { value } = props
  return (
    <For each={value}>
      {(_, index) => (
        <StyledSliderThumb key={index} index={index}>
          <StyledSliderThumbLabel>
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
    const { marks } = props
    if (!marks?.length) return null

    return (
      <ChakraSlider.MarkerGroup ref={ref}>
        {marks.map((mark) => {
          const value = typeof mark === "number" ? mark : mark.value
          const label = typeof mark === "number" ? undefined : mark.label
          return (
            <StyledSliderMarker key={value} value={value}>
              <ChakraSlider.MarkerIndicator />
              <p>{label}</p>
            </StyledSliderMarker>
          )
        })}
      </ChakraSlider.MarkerGroup>
    )
  },
)

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const { marks: marksProp, onValueChange, ...rest } = props
    const [value, setValue] = useState(props.defaultValue || props.value || [0])

    const marks = marksProp?.map((mark) => {
      if (typeof mark === "number") return { value: mark, label: undefined }
      return mark
    })

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
        thumbAlignment="center"
        onValueChange={handleOnValueChange}
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
          <SliderMarks marks={marks} />
        </ChakraSlider.Control>
      </ChakraSliderRoot>
    )
  },
)

export default Slider
