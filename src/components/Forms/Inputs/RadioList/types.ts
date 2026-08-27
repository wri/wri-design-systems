import { RadioProps } from '../../Controls/Radio/types'
import type { RadioListLabels } from '../../../../lib/i18n/types'

export type { RadioListLabels }

export type RadioListProps = {
  label: string
  caption?: string
  name: string
  radios: RadioProps[]
  defaultValue?: string
  onCheckedChange?: (name: string, selectedValue: string) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
  variant?: 'default' | 'card'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<RadioListLabels>
}
