import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react'

export type SwitchProps = Omit<
  ChakraSwitchProps,
  'size' | 'variant' | 'colorScheme'
> & {
  name: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  isDisabled?: boolean
  isLabelOnRight?: boolean
}

export type SwitchContainerProps = {
  isChecked: boolean
  isFocused: boolean
  isDisabled: boolean
  backgroundColor: string
  checkedAndDisabledColor: string
}
