import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type ButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorScheme'
> & {
  label?: string
  isLoading?: boolean
  variant: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  isDisabled?: boolean
}
