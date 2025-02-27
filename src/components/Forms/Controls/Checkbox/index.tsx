/** @jsxImportSource @emotion/react */

import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import { checkboxStyles } from './styled'
import { CheckboxProps } from './types'
import { CheckIcon, CheckIndeterminateIcon } from '../../../icons'

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
  <ChakraCheckbox.Root
    css={checkboxStyles}
    name={name}
    value={value}
    checked={indeterminate ? 'indeterminate' : checked}
    defaultChecked={defaultChecked}
    disabled={disabled}
    onCheckedChange={onCheckedChange}
    aria-label={rest['aria-label'] || name}
    gap={children ? '10px' : '0'}
    {...rest}
  >
    <ChakraCheckbox.HiddenInput />
    <ChakraCheckbox.Control>
      {indeterminate ? <CheckIndeterminateIcon /> : <CheckIcon />}
    </ChakraCheckbox.Control>
    <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
  </ChakraCheckbox.Root>
)

export default Checkbox
