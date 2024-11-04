import { useState } from 'react'
import { RadioGroup as ChakraRadioGroup, Stack } from '@chakra-ui/react'
import { RadioGroupProps } from './types'

const RadioGroup = ({
  children,
  isRow = false,
  defaultValue,
  onChange,
  ...rest
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleOnChange = (newValue: string) => {
    setSelectedValue(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <ChakraRadioGroup onChange={handleOnChange} value={selectedValue} {...rest}>
      <Stack spacing={isRow ? 5 : 2} direction={isRow ? 'row' : 'column'}>
        {children}
      </Stack>
    </ChakraRadioGroup>
  )
}

export default RadioGroup
