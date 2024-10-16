export interface ButtonProps {
  ariaLabel: string
  id?: string
  label?: string
  isLoading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  isDisabled?: boolean
  onClick?: () => void
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}
