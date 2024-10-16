export interface SwitchProps {
  id: string
  ariaLabel: string
  label?: string
  name?: string
  onChange?: (value: boolean) => void
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
