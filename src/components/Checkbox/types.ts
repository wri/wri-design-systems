import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

export type CheckboxProps = Omit<
  ChakraCheckbox.RootProps,
  | 'size'
  | 'variant'
  | 'colorScheme'
  | 'icon'
  | 'iconColor'
  | 'iconSize'
  | 'spacing'
  | 'invalid'
> & {
  name?: string
  value?: string
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onCheckedChange?: ({ checked }: { checked: boolean }) => void
}
