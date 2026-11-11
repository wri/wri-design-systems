import type { BaseMapLabels } from '../../../lib/i18n/types'

export type { BaseMapLabels }

type AdditionalSettingsProps = {
  /** Checkbox label for the setting */
  label: string
  /** Whether the setting checkbox is checked */
  checked?: boolean
  /** Called with the new checked state when the checkbox toggles */
  onCheckedChange: ({ checked }: { checked: boolean }) => void
  /** Optional content rendered under the checkbox while it is checked */
  children?: React.ReactNode
}

export type BaseMapOptionProps = {
  /** Unique identifier of the base map option */
  id: string
  /** Display name of the base map option */
  label: string
  /** Short description shown under the option label */
  caption: string
  /** Preview image URL shown for the option */
  imageUrl: string
  /** Optional content rendered inside the option when it is active */
  children?: React.ReactNode
  /** Marks the option as the currently active base map, showing the Active tag */
  active?: boolean
}

export type BaseMapProps = {
  /** Heading shown at the top of the base map panel */
  title: string
  /** Optional subheading shown under the title */
  caption?: string
  /** Optional checkbox settings rendered above the base map options */
  additionalSettings?: AdditionalSettingsProps[]
  /** Base map options available for selection */
  options: BaseMapOptionProps[]
  /** Called with the selected option when an option is clicked */
  onOptionSelected?: (option: BaseMapOptionProps) => void
  /** Maximum height of the panel. Defaults to `25rem` */
  maxHeight?: string
  /** Maximum width of the panel. Defaults to `16.25rem` */
  maxWidth?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<BaseMapLabels>
}
