/** @jsxImportSource @emotion/react */

import { Box, Spinner, Button as ChakraButton } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { ButtonProps } from './types'
import {
  baseButtonStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  borderlessButtonStyles,
  outlineButtonStyles,
} from './styled'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      loading,
      variant = 'primary',
      size = 'default',
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...rest
    },
    ref,
  ) => {
    let variantButtonStyles = primaryButtonStyles
    if (variant === 'secondary') {
      variantButtonStyles = secondaryButtonStyles
    } else if (variant === 'borderless') {
      variantButtonStyles = borderlessButtonStyles
    } else if (variant === 'outline') {
      variantButtonStyles = outlineButtonStyles
    }

    const getAriaLabel = () => {
      let newLabel = rest['aria-label'] || label

      if (loading) {
        newLabel = 'Loading'
      }

      return newLabel
    }

    return (
      <ChakraButton
        aria-label={getAriaLabel()}
        css={[baseButtonStyles(size), variantButtonStyles(disabled)]}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        ref={ref}
        {...rest}
      >
        {leftIcon && !loading ? (
          <Box marginRight={label ? 2 : 0} display='flex' alignItems='center'>
            {leftIcon}
          </Box>
        ) : null}
        {!rightIcon && loading ? (
          <Spinner size='sm' marginRight={label ? 2 : 0} />
        ) : null}
        {children || label}
        {rightIcon && !loading ? (
          <Box marginLeft={label ? 2 : 0} display='flex' alignItems='center'>
            {rightIcon}
          </Box>
        ) : null}
        {!!rightIcon && loading ? (
          <Spinner size='sm' marginLeft={label ? 2 : 0} />
        ) : null}
      </ChakraButton>
    )
  },
)

export default Button
