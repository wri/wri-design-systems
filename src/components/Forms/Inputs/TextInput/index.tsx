/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react'

import { Field, Input } from '@chakra-ui/react'
import {
  fieldCaptionStyles,
  fieldErrorMessageStyles,
  fieldLabelStyles,
  textInputContainerStyles,
  textInputErrorBarStyles,
  textInputStyles,
} from './styled'
import { TextInputProps } from './types'
import { useLabels } from '../../../../lib/i18n/useLabels'

const TextInput = ({
  label,
  caption,
  placeholder,
  errorMessage,
  required,
  disabled,
  size = 'default',
  noMarginBottom = false,
  defaultValue = '',
  onChange,
  labels,
  ...rest
}: TextInputProps) => {
  const l = useLabels('TextInput', labels)
  const [value, setValue] = useState(defaultValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div
      css={textInputContainerStyles(size, noMarginBottom)}
      className='ds-text-input-container'
    >
      {errorMessage ? <div css={textInputErrorBarStyles} /> : null}
      <Field.Root
        required={required}
        invalid={!!errorMessage}
        gap='0'
        style={{ marginLeft: errorMessage ? '1.1875rem' : '0px' }}
      >
        {label ? (
          <Field.Label
            css={fieldLabelStyles(size, disabled)}
            aria-label={label}
          >
            <Field.RequiredIndicator aria-label={l.requiredSymbolLabel} />
            {label}
            {!required ? <span>{l.optionalSuffix}</span> : ''}
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
            css={fieldErrorMessageStyles(size)}
            aria-label={errorMessage}
          >
            {errorMessage}
          </Field.ErrorText>
        ) : null}
        <Input
          placeholder={placeholder}
          disabled={disabled}
          css={textInputStyles(size, value, defaultValue)}
          onChange={handleOnChange}
          value={value}
          _placeholder={{
            color: 'var(--chakra-colors-neutral-500)',
          }}
          {...rest}
        />
      </Field.Root>
    </div>
  )
}

export default TextInput
