import { RadioProps } from '../../Controls/Radio/types'
import type { RadioListLabels } from '../../../../lib/i18n/types'

export type { RadioListLabels }

export type RadioListProps = {
  /** Group label rendered above the list */
  label: string
  /** Helper text rendered below the label */
  caption?: string
  /** Name applied to the underlying radio group */
  name: string
  /** Radio items rendered in the list, each following the `Radio` component props */
  radios: RadioProps[]
  /** Initially selected radio value */
  defaultValue?: string
  /** Called with the group name and the selected radio value whenever the selection changes */
  onCheckedChange?: (name: string, selectedValue: string) => void
  /** Error message rendered below the list and included in the group aria-label */
  errorMessage?: string
  /** Lays out the radios in a horizontal row; ignored in the `card` variant */
  horizontal?: boolean
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Visual style of the radio items; `card` renders bordered cards Defaults to `'default'` */
  variant?: 'default' | 'card'
  /** Override internal UI labels for internationalization support */
  labels?: Partial<RadioListLabels>
}
