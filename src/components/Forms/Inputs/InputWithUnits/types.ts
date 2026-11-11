export type InputWithUnitsProps = {
  /** Field label rendered above the input */
  label: string
  /** Helper text rendered below the label */
  caption?: string
  /** Error message rendered below the input */
  errorMessage?: string
  /** Unit options shown in the attached unit select, each with a label and value */
  units: { label: string; value: string }[]
  /** Positions the unit select before (`start`) or after (`end`) the value input Defaults to `'end'` */
  unitsPosition?: 'start' | 'end'
  /** Initial value for the value input Defaults to `''` */
  defaultValue?: string
  /** Initially selected unit value; when empty the first unit is used Defaults to `''` */
  defaultUnit?: string
  /** Called with the combined value and unit string whenever the value or unit changes */
  onChange?: (value: string) => void
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Disables both the value input and the unit select */
  disabled?: boolean
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
}
