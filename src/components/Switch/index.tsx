import React from 'react'
import { FormLabel } from '@chakra-ui/react'
import { SwitchProps } from './types'
import { StyledSwitch, SwitchAndLabelContainer } from './styled'

const Switch = ({
  name,
  label,
  defaultChecked = false,
  onChange,
  isDisabled = false,
  isLabelOnRight = false,
  ...rest
}: SwitchProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <SwitchAndLabelContainer>
      {!isLabelOnRight && label ? (
        <FormLabel htmlFor={name} mb='0'>
          {label}
        </FormLabel>
      ) : null}
      <StyledSwitch
        id={name}
        name={name}
        aria-label={label || rest['aria-label']}
        defaultChecked={defaultChecked}
        onChange={handleOnChange}
        isDisabled={isDisabled}
        {...rest}
      />
      {isLabelOnRight && label ? (
        <FormLabel htmlFor={name} mb='0' ml={label ? '5' : '0'} mr={0}>
          {label}
        </FormLabel>
      ) : null}
    </SwitchAndLabelContainer>
  )
}

export default Switch
