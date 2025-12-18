import { CheckboxProps } from '../../Controls/Checkbox/types'

export type CheckboxListLabel =
  | string
  | {
      type: 'checkbox'
      label: string
      name: string
    }

export type CheckboxListProps = {
  label: CheckboxListLabel
  caption?: string
  checkboxes: CheckboxProps[]
  defaultValue?: string
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
  hideCheckedCounter?: boolean
  hideExpandToggle?: boolean
}
