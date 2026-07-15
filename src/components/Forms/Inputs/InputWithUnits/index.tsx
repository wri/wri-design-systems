/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group } from '@chakra-ui/react'

import { InputWithUnitsProps } from './types'
import {
  inputWithUnitsContainerStyles,
  inputWithUnitsStyles,
} from './styled'
import TextInput from '../TextInput'
import Select from '../Select'
import FieldWrapper from '../FieldWrapper'

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
      <FieldWrapper
        label={label}
        caption={caption}
        errorMessage={errorMessage}
        required={required}
        disabled={disabled}
        showOptionalLabel={false}
        noMarginBottom
        semantics='group'
      >
        <Group
          css={inputWithUnitsContainerStyles(!!errorMessage, unitsPosition)}
          attached
        >
          {unitsPosition === 'start' ? (
            <Select
              placeholder=''
              aria-label={`${label} unit`}
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
            aria-label={`${label} value`}
            value={inputValue}
            disabled={disabled}
            noMarginBottom
            onChange={(e) => {
              setInputValue(e.target.value)
              handleOnChange(e.target.value)
            }}
          />
          {unitsPosition === 'end' ? (
            <Select
              placeholder=''
              aria-label={`${label} unit`}
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
      </FieldWrapper>
    </div>
  )
}

export default InputWithUnits
