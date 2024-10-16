import { ButtonProps } from './types'
import {
  BorderlessButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from './styled'

const Button = ({
  ariaLabel,
  id,
  label,
  isLoading,
  variant = 'primary',
  size = 'default',
  isDisabled,
  onClick,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  let StyledButton = PrimaryButton
  if (variant === 'secondary') {
    StyledButton = SecondaryButton
  } else if (variant === 'borderless') {
    StyledButton = BorderlessButton
  } else if (variant === 'outline') {
    StyledButton = OutlineButton
  }

  return (
    <StyledButton
      aria-label={label || ariaLabel}
      id={id}
      isLoading={isLoading}
      size={size}
      isDisabled={isDisabled}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {label}
    </StyledButton>
  )
}

export default Button
