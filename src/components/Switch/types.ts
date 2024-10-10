export interface SwitchProps {
  id: string
  ariaLabel: string
  onChange: (value: boolean) => void
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  isLabelOnRight?: boolean
  neutral300?: string
  neutral500?: string
  primary200?: string
  primary500?: string
  primary700?: string
}

export interface SwitchContainerProps {
  isChecked: boolean
  isFocused: boolean
  isDisabled: boolean
  backgroundColor: string
  primary200: string
}
