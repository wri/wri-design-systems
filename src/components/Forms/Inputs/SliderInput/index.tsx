/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react'

import { SliderInputProps } from './types'
import { sliderInputContentStyles } from './styled'
import TextInput from '../TextInput'
import Slider from '../../Controls/Slider'
import Select from '../Select'
import FieldWrapper from '../FieldWrapper'

const SliderInput = ({
  label,
  caption,
  size = 'default',
  sliderItem,
  required,
  onChange,
}: SliderInputProps) => {
  const [value, setValue] = useState(sliderItem.value || [])

  const handleSliderChanged = (props: { value: number[] }) => {
    setValue(props.value)

    if (onChange) {
      onChange(props.value)
    }
  }

  const handleInputChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number,
  ) => {
    const inputValue = e.target.value

    const newValue = [...value]
    let newInputValue = inputValue ? parseInt(inputValue, 10) : inputValue

    const min = sliderItem.min || 0
    const max = sliderItem.max || 100

    newInputValue = Number.isNaN(newInputValue)
      ? min
      : (newInputValue as number)
    newInputValue = newInputValue < min ? min : newInputValue
    newInputValue = newInputValue > max ? max : newInputValue

    newValue[inputIndex] = newInputValue
    setValue(newValue)
  }

  const handleInputBlur = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number,
  ) => {
    const inputValue = e.target.value || '0'

    const newValue = [...value]
    let newInputValue = parseInt(inputValue, 10)

    const min = sliderItem.min || 0
    const max = sliderItem.max || 100

    newInputValue = Number.isNaN(newInputValue) ? min : newInputValue
    newInputValue = newInputValue < min ? min : newInputValue
    newInputValue = newInputValue > max ? max : newInputValue

    if (value?.length === 2) {
      newInputValue = Number.isNaN(newInputValue) ? min : newInputValue
      const leftValue = value[0]
      const rightValue = value[1]

      if (inputIndex === 0) {
        newInputValue = newInputValue < min ? min : newInputValue
        newInputValue = newInputValue > rightValue ? rightValue : newInputValue
      } else if (inputIndex === 1) {
        newInputValue = newInputValue < leftValue ? leftValue : newInputValue
        newInputValue = newInputValue > max ? max : newInputValue
      }
    }

    newValue[inputIndex] = newInputValue
    setValue(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  const handleSelectChanged = (selectValue: string[]) => {
    const parsedValue = selectValue.map((item) => parseInt(item, 10))
    setValue(parsedValue)

    if (onChange) {
      onChange(parsedValue)
    }
  }

  return (
    <FieldWrapper
      label={label}
      caption={caption}
      required={required}
      size={size}
      showOptionalLabel={false}
      noMarginBottom
      semantics='group'
    >
      <div css={sliderInputContentStyles}>
        {sliderItem.step && sliderItem.marks ? (
          <Select
            items={sliderItem.marks.map((mark) => {
              const markValue = typeof mark === 'number' ? mark : mark.value
              const markLabel =
                typeof mark === 'number' ? mark : mark.label
              return {
                label: `${markLabel}`,
                value: `${markValue}`,
              }
            })}
            placeholder=''
            style={{ width: '5.625rem' }}
            value={[`${value?.[0]}`]}
            onChange={handleSelectChanged}
          />
        ) : (
          <TextInput
            aria-label={label}
            min={sliderItem.min}
            max={sliderItem.max}
            value={value?.[0]}
            type='number'
            onChange={(e) => handleInputChanged(e, 0)}
            onBlur={(e) => handleInputBlur(e, 0)}
            className='ds-opacity-control-text-input'
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              (e.target as HTMLInputElement).select()
            }
            noMarginBottom
          />
        )}
        <Slider
          css={{}}
          {...sliderItem}
          value={value}
          aria-label={
            value?.length === 2
              ? [`${label} minimum`, `${label} maximum`]
              : [label]
          }
          onValueChangeEnd={handleSliderChanged}
        />
        {value?.length === 2 ? (
          <TextInput
            aria-label={label}
            min={sliderItem.min}
            max={sliderItem.max}
            value={value?.[1]}
            type='number'
            onChange={(e) => handleInputChanged(e, 1)}
            onBlur={(e) => handleInputBlur(e, 1)}
            className='ds-opacity-control-text-input'
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              (e.target as HTMLInputElement).select()
            }
            noMarginBottom
          />
        ) : null}
      </div>
    </FieldWrapper>
  )
}

export default SliderInput
