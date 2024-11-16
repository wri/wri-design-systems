// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import { StyledCheckbox } from './styled'
import { CheckboxProps } from './types'
import { CheckIcon, CheckIndeterminateIcon } from '../icons'

const Checkbox = ({
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onCheckedChange,
  children,
  ...rest
}: CheckboxProps) => (
  <StyledCheckbox
    name={name}
    value={value}
    checked={indeterminate ? 'indeterminate' : checked}
    defaultChecked={defaultChecked}
    disabled={disabled}
    onCheckedChange={onCheckedChange}
    {...rest}
  >
    <ChakraCheckbox.HiddenInput />
    <ChakraCheckbox.Control>
      {indeterminate ? <CheckIndeterminateIcon /> : <CheckIcon />}
    </ChakraCheckbox.Control>
    <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
  </StyledCheckbox >
)

export default Checkbox
