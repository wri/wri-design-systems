import { Switch as ChakraSwitch } from '@chakra-ui/react'
import type { SwitchLabels } from '../../../../lib/i18n/types'

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
  /** Name of the switch, also used as its id and in the onChange callback */
  name: string
  /** Called with the switch name and the new checked state when toggled */
  onChange?: (name: string, checked: boolean) => void
  /** Checked state on first render (uncontrolled). Defaults to `false` */
  defaultChecked?: boolean
  /** Disables the switch and applies disabled styles. Defaults to `false` */
  disabled?: boolean
  /** Renders the label to the left of the track instead of the right. Defaults to `false` */
  isLabelOnLeft?: boolean
  /** Override internal UI labels for internationalization support */
  labels?: Partial<SwitchLabels>
}
