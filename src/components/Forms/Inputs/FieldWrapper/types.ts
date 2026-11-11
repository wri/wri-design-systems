import type { ReactNode, HTMLAttributes } from 'react'

export type FieldWrapperSize = 'small' | 'default'

export type FieldWrapperLabels = {
  /** Accessible label for the required (*) indicator. Default: "required" */
  requiredSymbolLabel?: string
  /**
   * Suffix appended after the field label when the field is optional.
   * Spacing between the label and the suffix is handled by the label's flex gap.
   * Default: "(optional)"
   */
  optionalSuffix?: ReactNode
}

export type FieldWrapperProps = {
  /** Field label rendered above the control */
  label?: ReactNode
  /** Helper text rendered below the label */
  caption?: string
  /** Error message rendered below the control; also shows the error bar */
  errorMessage?: string
  /**
   * Forces the error-bar / invalid state even when `errorMessage` is empty
   * (e.g. Textarea min/max validation shown in the footer).
   */
  invalid?: boolean
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Applies disabled styling to the label and caption */
  disabled?: boolean
  /** Controls the spacing and text size of the label, caption and content Defaults to `'default'` */
  size?: FieldWrapperSize
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Removes the bottom margin below the field Defaults to `false` */
  noMarginBottom?: boolean
  /** Override strings used by field-semantics labels */
  labels?: FieldWrapperLabels
  /** Optional slot rendered after the control (e.g. Textarea char-count / min-max errors) */
  footer?: ReactNode
  /**
   * `field` — Chakra Field primitives (TextInput, Textarea, Combobox).
   * `group` — plain markup for composite / list inputs (Select, RadioList, etc.).
   * Defaults to `'field'`
   */
  semantics?: 'field' | 'group'
  /** Additional className applied to the root container */
  className?: string
  /** Control content rendered inside the field */
  children: ReactNode
  /** Optional id on the caption element (for aria-describedby) */
  captionId?: string
  /** Optional id on the error element (for aria-describedby) */
  errorId?: string
  /** Extra props applied to the outer container element */
  containerProps?: HTMLAttributes<HTMLDivElement>
}
