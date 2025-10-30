/** @jsxImportSource @emotion/react */

import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioProps } from './types'
import {
  radioGroupItemStyles,
  radioGroupItemTextStyles,
  radioGroupHiddenInputStyles,
} from './styled'

const Radio = ({ children, value, disabled, ...rest }: RadioProps) => (
  <ChakraRadioGroup.Item
    css={radioGroupItemStyles}
    value={value}
    disabled={disabled}
    {...rest}
  >
    <ChakraRadioGroup.ItemHiddenInput css={radioGroupHiddenInputStyles} />
    <ChakraRadioGroup.ItemIndicator className='ds-radio-item-indicator' />
    {children ? (
      <ChakraRadioGroup.ItemText css={radioGroupItemTextStyles}>
        {children}
      </ChakraRadioGroup.ItemText>
    ) : null}
  </ChakraRadioGroup.Item>
)

export default Radio
