export type InputWithUnitsProps = {
  label: string
  caption?: string
  errorMessage?: string
  units: { label: string; value: string }[]
  unitsPosition?: 'start' | 'end'
  defaultValue?: string
  defaultUnit?: string
  onChange?: (value: string) => void
  required?: boolean
  disabled?: boolean
}
