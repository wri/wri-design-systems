// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Field } from '@chakra-ui/react'
import {
  ErrorBar,
  InputContainer,
  StyledFieldCaption,
  StyledFieldErrorMessage,
  StyledFieldLabel,
  StyledInput,
} from './styled'
import { InputProps } from './types'

const Input = ({
  label,
  caption,
  placeholder,
  errorMessage,
  required,
  disabled,
  size = 'default',
  defaultValue = '',
  onChange,
  ...rest
}: InputProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <InputContainer size={size} className='input-container'>
      {errorMessage ? <ErrorBar size={size} /> : null}
      <Field.Root required={required} invalid={!!errorMessage} gap='0'>
        {label ? (
          <StyledFieldLabel size={size} disabled={disabled} aria-label={label}>
            <Field.RequiredIndicator aria-label='required' />
            {label}
            {!required ? ' (optional)' : ''}
          </StyledFieldLabel>
        ) : null}
        {caption ? (
          <StyledFieldCaption
            size={size}
            disabled={disabled}
            aria-label={caption}
          >
            {caption}
          </StyledFieldCaption>
        ) : null}
        {errorMessage ? (
          <StyledFieldErrorMessage size={size}>
            {errorMessage}
          </StyledFieldErrorMessage>
        ) : null}
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          onChange={handleOnChange}
          value={value}
          _placeholder={{
            color: 'var(--chakra-colors-neutral-500)',
          }}
          {...rest}
        />
      </Field.Root>
    </InputContainer>
  )
}

export default Input
