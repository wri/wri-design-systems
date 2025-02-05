// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { SliderInputProps } from './types'
import {
  SliderInputCaption,
  SliderInputContainer,
  SliderInputContent,
  SliderInputLabel,
} from './styled'
import TextInput from '../TextInput'
import Slider from '../../Controls/Slider'
import Select from '../Select'

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
    <SliderInputContainer>
      <SliderInputLabel size={size} aria-label={label}>
        {required && <span>*</span>}
        {label}
      </SliderInputLabel>
      {caption ? (
        <SliderInputCaption size={size} aria-label={caption}>
          {caption}
        </SliderInputCaption>
      ) : null}

      <SliderInputContent>
        {sliderItem.step && sliderItem.marks ? (
          <Select
            items={sliderItem.marks.map((mark: any) => ({
              label: `${mark.label}`,
              value: `${mark.value}`,
            }))}
            placeholder=''
            style={{ width: '90px' }}
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
            className='opacity-control-text-input'
            onClick={(e: any) => e.target.select()}
          />
        )}
        <Slider
          {...sliderItem}
          value={value}
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
            className='opacity-control-text-input'
            onClick={(e: any) => e.target.select()}
          />
        ) : null}
      </SliderInputContent>
    </SliderInputContainer>
  )
}

export default SliderInput
