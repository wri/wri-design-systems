// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioProps } from './types'
import { StyledRadio } from './styled'

const Radio = ({ children, value, disabled, ...rest }: RadioProps) => (
  <StyledRadio value={value} disabled={disabled} {...rest}>
    <ChakraRadioGroup.ItemHiddenInput />
    <ChakraRadioGroup.ItemIndicator className='radio-item-indicator' />
    {children && (
      <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
    )}
  </StyledRadio>
)

export default Radio
