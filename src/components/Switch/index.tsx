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
import { getThemedColor } from '../../lib/theme'

const Switch = ({
  id,
  label,
  isChecked = false,
  onChange,
  isDisabled = false,
  isLabelOnRight = false,
  ...rest
}: SwitchProps) => {
  const [isLocalChecked, setIsLocalChecked] = useState(isChecked)
  const [isFocused, setIsFocused] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setIsLocalChecked(isChecked)
  }, [isChecked])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLocalChecked(e.target.checked)

    if (onChange) {
      onChange(e.target.checked)
    }
  }

  const handleOnIconClick = () => {
    setIsLocalChecked(!isLocalChecked)
  }

  const getBackgroundColor = () => {
    let backgroundColor = getThemedColor(theme.colors, 'neutral', 500)
    if (isLocalChecked) {
      backgroundColor = getThemedColor(theme.colors, 'primary', 500)
    }

    return isDisabled
      ? getThemedColor(theme.colors, 'neutral', 300)
      : backgroundColor
  }

  return (
    <SwitchContainer
      isChecked={isLocalChecked}
      isFocused={isFocused}
      isDisabled={isDisabled}
      backgroundColor={getBackgroundColor()}
      checkedAndDisabledColor={
        isChecked && isDisabled
          ? getThemedColor(theme.colors, 'primary', 200)
          : getThemedColor(theme.colors, 'neutral', 100)
      }
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
            <SwitchIcon
              onClick={handleOnIconClick}
              color={getThemedColor(theme.colors, 'primary', 700)}
            />
          </SwitchIconContainer>
        ) : null}
        <ChakraSwitch
          id={id}
          aria-label={label || rest['aria-label']}
          isChecked={isLocalChecked}
          onChange={handleOnChange}
          isDisabled={isDisabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
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
