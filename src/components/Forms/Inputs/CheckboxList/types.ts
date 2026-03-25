import { CheckboxProps } from '../../Controls/Checkbox/types'
import type { CheckboxListLabels } from '../../../../lib/i18n/types'

export type { CheckboxListLabels }

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
  defaultValues?: string[]
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
  hideCheckedCounter?: boolean
  hideExpandToggle?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<CheckboxListLabels>
}
