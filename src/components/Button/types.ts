export interface ButtonProps {
  id: string
  ariaLabel: string
  label?: string
  name?: string
  isLoading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  isDisabled?: boolean
  onClick?: () => void
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}
