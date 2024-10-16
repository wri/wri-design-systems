import React, { useEffect, useState } from 'react'
import { Switch as ChakraSwitch, FormLabel, useTheme } from '@chakra-ui/react'
import { SwitchProps } from './types'
import {
  SwitchContainer,
  SwitchContent,
  SwitchIcon,
  SwitchIconContainer,
  SwitchIconHover,
} from './styled'

const Switch = ({
  id,
  label,
  ariaLabel,
  isChecked = false,
  onChange,
  isDisabled = false,
  isLabelOnRight = false,
}: SwitchProps) => {
  const [isLocalChecked, setIsLocalChecked] = useState(isChecked)
  const [isFocused, setIsFocused] = useState(false)
  const theme = useTheme()

  const { neutral, primary } = theme?.colors?.wri || {}

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
    let backgroundColor = neutral?.[500]
    if (isLocalChecked) {
      backgroundColor = primary?.[500]
    }

    return isDisabled ? neutral?.[300] : backgroundColor
  }

  return (
    <SwitchContainer
      isChecked={isLocalChecked}
      isFocused={isFocused}
      isDisabled={isDisabled}
      backgroundColor={getBackgroundColor()}
      checkedAndDisabledColor={primary?.[200]}
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
            <SwitchIcon onClick={handleOnIconClick} color={primary?.[700]} />
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
