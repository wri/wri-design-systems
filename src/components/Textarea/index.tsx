import React, { useEffect, useState } from 'react'
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
  errorMessage,
  required,
  disabled,
  size = 'default',
  defaultValue = '',
  onChange,
  minLength,
  maxLength,
  ...rest
}: TextareaProps) => {
  const [value, setValue] = useState(defaultValue)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [helperText, setHelperText] = useState('')

  useEffect(() => {
    const { length } = defaultValue
    if (minLength && length < minLength && length > 0) {
      setMinLengthError(length < minLength)
      setMaxLengthError(false)
      setHelperText(`Enter at least ${minLength - length} characters`)
    }
    if (maxLength && length > maxLength) {
      setMinLengthError(false)
      setMaxLengthError(length > maxLength)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    }
  }, [])

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)

    const { length } = e.target.value
    if (minLength && maxLength) {
      setMinLengthError(length < minLength)
      setMaxLengthError(length > maxLength)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    } else if (minLength) {
      setMinLengthError(length < minLength)
      setMaxLengthError(false)
      setHelperText(
        length < minLength
          ? `Enter at least ${minLength - length} characters`
          : '',
      )
    } else if (maxLength) {
      setMaxLengthError(length > maxLength)
      setMinLengthError(false)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <TextareaContainer size={size}>
      {errorMessage || minLengthError || maxLengthError ? (
        <ErrorBar
          size={size}
          hasHelperText={!!helperText}
          hasErrorMessage={!!errorMessage}
        />
      ) : null}
      <Field.Root
        required={required}
        invalid={!!errorMessage || minLengthError || maxLengthError}
        gap='0'
      >
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
          <StyledFieldErrorMessage>{errorMessage}</StyledFieldErrorMessage>
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
        {minLengthError && minLength ? (
          <StyledFieldErrorMessage
            style={{ marginTop: '8px', fontSize: '12px', lineHeight: '16px' }}
          >
            You need {minLength - value.length} more characters
          </StyledFieldErrorMessage>
        ) : null}
        {maxLengthError && maxLength ? (
          <StyledFieldErrorMessage
            style={{ marginTop: '8px', fontSize: '12px', lineHeight: '16px' }}
          >
            You have {value.length - maxLength} characters too many
          </StyledFieldErrorMessage>
        ) : null}
        {helperText && !maxLengthError && !minLengthError ? (
          <StyledFieldHelperText aria-label={helperText}>
            {helperText}
          </StyledFieldHelperText>
        ) : null}
      </Field.Root>
    </TextareaContainer>
  )
}

export default Textarea
