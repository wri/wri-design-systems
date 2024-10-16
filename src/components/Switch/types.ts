export interface SwitchProps {
  id: string
  ariaLabel: string
  onChange: (value: boolean) => void
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  isLabelOnRight?: boolean
}

export interface SwitchContainerProps {
  isChecked: boolean
  isFocused: boolean
  isDisabled: boolean
  backgroundColor: string
  checkedAndDisabledColor: string
}
