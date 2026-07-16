import type { ReactNode, HTMLAttributes } from 'react'

export type FieldWrapperSize = 'small' | 'default'

export type FieldWrapperLabels = {
  /** Accessible label for the required (*) indicator. Default: "required" */
  requiredSymbolLabel?: string
  /**
   * Suffix appended after the field label when the field is optional.
   * Default: " (Optional)"
   */
  optionalSuffix?: ReactNode
}

export type FieldWrapperProps = {
  label?: ReactNode
  caption?: string
  errorMessage?: string
  /**
   * Forces the error-bar / invalid state even when `errorMessage` is empty
   * (e.g. Textarea min/max validation shown in the footer).
   */
  invalid?: boolean
  required?: boolean
  disabled?: boolean
  size?: FieldWrapperSize
  showOptionalLabel?: boolean
  noMarginBottom?: boolean
  /** Override strings used by field-semantics labels. */
  labels?: FieldWrapperLabels
  /** Optional slot rendered after the control (e.g. Textarea char-count / min-max errors). */
  footer?: ReactNode
  /**
   * `field` — Chakra Field primitives (TextInput, Textarea, Combobox).
   * `group` — plain markup for composite / list inputs (Select, RadioList, etc.).
   */
  semantics?: 'field' | 'group'
  className?: string
  children: ReactNode
  /** Optional id on the caption element (for aria-describedby). */
  captionId?: string
  /** Optional id on the error element (for aria-describedby). */
  errorId?: string
  /** Extra props applied to the outer container element. */
  containerProps?: HTMLAttributes<HTMLDivElement>
}
