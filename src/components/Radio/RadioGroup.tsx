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
  defaultValue,
  onValueChange,
  ...rest
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleOnChange = (details: RadioGroupValueChangeDetails) => {
    setSelectedValue(details.value)

    if (onValueChange) {
      onValueChange(details.value)
    }
  }

  return (
    <ChakraRadioGroup.Root
      onValueChange={handleOnChange}
      value={selectedValue}
      {...rest}
    >
      <HStack
        gap={isRow ? 5 : 2}
        flexDirection={isRow ? 'row' : 'column'}
        alignItems='flex-start'
      >
        {children}
      </HStack>
    </ChakraRadioGroup.Root>
  )
}

export default RadioGroup
