/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react'

import { Input } from '@chakra-ui/react'
import { textInputStyles } from './styled'
import { TextInputProps } from './types'
import { useLabels } from '../../../../lib/i18n/useLabels'
import FieldWrapper from '../FieldWrapper'
import { useTabFocus } from '../FieldWrapper/useTabFocus'

const TextInput = ({
  label,
  caption,
  placeholder,
  errorMessage,
  required,
  disabled,
  size = 'default',
  showOptionalLabel = true,
  noMarginBottom = false,
  defaultValue = '',
  onChange,
  onFocus,
  onBlur,
  labels,
  value: controlledValue,
  ...rest
}: TextInputProps) => {
  const l = useLabels('TextInput', labels)
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled
    ? String(controlledValue ?? '')
    : uncontrolledValue

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value)
    }

    if (onChange) {
      onChange(e)
    }
  }

  const isFilled = Boolean(currentValue)
  const tabFocus = useTabFocus<HTMLInputElement>(onFocus, onBlur)

  return (
    <FieldWrapper
      className='ds-text-input-container'
      label={label}
      caption={caption}
      errorMessage={errorMessage}
      required={required}
      disabled={disabled}
      size={size}
      showOptionalLabel={showOptionalLabel}
      noMarginBottom={noMarginBottom}
      labels={{
        requiredSymbolLabel: l.requiredSymbolLabel,
        optionalSuffix: l.optionalSuffix,
      }}
      semantics='field'
    >
      <Input
        placeholder={placeholder}
        disabled={disabled}
        focusVisibleRing='none'
        css={textInputStyles(size, isFilled)}
        onChange={handleOnChange}
        value={currentValue}
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

export default TextInput
