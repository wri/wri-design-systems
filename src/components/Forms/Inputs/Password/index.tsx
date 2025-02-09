// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import TextInput from '../TextInput'
import Button from '../../Buttons/Button'
import { PasswordProps } from './types'
import {
  PasswordLabel,
  PasswordCaption,
  StyledPassword,
  PasswordContainer,
  PasswordStrengthContainer,
  PasswordStrengthLabel,
  PasswordStrengthBar,
  PasswordStrengthItem,
} from './styled'
import { HideIcon, ShowIcon, CloseIcon, CheckIcon } from '../../../icons'

const Password = ({
  label,
  caption,
  required,
  disabledRules,
  onChange,
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
    newPasswordStatus.length = value.length >= 8
    strengthCount += value.length >= 8 ? 1 : 0

    isValid = /[A-Z]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.uppercase = isValid

    isValid = /[a-z]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.lowercase = isValid

    isValid = /[0-9]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.numbers = isValid

    isValid = /[@$!%*?&]/.test(value)
    strengthCount += isValid ? 1 : 0
    newPasswordStatus.specialCharacters = isValid

    newPasswordStatus.strength = 'Very Weak'
    if (value.length >= 4 && strengthCount >= 2) {
      newPasswordStatus.strength = 'Weak'
    }
    if (value.length >= 6 && strengthCount >= 3) {
      newPasswordStatus.strength = 'Medium'
    }
    if (value.length >= 8 && strengthCount >= 4) {
      newPasswordStatus.strength = 'Strong'
    }
    if (value.length >= 10 && strengthCount >= 5) {
      newPasswordStatus.strength = 'Very Strong'
    }

    setPassword(value)
    setPasswordStatus(newPasswordStatus)

    if (onChange) {
      onChange(newPasswordStatus)
    }
  }

  return (
    <StyledPassword>
      <PasswordLabel aria-label={label}>
        {required ? <span>*</span> : null}
        {label}
      </PasswordLabel>
      <PasswordCaption aria-label={caption}>{caption}</PasswordCaption>
      <PasswordContainer>
        <TextInput
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
        />
        <Button
          label={show ? 'Hide' : 'Show'}
          variant='secondary'
          leftIcon={show ? <HideIcon /> : <ShowIcon />}
          onClick={() => setShow(!show)}
        />
      </PasswordContainer>
      {password ? (
        <PasswordStrengthContainer>
          <PasswordStrengthLabel strength={passwordStatus.strength}>
            Password Strength: <span>{passwordStatus.strength}</span>
          </PasswordStrengthLabel>
          <PasswordStrengthBar strength={passwordStatus.strength}>
            <div />
          </PasswordStrengthBar>
          <PasswordStrengthItem isValid={passwordStatus.length}>
            <div>
              {passwordStatus.length ? (
                <CheckIcon
                  color='var(--chakra-colors-success-500)'
                  height='8px'
                  width='8px'
                />
              ) : (
                <CloseIcon
                  color='var(--chakra-colors-error-500)'
                  height='8px'
                  width='8px'
                />
              )}
            </div>
            <p>Use a minimum of 8 characters</p>
          </PasswordStrengthItem>
          {!disabledRules?.uppercase ? (
            <PasswordStrengthItem isValid={passwordStatus.uppercase}>
              <div>
                {passwordStatus.uppercase ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-500)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>Use an uppercase letter</p>
            </PasswordStrengthItem>
          ) : null}
          {!disabledRules?.lowercase ? (
            <PasswordStrengthItem isValid={passwordStatus.lowercase}>
              <div>
                {passwordStatus.lowercase ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-500)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>Use a lowercase letter</p>
            </PasswordStrengthItem>
          ) : null}
          {!disabledRules?.numbers ? (
            <PasswordStrengthItem isValid={passwordStatus.numbers}>
              <div>
                {passwordStatus.numbers ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-500)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>Use a number</p>
            </PasswordStrengthItem>
          ) : null}
          {!disabledRules?.specialCharacters ? (
            <PasswordStrengthItem isValid={passwordStatus.specialCharacters}>
              <div>
                {passwordStatus.specialCharacters ? (
                  <CheckIcon
                    color='var(--chakra-colors-success-500)'
                    height='8px'
                    width='8px'
                  />
                ) : (
                  <CloseIcon
                    color='var(--chakra-colors-error-500)'
                    height='8px'
                    width='8px'
                  />
                )}
              </div>
              <p>Use a special character</p>
            </PasswordStrengthItem>
          ) : null}
        </PasswordStrengthContainer>
      ) : null}
    </StyledPassword>
  )
}

export default Password
