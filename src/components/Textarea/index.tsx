import React, { useState } from 'react'
import { Field } from '@chakra-ui/react'
import { TextareaProps } from './types'
import {
  ErrorBar,
  StyledFieldCaption,
  StyledFieldErrorMessage,
  StyledFieldLabel,
  StyledTextarea,
  TextareaContainer,
  StyledFieldHelperText,
} from './styled'

const Textarea = ({
  label,
  caption,
  placeholder,
  helperText,
  errorMessage,
  required,
  disabled,
  size = 'default',
  defaultValue = '',
  onChange,
  ...rest
}: TextareaProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <TextareaContainer size={size}>
      {errorMessage ? (
        <ErrorBar size={size} hasHelperText={!!helperText} />
      ) : null}
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
        <StyledTextarea
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
        {helperText ? (
          <StyledFieldHelperText aria-label={helperText}>
            {helperText}
          </StyledFieldHelperText>
        ) : null}
      </Field.Root>
    </TextareaContainer>
  )
}

export default Textarea
