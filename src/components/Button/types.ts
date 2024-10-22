import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type ButtonProps = Omit<ChakraButtonProps, 'colorScheme'> & {
  label?: string
  isLoading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
}
