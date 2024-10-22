import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react'

export type SwitchProps = Omit<ChakraSwitchProps, 'colorScheme'> & {
  id: string
  label?: string
  onChange?: (value: boolean) => void
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
