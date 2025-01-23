import { CheckboxProps } from '../../Controls/Checkbox/types'

export type CheckboxListProps = {
  label: string
  caption?: string
  checkboxes: CheckboxProps[]
  defaultValue?: string
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
}
