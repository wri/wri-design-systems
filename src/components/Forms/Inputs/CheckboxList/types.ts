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
  /**
   * Group label; pass an object with `type: 'checkbox'` to render a parent
   * select-all checkbox with expand/collapse toggle and checked counter
   */
  label: CheckboxListLabel
  /** Helper text rendered below the label */
  caption?: string
  /** Checkbox items rendered in the list, each following the `Checkbox` component props */
  checkboxes: CheckboxProps[]
  /** Names of checkboxes initially checked when the item has no explicit `checked` prop Defaults to `[]` */
  defaultValues?: string[]
  /** Called with a map of checkbox names to checked state whenever the selection changes */
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  /** Error message rendered below the list and included in the group aria-label */
  errorMessage?: string
  /** Lays out the checkboxes in a horizontal row instead of a vertical column */
  horizontal?: boolean
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Shows the "(optional)" suffix for non-required fields */
  showOptionalLabel?: boolean
  /** Hides the "checked / total" counter next to the parent checkbox label */
  hideCheckedCounter?: boolean
  /** Hides the expand/collapse toggle shown next to the parent checkbox label */
  hideExpandToggle?: boolean
  /** Override internal UI labels for internationalization support */
  labels?: Partial<CheckboxListLabels>
}
