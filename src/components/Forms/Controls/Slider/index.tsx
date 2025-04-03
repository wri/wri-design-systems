/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'

import { Slider as ChakraSlider, For } from '@chakra-ui/react'
import { SliderMarksProps, SliderProps } from './types'
import {
  sliderRootStyles,
  sliderRangeStyles,
  sliderThumbLabelStyles,
  sliderThumbStyles,
  sliderTrackStyles,
  sliderMarkerStyles,
} from './styled'

const SliderThumbs = (props: { value?: number[] }) => {
  const { value } = props
  return (
    <For each={value}>
      {(_, index) => (
        <ChakraSlider.Thumb key={index} css={sliderThumbStyles} index={index}>
          <div css={sliderThumbLabelStyles} className='slider-value-preview'>
            {_}
          </div>
          <ChakraSlider.HiddenInput />
        </ChakraSlider.Thumb>
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
            <ChakraSlider.Marker
              key={value}
              css={sliderMarkerStyles(isCentred, isMiddleMark)}
              value={value}
            >
              <ChakraSlider.MarkerIndicator />
              <p>{label}</p>
            </ChakraSlider.Marker>
          )
        })}
      </ChakraSlider.MarkerGroup>
    )
  },
)

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { marks: marksProp, onValueChange, isCentred, value, ...rest } = props
  const [newValue, setNewValue] = useState(value || [0])

  useEffect(() => {
    setNewValue(value || [0])
  }, [value])

  let marks = marksProp?.map((mark) => {
    if (typeof mark === 'number') return { value: mark, label: undefined }
    return mark
  })

  if (isCentred) {
    const min = rest.min || 0
    const max = rest.max || 100

    marks = [min, (min + max) / 2, max].map((mark) => ({
      value: mark,
      label: undefined,
    }))
  }

  const hasMarkLabel = !!marks?.some((mark) => mark.label)

  const handleOnValueChange = (e: { value: number[] }) => {
    setNewValue(e.value)

    if (onValueChange) {
      onValueChange(e)
    }
  }

  return (
    <ChakraSlider.Root
      css={sliderRootStyles}
      ref={ref}
      thumbAlignment='center'
      onValueChange={handleOnValueChange}
      origin={isCentred ? 'center' : 'start'}
      value={newValue}
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
        <ChakraSlider.Track css={sliderTrackStyles}>
          <ChakraSlider.Range css={sliderRangeStyles} />
        </ChakraSlider.Track>
        <SliderThumbs value={newValue} />
        <SliderMarks marks={marks} isCentred={isCentred} />
      </ChakraSlider.Control>
    </ChakraSlider.Root>
  )
})

export default Slider
