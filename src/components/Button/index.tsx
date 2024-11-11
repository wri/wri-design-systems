import { Spinner } from '@chakra-ui/react'
import { ButtonProps } from './types'
import {
  BorderlessButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from './styled'

const Button = ({
  label,
  isLoading,
  variant = 'primary',
  size = 'default',
  isDisabled,
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
    let newLabel = rest['aria-label']
    if (label) {
      newLabel = label
    }

    if (isLoading) {
      newLabel = 'Loading'
    }

    return newLabel
  }

  return (
    <StyledButton
      aria-label={getAriaLabel()}
      size={size}
      isDisabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      leftIcon={!isLoading ? leftIcon : undefined}
      rightIcon={!isLoading ? rightIcon : undefined}
      {...rest}
    >
      {!rightIcon && isLoading ? <Spinner size='sm' marginRight='2' /> : null}
      {label}
      {!!rightIcon && isLoading ? <Spinner size='sm' marginLeft='2' /> : null}
    </StyledButton>
  )
}

export default Button
