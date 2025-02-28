/** @jsxImportSource @emotion/react */

import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioProps } from './types'
import { radioGroupItemStyles } from './styled'

const Radio = ({ children, value, disabled, ...rest }: RadioProps) => (
  <ChakraRadioGroup.Item
    css={radioGroupItemStyles}
    value={value}
    disabled={disabled}
    {...rest}
  >
    <ChakraRadioGroup.ItemHiddenInput />
    <ChakraRadioGroup.ItemIndicator className='radio-item-indicator' />
    {children ? (
      <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
    ) : null}
  </ChakraRadioGroup.Item>
)

export default Radio
