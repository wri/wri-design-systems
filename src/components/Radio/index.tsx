// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioProps } from './types'
import { StyledRadio } from './styled'

const Radio = ({ children, value, disabled, ...rest }: RadioProps) => (
  <ChakraRadioGroup.Item value={value} disabled={disabled} {...rest}>
    <ChakraRadioGroup.ItemHiddenInput />
    <StyledRadio />
    {children && (
      <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
    )}
  </ChakraRadioGroup.Item>
)

export default Radio
