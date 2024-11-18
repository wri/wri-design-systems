// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Switch as ChakraSwitch } from '@chakra-ui/react'
import { SwitchProps } from './types'
import { StyledSwitch, SwitchAndLabelContainer } from './styled'
import { CheckIcon } from '../icons'

const Switch = ({
  name,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  isLabelOnLeft = false,
  children,
  ...rest
}: SwitchProps) => (
  <SwitchAndLabelContainer>
    <StyledSwitch
      id={name}
      name={name}
      aria-label={rest['aria-label'] || name}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      {...rest}
    >
      {isLabelOnLeft && children != null ? (
        <ChakraSwitch.Label>{children}</ChakraSwitch.Label>
      ) : null}
      <ChakraSwitch.HiddenInput />
      <div className='chakra-switch__control-container'>
        <ChakraSwitch.Control>
          <ChakraSwitch.Thumb>
            <ChakraSwitch.ThumbIndicator display='flex'>
              <CheckIcon />
            </ChakraSwitch.ThumbIndicator>
          </ChakraSwitch.Thumb>
        </ChakraSwitch.Control>
      </div>
      {!isLabelOnLeft && children != null ? (
        <ChakraSwitch.Label>{children}</ChakraSwitch.Label>
      ) : null}
    </StyledSwitch>
  </SwitchAndLabelContainer>
)

export default Switch
