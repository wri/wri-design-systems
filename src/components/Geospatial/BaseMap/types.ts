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
}
