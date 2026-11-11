import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

export type CheckboxProps = Omit<
  ChakraCheckbox.RootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'icon'
  | 'iconColor'
  | 'iconSize'
  | 'spacing'
  | 'invalid'
> & {
  /** Name of the form field */
  name?: string
  /** Value submitted with the form when checked */
  value?: string
  /** Checked state on first render (uncontrolled) */
  defaultChecked?: boolean
  /** Controlled checked state */
  checked?: boolean
  /** Disables the checkbox and applies disabled styles */
  disabled?: boolean
  /** Renders the indeterminate (dash) state and overrides the checked display */
  indeterminate?: boolean
  /** Called with the new checked state when the checkbox is toggled */
  onCheckedChange?: ({ checked }: { checked: boolean }) => void
}
