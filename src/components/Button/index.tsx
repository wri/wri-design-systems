import { ButtonProps } from './types'
import {
  BorderlessButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from './styled'

const Button = ({
  id,
  label,
  ariaLabel,
  name,
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
      id={id}
      aria-label={label || ariaLabel}
      name={name}
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
