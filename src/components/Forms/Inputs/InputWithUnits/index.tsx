// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { InputWithUnitsProps } from './types'
import {
  ErrorBar,
  InputWithUnitsCaption,
  InputWithUnitsContainer,
  InputWithUnitsErrorMessage,
  InputWithUnitsLabel,
  StyledInputWithUnits,
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
    <StyledInputWithUnits>
      {errorMessage ? <ErrorBar /> : null}
      <div style={{ marginLeft: errorMessage ? '19px' : '0px' }}>
        <InputWithUnitsLabel disabled={disabled} aria-label={label}>
          {required ? <span>*</span> : null}
          {label}
        </InputWithUnitsLabel>
        <InputWithUnitsCaption disabled={disabled} aria-label={caption}>
          {caption}
        </InputWithUnitsCaption>
        {errorMessage ? (
          <InputWithUnitsErrorMessage aria-label={errorMessage}>
            {errorMessage}
          </InputWithUnitsErrorMessage>
        ) : null}
        <InputWithUnitsContainer
          unitsPosition={unitsPosition}
          hasError={!!errorMessage}
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
        </InputWithUnitsContainer>
      </div>
    </StyledInputWithUnits>
  )
}

export default InputWithUnits
