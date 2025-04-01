// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { RadioGroup as ChakraRadioGroup, HStack } from '@chakra-ui/react'
import { ValueChangeDetails } from '@zag-js/radio-group'
import { RadioGroupProps } from './types'

const RadioGroup = ({
  children,
  horizontal = false,
  name,
  defaultValue,
  onChange,
  customGap,
  ...rest
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleOnChange = (details: ValueChangeDetails) => {
    setSelectedValue(details.value || '')

    if (onChange) {
      onChange(name, details.value || '')
    }
  }

  let gap = horizontal ? '20px' : '8px'
  gap = customGap || gap

  return (
    <ChakraRadioGroup.Root
      onValueChange={handleOnChange}
      value={selectedValue}
      {...rest}
    >
      <HStack
        gap={gap}
        flexDirection={horizontal ? 'row' : 'column'}
        alignItems='flex-start'
        flexWrap='wrap'
      >
        {children}
      </HStack>
    </ChakraRadioGroup.Root>
  )
}

export default RadioGroup
