// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Field } from '@chakra-ui/react'
import {
  ErrorBar,
  TextInputContainer,
  StyledFieldCaption,
  StyledFieldErrorMessage,
  StyledFieldLabel,
  StyledTextInput,
} from './styled'
import { TextInputProps } from './types'

const TextInput = ({
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
}: TextInputProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <TextInputContainer size={size} className='text-input-container'>
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
        <StyledTextInput
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
    </TextInputContainer>
  )
}

export default TextInput
