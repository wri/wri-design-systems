/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useEffect, useState, useId } from 'react'
import { Field, Textarea as ChakraTextarea } from '@chakra-ui/react'
import { TextareaProps } from './types'
import {
  fieldErrorMessageStyles,
  fieldHelperTextStyles,
  textareaSyles,
} from './styled'
import { useLabels } from '../../../../lib/i18n/useLabels'
import FieldWrapper from '../FieldWrapper'
import { useTabFocus } from '../FieldWrapper/useTabFocus'

const Textarea = ({
  label,
  caption,
  placeholder,
  errorMessage,
  required,
  disabled,
  size = 'default',
  showOptionalLabel = true,
  defaultValue = '',
  onChange,
  onFocus,
  onBlur,
  minLength,
  maxLength,
  labels,
  value: controlledValue,
  ...rest
}: TextareaProps) => {
  const l = useLabels('Textarea', labels)
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const [showMinLengthError, setShowMinLengthError] = useState(false)
  const [showMaxLengthError, setShowMaxLengthError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const isControlled = controlledValue !== undefined
  const currentValue = isControlled
    ? String(controlledValue ?? '')
    : uncontrolledValue

  const captionId = useId()
  const errorId = useId()
  const helperId = useId()

  useEffect(() => {
    const { length } = defaultValue
    if (minLength && length < minLength && length > 0) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(false)
      setHelperText(l.enterAtLeastChars(minLength - length))
    } else if (minLength && length === 0) {
      setHelperText(l.minChars(minLength))
    }
    if (maxLength && length > 0) {
      setShowMinLengthError(false)
      setShowMaxLengthError(length > maxLength)
      setHelperText(l.charsRemaining(maxLength - length))
    } else if (maxLength && length === 0) {
      setHelperText(l.maxChars(maxLength))
    }
  }, [])

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value)
    }
    const { length } = e.target.value

    if (minLength && maxLength) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(length > maxLength)
      setHelperText(l.charsRemaining(maxLength - length))
    } else if (minLength) {
      setShowMinLengthError(length < minLength)
      setShowMaxLengthError(false)
      setHelperText(
        length < minLength ? l.enterAtLeastChars(minLength - length) : '',
      )
    } else if (maxLength) {
      setShowMaxLengthError(length > maxLength)
      setShowMinLengthError(false)
      setHelperText(l.charsRemaining(maxLength - length))
    }

    if (onChange) {
      onChange(e)
    }
  }

  const hasError = !!errorMessage || showMinLengthError || showMaxLengthError

  const describedByIds =
    [
      caption ? captionId : null,
      hasError ? errorId : null,
      helperText ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined

  const isFilled = Boolean(currentValue)
  const tabFocus = useTabFocus<HTMLTextAreaElement>(onFocus, onBlur)

  const showHelperText =
    helperText && !showMaxLengthError && !showMinLengthError
  const hasFooterContent =
    (showMinLengthError && !!minLength) ||
    (showMaxLengthError && !!maxLength) ||
    showHelperText

  const footer = hasFooterContent ? (
    <>
      {showMinLengthError && minLength ? (
        <Field.ErrorText
          id={errorId}
          css={fieldErrorMessageStyles}
          style={{
            fontSize: '0.75rem',
            lineHeight: '1rem',
          }}
          aria-live='polite'
        >
          {l.needMoreChars(minLength - currentValue.length)}
        </Field.ErrorText>
      ) : null}

      {showMaxLengthError && maxLength ? (
        <Field.ErrorText
          id={errorId}
          css={fieldErrorMessageStyles}
          style={{
            fontSize: '0.75rem',
            lineHeight: '1rem',
          }}
          aria-live='polite'
        >
          {l.tooManyChars(currentValue.length - maxLength)}
        </Field.ErrorText>
      ) : null}

      {showHelperText ? (
        <Field.HelperText
          id={helperId}
          css={fieldHelperTextStyles}
          aria-live='polite'
        >
          {helperText}
        </Field.HelperText>
      ) : null}
    </>
  ) : null

  return (
    <FieldWrapper
      label={label}
      caption={caption}
      errorMessage={errorMessage}
      invalid={hasError}
      required={required}
      disabled={disabled}
      size={size}
      showOptionalLabel={showOptionalLabel}
      labels={{
        requiredSymbolLabel: l.requiredSymbolLabel,
        optionalSuffix: l.optionalSuffix,
      }}
      captionId={captionId}
      errorId={errorMessage ? errorId : undefined}
      footer={footer}
      semantics='field'
    >
      <ChakraTextarea
        placeholder={placeholder}
        disabled={disabled}
        focusVisibleRing='none'
        css={textareaSyles(size, isFilled)}
        onChange={handleOnChange}
        value={currentValue}
        aria-label={label || placeholder}
        aria-describedby={describedByIds}
        aria-invalid={hasError || undefined}
        _placeholder={{
          color: 'var(--chakra-colors-neutral-700)',
        }}
        {...rest}
        data-focus-visible={tabFocus.isTabFocused || undefined}
        onFocus={tabFocus.onFocus}
        onBlur={tabFocus.onBlur}
      />
    </FieldWrapper>
  )
}

export default Textarea
