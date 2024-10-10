import React, { useEffect, useState } from 'react'
import { Switch as ChakraSwitch, FormLabel } from '@chakra-ui/react'
import { SwitchProps } from './types'
import {
  SwitchContainer,
  SwitchContent,
  SwitchIcon,
  SwitchIconContainer,
  SwitchIconHover,
} from './styled'
import { wriColors } from '../../lib/theme'

const Switch = ({
  id,
  label,
  ariaLabel,
  isChecked = false,
  onChange,
  isDisabled = false,
  isLabelOnRight = false,
  neutral300 = wriColors['neutral-300'],
  neutral500 = wriColors['neutral-500'],
  primary200 = wriColors['primary-200'],
  primary500 = wriColors['primary-500'],
  primary700 = wriColors['primary-700'],
}: SwitchProps) => {
  const [isLocalChecked, setIsLocalChecked] = useState(isChecked)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setIsLocalChecked(isChecked)
  }, [isChecked])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
    setIsLocalChecked(e.target.checked)
  }

  const handleOnIconClick = () => {
    setIsLocalChecked(!isLocalChecked)
  }

  const getBackgroundColor = () => {
    let backgroundColor = neutral500
    if (isLocalChecked) {
      backgroundColor = primary500
    }

    return isDisabled ? neutral300 : backgroundColor
  }

  return (
    <SwitchContainer
      isChecked={isLocalChecked}
      isFocused={isFocused}
      isDisabled={isDisabled}
      backgroundColor={getBackgroundColor()}
      primary200={primary200}
    >
      {!isLabelOnRight ? (
        <FormLabel htmlFor={id} mb='0'>
          {label}
        </FormLabel>
      ) : null}
      <SwitchContent>
        {!isDisabled ? <SwitchIconHover className='switch-icon-hover' /> : null}
        {isLocalChecked && !isDisabled ? (
          <SwitchIconContainer>
            <SwitchIcon onClick={handleOnIconClick} color={primary700} />
          </SwitchIconContainer>
        ) : null}
        <ChakraSwitch
          id={id}
          aria-label={label || ariaLabel}
          isChecked={isLocalChecked}
          onChange={handleOnChange}
          isDisabled={isDisabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </SwitchContent>
      {isLabelOnRight ? (
        <FormLabel htmlFor={id} mb='0' ml={label ? '5' : '0'}>
          {label}
        </FormLabel>
      ) : null}
    </SwitchContainer>
  )
}

export default Switch
