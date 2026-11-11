import { SelectRootProps as ChakraSelectRootProps } from '@chakra-ui/react'
import type { SelectLabels } from '../../../../lib/i18n/types'

export type { SelectLabels }

export type SelectItemProps = {
  label: string
  caption?: string
  value: string
}

export type SelectProps = Omit<
  ChakraSelectRootProps,
  | 'collection'
  | 'size'
  | 'colorPalette'
  | 'variant'
  | 'onValueChange'
  | 'onChange'
  | 'defaultChecked'
  | 'invalid'
> & {
  /** Field label rendered above the trigger */
  label?: string
  /** Helper text rendered below the label */
  caption?: string
  /** Text shown in the trigger when no value is selected Defaults to `''` */
  placeholder?: string
  /** Initially selected item values for uncontrolled usage Defaults to `[]` */
  defaultValue?: string[]
  /** Options shown in the dropdown, each with a `label`, optional `caption` and `value` */
  items: SelectItemProps[]
  /** Controls the trigger and dropdown size Defaults to `'default'` */
  size?: 'default' | 'small'
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Disables the trigger and dropdown */
  disabled?: boolean
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Called with the selected item values whenever the selection changes */
  onChange?: (value: string[]) => void
  /** Error message rendered below the trigger */
  errorMessage?: string
  /** Allows selecting multiple options, shown as removable tags in the trigger */
  multiple?: boolean
  /** Override internal UI labels for internationalization support */
  labels?: Partial<SelectLabels>
}
