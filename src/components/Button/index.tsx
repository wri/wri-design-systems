// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Box, Spinner } from '@chakra-ui/react'
import { ButtonProps } from './types'
import {
  BorderlessButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from './styled'

const Button = ({
  label,
  loading,
  variant = 'primary',
  size = 'default',
  disabled,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  let StyledButton = PrimaryButton
  if (variant === 'secondary') {
    StyledButton = SecondaryButton
  } else if (variant === 'borderless') {
    StyledButton = BorderlessButton
  } else if (variant === 'outline') {
    StyledButton = OutlineButton
  }

  const getAriaLabel = () => {
    let newLabel = rest['aria-label'] || label

    if (loading) {
      newLabel = 'Loading'
    }

    return newLabel
  }

  return (
    <StyledButton
      aria-label={getAriaLabel()}
      size={size}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {leftIcon && !loading ? (
        <Box marginRight={label ? 2 : 0}>{leftIcon}</Box>
      ) : null}
      {!rightIcon && loading ? <Spinner size='sm' marginRight={label ? 2 : 0} /> : null}
      {label}
      {rightIcon && !loading ? (
        <Box marginLeft={2}>{rightIcon}</Box>
      ) : null}
      {!!rightIcon && loading ? <Spinner size='sm' marginLeft={label ? 2 : 0} /> : null}
    </StyledButton>
  )
}

export default Button
