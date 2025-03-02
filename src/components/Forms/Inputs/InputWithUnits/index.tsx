/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group } from '@chakra-ui/react'

import { InputWithUnitsProps } from './types'
import {
  errorBarStyles,
  inputWithUnitsCaptionStyles,
  inputWithUnitsContainerStyles,
  inputWithUnitsErrorMessageStyles,
  inputWithUnitsLabelStyles,
  inputWithUnitsStyles,
} from './styled'
import TextInput from '../TextInput'
import Select from '../Select'

const InputWithUnits = ({
  label,
  caption,
  errorMessage,
  units,
  unitsPosition = 'end',
  defaultUnit = '',
  defaultValue = '',
  onChange,
  required,
  disabled,
}: InputWithUnitsProps) => {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [selectValue, setSelectValue] = useState(
    defaultUnit ? [defaultUnit] : [units[0].value],
  )

  const handleOnChange = (value: string, isSelectValue?: boolean) => {
    const newValue =
      unitsPosition === 'end'
        ? `${isSelectValue ? `${inputValue} ${value}` : `${value} ${selectValue}`}`
        : `${isSelectValue ? `${value} ${inputValue}` : `${selectValue} ${value}`}`

    if (onChange) onChange(newValue)
  }

  return (
    <div css={inputWithUnitsStyles}>
      {errorMessage ? <div css={errorBarStyles} /> : null}
      <div style={{ marginLeft: errorMessage ? '19px' : '0px' }}>
        <p css={inputWithUnitsLabelStyles(disabled)} aria-label={label}>
          {required ? <span>*</span> : null}
          {label}
        </p>
        <p css={inputWithUnitsCaptionStyles(disabled)} aria-label={caption}>
          {caption}
        </p>
        {errorMessage ? (
          <p css={inputWithUnitsErrorMessageStyles} aria-label={errorMessage}>
            {errorMessage}
          </p>
        ) : null}
        <Group
          css={inputWithUnitsContainerStyles(!!errorMessage, unitsPosition)}
          attached
        >
          {unitsPosition === 'start' ? (
            <Select
              placeholder=''
              value={selectValue}
              items={units}
              disabled={disabled}
              onChange={(e) => {
                setSelectValue(e)
                handleOnChange(e?.[0], true)
              }}
            />
          ) : null}
          <TextInput
            type='number'
            value={inputValue}
            disabled={disabled}
            onChange={(e) => {
              setInputValue(e.target.value)
              handleOnChange(e.target.value)
            }}
          />
          {unitsPosition === 'end' ? (
            <Select
              placeholder=''
              value={selectValue}
              items={units}
              disabled={disabled}
              onChange={(e) => {
                setSelectValue(e)
                handleOnChange(e?.[0], true)
              }}
            />
          ) : null}
        </Group>
      </div>
    </div>
  )
}

export default InputWithUnits
