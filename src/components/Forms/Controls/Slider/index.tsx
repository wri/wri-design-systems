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
  sliderMarkLabelsRowStyles,
  sliderMarkLabelStyles,
} from './styled'

const SliderThumbs = (props: { value?: number[] }) => {
  const { value } = props
  return (
    <For each={value}>
      {(_, index) => (
        <ChakraSlider.Thumb key={index} css={sliderThumbStyles} index={index}>
          <div css={sliderThumbLabelStyles} className='ds-slider-value-preview'>
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
          const isMiddleMark = isCentred && index === 1

          return (
            <ChakraSlider.Marker
              key={value}
              css={sliderMarkerStyles(isCentred, isMiddleMark)}
              value={value}
            >
              <ChakraSlider.MarkerIndicator />
            </ChakraSlider.Marker>
          )
        })}
      </ChakraSlider.MarkerGroup>
    )
  },
)

const SliderMarkLabels = (props: {
  marks?: Array<{ value: number; label?: React.ReactNode }>
  min: number
  max: number
}) => {
  const { marks, min, max } = props
  const labelledMarks = marks?.filter(
    (mark) => mark.label !== undefined && mark.label !== null,
  )

  if (!labelledMarks?.length) return null

  const range = max - min || 1

  return (
    <div css={sliderMarkLabelsRowStyles}>
      {labelledMarks.map((mark) => {
        const translateX =
          mark.value === min ? '0' : mark.value === max ? '-100%' : '-50%'

        return (
          <span
            key={mark.value}
            css={sliderMarkLabelStyles}
            style={{
              left: `${((mark.value - min) / range) * 100}%`,
              transform: `translateX(${translateX})`,
            }}
          >
            {mark.label}
          </span>
        )
      })}
    </div>
  )
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { marks: marksProp, onValueChange, isCentred, value, ...rest } = props
  const [newValue, setNewValue] = useState(value || [0])

  useEffect(() => {
    setNewValue(value || [0])
  }, [value])

  const min = rest.min ?? 0
  const max = rest.max ?? 100

  let marks = marksProp?.map((mark) => {
    if (typeof mark === 'number') return { value: mark, label: undefined }
    return mark
  })

  if (isCentred) {
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
      <SliderMarkLabels marks={marks} min={min} max={max} />
      <ChakraSlider.Control data-has-mark-label={hasMarkLabel || undefined}>
        <ChakraSlider.Track css={sliderTrackStyles}>
          <ChakraSlider.Range css={sliderRangeStyles(isCentred)} />
        </ChakraSlider.Track>
        <SliderMarks marks={marks} isCentred={isCentred} />
        <SliderThumbs value={newValue} />
      </ChakraSlider.Control>
    </ChakraSlider.Root>
  )
})

export default Slider
