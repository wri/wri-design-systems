import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type ButtonProps = ChakraButtonProps & {
  label?: string
  isLoading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
}
