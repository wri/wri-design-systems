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

  return (
    <StyledButton
      aria-label={label || rest['aria-label']}
      isLoading={isLoading}
      size={size}
      isDisabled={isDisabled}
      {...rest}
    >
      {label}
    </StyledButton>
  )
}

export default Button
