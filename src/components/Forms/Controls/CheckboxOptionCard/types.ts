export type CheckboxOptionCardItemProps = {
  label: string
  caption?: string
  icon?: React.ReactNode
  variant?: 'default' | 'centered' | 'expanded'
  disabled?: boolean
  children?: React.ReactNode
  value: string
}

export type CheckboxOptionCardProps = {
  defaultValue?: string[]
  items: CheckboxOptionCardItemProps[]
  onValueChange?: (value: string[]) => void
}
