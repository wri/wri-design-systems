import { Switch as ChakraSwitch } from '@chakra-ui/react'

export type SwitchProps = Omit<
  ChakraSwitch.RootProps,
  'size' | 'variant' | 'colorPalette' | 'invalid'
> & {
  name: string
  onCheckedChange?: ({ checked }: { checked: boolean }) => void
  defaultChecked?: boolean
  disabled?: boolean
  isLabelOnLeft?: boolean
}
