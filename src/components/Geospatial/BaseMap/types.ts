import type { BaseMapLabels } from '../../../lib/i18n/types'

export type { BaseMapLabels }

type AdditionalSettingsProps = {
  label: string
  checked?: boolean
  onCheckedChange: ({ checked }: { checked: boolean }) => void
  children?: React.ReactNode
}

export type BaseMapOptionProps = {
  id: string
  label: string
  caption: string
  imageUrl: string
  children?: React.ReactNode
  active?: boolean
}

export type BaseMapProps = {
  title: string
  caption?: string
  additionalSettings?: AdditionalSettingsProps[]
  options: BaseMapOptionProps[]
  onOptionSelected?: (option: BaseMapOptionProps) => void
  maxHeight?: string
  maxWidth?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<BaseMapLabels>
}
