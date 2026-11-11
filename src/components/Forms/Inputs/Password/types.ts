import type { PasswordLabels } from '../../../../lib/i18n/types'

export type { PasswordLabels }

/**
 * Internal strength key — used for styling logic.
 * Decoupled from display labels so that translations do not break styles.
 */
export type StrengthLevel =
  | 'very-weak'
  | 'weak'
  | 'medium'
  | 'strong'
  | 'very-strong'

export type PasswordProps = {
  /** Field label rendered above the input */
  label: string
  /** Helper text rendered below the label */
  caption?: string
  /** Marks the field as required and shows the required indicator */
  required?: boolean
  /** Shows the "(optional)" suffix for non-required fields Defaults to `false` */
  showOptionalLabel?: boolean
  /** Called with the current password and its rule results whenever the value changes */
  onChange?: ({
    strength,
    length,
    uppercase,
    lowercase,
    numbers,
    specialCharacters,
    password,
  }: {
    strength: string
    length: boolean
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    specialCharacters: boolean
    password: string
  }) => void
  /** Disables individual strength rules; each key set to `true` hides its rule row */
  disabledRules?: {
    uppercase?: boolean
    lowercase?: boolean
    numbers?: boolean
    specialCharacters?: boolean
  }
  /** Minimum character length required and shown in the length rule Defaults to `8` */
  minLength?: number
  /** Hides the strength bar and rule checklist while typing */
  hideValidations?: boolean
  /** Override internal UI labels for internationalization support */
  labels?: Partial<PasswordLabels>
}
