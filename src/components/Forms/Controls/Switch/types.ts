import type { SwitchLabels } from '../../../../lib/i18n/types'
import { Switch as ChakraSwitch } from '@chakra-ui/react'

export type { SwitchLabels }

export type SwitchProps = Omit<
  ChakraSwitch.RootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'invalid'
  | 'onCheckedChange'
  | 'onChange'
  | 'labels'
> & {
  name: string
  onChange?: (name: string, checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  isLabelOnLeft?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<SwitchLabels>
}
