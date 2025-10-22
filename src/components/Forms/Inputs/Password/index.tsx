/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'

import TextInput from '../TextInput'
import Button from '../../Actions/Button'
import { PasswordProps } from './types'
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
}: PasswordProps) => {
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordStatus, setPasswordStatus] = useState({
    strength: 'Very weak',
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

    newPasswordStatus.strength = 'Very Weak'
    if (value.length >= 4 && strengthCount >= 2) {
      newPasswordStatus.strength = 'Weak'
    }
    if (value.length >= 6 && strengthCount >= 3) {
      newPasswordStatus.strength = 'Medium'
    }
    if (value.length >= minLength && strengthCount >= 4) {
      newPasswordStatus.strength = 'Strong'
    }
    if (value.length >= minLength + 2 && strengthCount >= 5) {
      newPasswordStatus.strength = 'Very Strong'
    }

    setPassword(value)
    setPasswordStatus(newPasswordStatus)

    if (onChange) {
      onChange(newPasswordStatus)
    }
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
          label={show ? 'Hide' : 'Show'}
          variant='secondary'
          leftIcon={show ? <HideIcon /> : <ShowIcon />}
          aria-label={show ? 'Hide password' : 'Show password'}
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
            Password Strength: <span>{passwordStatus.strength}</span>
          </p>
          <div css={passwordStrengthBarStyles(passwordStatus.strength)}>
            <div />
          </div>
          <div
            css={passwordStrengthItemStyles(passwordStatus.length)}
            aria-label={`Use a minimum of ${minLength} characters. ${
              passwordStatus.length
                ? 'Requirement met.'
                : 'Requirement not met.'
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
            <p>Use a minimum of {minLength} characters</p>
          </div>
          {!disabledRules?.uppercase ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.uppercase)}
              aria-label={`Use an uppercase letter. ${
                passwordStatus.uppercase
                  ? 'Requirement met.'
                  : 'Requirement not met.'
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
              <p>Use an uppercase letter</p>
            </div>
          ) : null}
          {!disabledRules?.lowercase ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.lowercase)}
              aria-label={`Use a lowercase letter. ${
                passwordStatus.lowercase
                  ? 'Requirement met.'
                  : 'Requirement not met.'
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
              <p>Use a lowercase letter</p>
            </div>
          ) : null}
          {!disabledRules?.numbers ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.numbers)}
              aria-label={`Use a number. ${
                passwordStatus.numbers
                  ? 'Requirement met.'
                  : 'Requirement not met.'
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
              <p>Use a number</p>
            </div>
          ) : null}
          {!disabledRules?.specialCharacters ? (
            <div
              css={passwordStrengthItemStyles(passwordStatus.specialCharacters)}
              aria-label={`Use a special character. ${
                passwordStatus.specialCharacters
                  ? 'Requirement met.'
                  : 'Requirement not met.'
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
              <p>Use a special character</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Password
