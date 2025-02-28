// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { HStack, RadioCard } from '@chakra-ui/react'
import { OptionCardGroupProps } from './types'

const OptionCardGroup = ({ children, ...rest }: OptionCardGroupProps) => (
  <RadioCard.Root {...rest}>
    <HStack alignItems='flex-start' flexWrap='wrap' gap='12px'>
      {children}
    </HStack>
  </RadioCard.Root>
)

export default OptionCardGroup
