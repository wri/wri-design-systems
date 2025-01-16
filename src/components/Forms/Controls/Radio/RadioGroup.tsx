// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupValueChangeDetails,
  HStack,
} from '@chakra-ui/react'
import { RadioGroupProps } from './types'

const RadioGroup = ({
  children,
  isRow = false,
  name,
  defaultValue,
  onChange,
  customGap,
  ...rest
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleOnChange = (details: RadioGroupValueChangeDetails) => {
    setSelectedValue(details.value)

    if (onChange) {
      onChange(name, details.value)
    }
  }

  let gap = isRow ? '20px' : '8px'
  gap = customGap || gap

  return (
    <ChakraRadioGroup.Root
      onValueChange={handleOnChange}
      value={selectedValue}
      {...rest}
    >
      <HStack
        gap={gap}
        flexDirection={isRow ? 'row' : 'column'}
        alignItems='flex-start'
      >
        {children}
      </HStack>
    </ChakraRadioGroup.Root>
  )
}

export default RadioGroup
