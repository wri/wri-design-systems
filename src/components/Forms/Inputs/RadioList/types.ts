import { RadioProps } from '../../Controls/Radio/types'

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
}
