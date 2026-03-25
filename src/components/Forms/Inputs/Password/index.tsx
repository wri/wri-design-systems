/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import type { ReactNode } from 'react'

import TextInput from '../TextInput'
import Button from '../../Actions/Button'
import { PasswordProps, StrengthLevel } from './types'
import { useLabels } from '../../../../lib/i18n/useLabels'
import {
  passwordCaptionStyles,
  passwordContainerStyles,
  passwordContentStyles,
  passwordLabelStyles,
  passwordStrengthBarStyles,
  passwordStrengthContainerStyles,
  passwordStrengthItemStyles,
  passwordStrengthLabelStyles,
} from './styled'
import { HideIcon, ShowIcon, CloseIcon, CheckIcon } from '../../../icons'

const Password = ({
  label,
  caption,
  required,
  disabledRules,
  onChange,
  minLength = 8,
  hideValidations,
  labels,
}: PasswordProps) => {
  const l = useLabels('Password', labels)
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordStatus, setPasswordStatus] = useState<{
    strength: StrengthLevel
    length: boolean
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    specialCharacters: boolean
  }>({
    strength: 'very-weak',
    length: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialCharacters: false,
  })

  const validatePassword = (value: string) => {
    const newPasswordStatus = { ...passwordStatus }

    let strengthCount = 0
    let isValid = false
    newPasswordStatus.length = value.length >= minLength
    strengthCount += value.length >= minLength ? 1 : 0

    isValid = /[A-Z]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.uppercase = isValid

    isValid = /[a-z]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.lowercase = isValid

    isValid = /[0-9]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.numbers = isValid

    isValid = /[-'/`~!¡#*$@_%+=.,^&(){}[\]|;:“‘"<>?\\]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.specialCharacters = isValid

    newPasswordStatus.strength = 'very-weak'
    if (value.length >= 4 && strengthCount >= 2) {
      newPasswordStatus.strength = 'weak'
    }
    if (value.length >= 6 && strengthCount >= 3) {
      newPasswordStatus.strength = 'medium'
    }
    if (value.length >= minLength && strengthCount >= 4) {
      newPasswordStatus.strength = 'strong'
    }
    if (value.length >= minLength + 2 && strengthCount >= 5) {
      newPasswordStatus.strength = 'very-strong'
    }

    setPassword(value)
    setPasswordStatus(newPasswordStatus)

    if (onChange) {
      onChange({ ...newPasswordStatus, password: value })
    }
  }

  const strengthDisplay: Record<StrengthLevel, ReactNode> = {
    'very-weak': l.strengthVeryWeak,
    weak: l.strengthWeak,
    medium: l.strengthMedium,
    strong: l.strengthStrong,
    'very-strong': l.strengthVeryStrong,
  }

  return (
    <div css={passwordContainerStyles}>
      <p css={passwordLabelStyles} aria-label={label}>
        {required ? <span>*</span> : null}
        {label}
      </p>
      <p css={passwordCaptionStyles} aria-label={caption}>
        {caption}
      </p>
      <div css={passwordContentStyles}>
        <TextInput
          type={show ? 'text' : 'password'}
          value={password}
          aria-describedby='password-guidelines'
          onChange={(e) => validatePassword(e.target.value)}
        />
        <Button
          label={show ? l.hideLabel : l.showLabel}
          variant='secondary'
          leftIcon={show ? <HideIcon /> : <ShowIcon />}
          aria-label={show ? l.hidePasswordLabel : l.showPasswordLabel}
          onClick={() => setShow(!show)}
          type='button'
        />
      </div>
      {password && !hideValidations ? (
        <div
          id='password-guidelines'
          css={passwordStrengthContainerStyles}
          aria-live='polite'
        >
          <p
            css={passwordStrengthLabelStyles(passwordStatus.strength)}
            aria-live='polite'
            role='status'
          >
            {l.strengthPrefix}{' '}
            <span>{strengthDisplay[passwordStatus.strength]}</span>
          </p>
          <div css={passwordStrengthBarStyles(passwordStatus.strength)}>
            <div />
          </div>
          <div
            css={passwordStrengthItemStyles(passwordStatus.length)}
            aria-label={`${l.minLengthRule(minLength)}. ${
              passwordStatus.length ? l.requirementMet : l.requirementNotMet
            }`}
          >
            <div>
              {passwordStatus.length ? (
                <CheckIcon
                  color='var(--chakra-colors-success-500)'
                  height='8px'
                  width='8px'
                />
              ) : (
                <CloseIcon
                  color='var(--chakra-colors-error-900)'
                  height='8px'
                  width='8px'
                />
              )}
            </div>
            <p>{l.minLengthRule(minLength)}</p>
          </div>
          {!disabledRules?.uppercase ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.uppercase)}
              aria-label={`${l.uppercaseRule}. ${
                passwordStatus.uppercase
                  ? l.requirementMet
                  : l.requirementNotMet
              }`}
            >
              <div>
                {passwordStatus.uppercase ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-900)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>{l.uppercaseRule}</p>
            </div>
          ) : null}
          {!disabledRules?.lowercase ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.lowercase)}
              aria-label={`${l.lowercaseRule}. ${
                passwordStatus.lowercase
                  ? l.requirementMet
                  : l.requirementNotMet
              }`}
            >
              <div>
                {passwordStatus.lowercase ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-900)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>{l.lowercaseRule}</p>
            </div>
          ) : null}
          {!disabledRules?.numbers ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.numbers)}
              aria-label={`${l.numberRule}. ${
                passwordStatus.numbers ? l.requirementMet : l.requirementNotMet
              }`}
            >
              <div>
                {passwordStatus.numbers ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-900)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>{l.numberRule}</p>
            </div>
          ) : null}
          {!disabledRules?.specialCharacters ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.specialCharacters)}
              aria-label={`${l.specialCharRule}. ${
                passwordStatus.specialCharacters
                  ? l.requirementMet
                  : l.requirementNotMet
              }`}
            >
              <div>
                {passwordStatus.specialCharacters ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-900)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>{l.specialCharRule}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Password
