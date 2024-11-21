import { Switch as ChakraSwitch } from '@chakra-ui/react'

export type SwitchProps = Omit<
  ChakraSwitch.RootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'invalid'
  | 'onCheckedChange'
  | 'onChange'
> & {
  name: string
  onChange?: (name: string, checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  isLabelOnLeft?: boolean
}
