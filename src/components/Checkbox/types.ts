import { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react'

export type CheckboxProps = Omit<
  ChakraCheckboxProps,
  | 'size'
  | 'variant'
  | 'colorScheme'
  | 'icon'
  | 'iconColor'
  | 'iconSize'
  | 'spacing'
> & {
  label?: string
  name: string
  value: string
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isIndeterminate?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
