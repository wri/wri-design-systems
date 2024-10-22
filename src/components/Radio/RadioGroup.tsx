import { useState } from 'react'
import { RadioGroup as ChakraRadioGroup, Stack } from '@chakra-ui/react'
import { RadioGroupProps } from './types'
import { StyledRadio } from './styled'

const RadioGroup = ({
  radios,
  isColumn,
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
      <Stack spacing={isColumn ? 2 : 5} direction={isColumn ? 'column' : 'row'}>
        {radios.map((radio) => (
          <StyledRadio isChecked={selectedValue === radio.value} {...radio}>
            {radio.label}
          </StyledRadio>
        ))}
      </Stack>
    </ChakraRadioGroup>
  )
}

export default RadioGroup
