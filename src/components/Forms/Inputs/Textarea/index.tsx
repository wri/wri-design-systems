/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useEffect, useState } from 'react'
import { Field, Textarea as ChakraTextarea } from '@chakra-ui/react'
import { TextareaProps } from './types'
import {
  fieldCaptionStyles,
  fieldErrorMessageStyles,
  fieldHelperTextStyles,
  fieldLabelStyles,
  textareaContainerStyles,
  textareaErrorBarStyles,
  textareaSyles,
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
  const [showMinLengthError, setShowMinLengthError] = useState(false)
  const [showMaxLengthError, setShowMaxLengthError] = useState(false)
  const [helperText, setHelperText] = useState('')

  useEffect(() => {
    const { length } = defaultValue
    if (minLength && length < minLength && length > 0) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(false)
      setHelperText(`Enter at least ${minLength - length} characters`)
    } else if (minLength && length === 0) {
      setHelperText(`Min ${minLength} characters`)
    }
    if (maxLength && length > 0) {
      setShowMinLengthError(false)
      setShowMaxLengthError(length > maxLength)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    } else if (maxLength && length === 0) {
      setHelperText(`Max ${maxLength} characters`)
    }
  }, [])

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)

    const { length } = e.target.value
    if (minLength && maxLength) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(length > maxLength)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    } else if (minLength) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(false)
      setHelperText(
        length < minLength
          ? `Enter at least ${minLength - length} characters`
          : '',
      )
    } else if (maxLength) {
      setShowMaxLengthError(length > maxLength)
      setShowMinLengthError(false)
      setHelperText(`You have ${maxLength - length} characters remaining`)
    }

    if (onChange) {
      onChange(e)
    }
  }

  const hasError = !!errorMessage || showMinLengthError || showMaxLengthError

  return (
    <div css={textareaContainerStyles(size)}>
      {hasError ? <div css={textareaErrorBarStyles} /> : null}
      <Field.Root
        required={required}
        invalid={hasError}
        gap='0'
        style={{ marginLeft: hasError ? '19px' : '0px' }}
      >
        {label ? (
          <Field.Label
            css={fieldLabelStyles(size, disabled)}
            aria-label={label}
          >
            <Field.RequiredIndicator aria-label='required' />
            {label}
            {!required ? <span>{' (Optional)'}</span> : ''}
          </Field.Label>
        ) : null}
        {caption ? (
          <Field.HelperText
            css={fieldCaptionStyles(size, disabled)}
            aria-label={caption}
          >
            {caption}
          </Field.HelperText>
        ) : null}
        {errorMessage ? (
          <Field.ErrorText
            css={fieldErrorMessageStyles}
            aria-label={errorMessage}
          >
            {errorMessage}
          </Field.ErrorText>
        ) : null}
        <ChakraTextarea
          placeholder={placeholder}
          disabled={disabled}
          css={textareaSyles(size, value, defaultValue)}
          onChange={handleOnChange}
          value={value}
          _placeholder={{
            color: 'var(--chakra-colors-neutral-500)',
          }}
          {...rest}
        />
        {showMinLengthError && minLength ? (
          <Field.ErrorText
            css={fieldErrorMessageStyles}
            style={{ marginTop: '8px', fontSize: '12px', lineHeight: '16px' }}
            aria-live='polite'
          >
            You need {minLength - value.length} more characters
          </Field.ErrorText>
        ) : null}
        {showMaxLengthError && maxLength ? (
          <Field.ErrorText
            css={fieldErrorMessageStyles}
            style={{ marginTop: '8px', fontSize: '12px', lineHeight: '16px' }}
            aria-live='polite'
          >
            You have {value.length - maxLength} characters too many
          </Field.ErrorText>
        ) : null}
        {helperText && !showMaxLengthError && !showMinLengthError ? (
          <Field.HelperText css={fieldHelperTextStyles} aria-label={helperText}>
            {helperText}
          </Field.HelperText>
        ) : null}
      </Field.Root>
    </div>
  )
}

export default Textarea
