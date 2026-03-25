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
  label: string
  caption?: string
  required?: boolean
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
  disabledRules?: {
    uppercase?: boolean
    lowercase?: boolean
    numbers?: boolean
    specialCharacters?: boolean
  }
  minLength?: number
  hideValidations?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<PasswordLabels>
}
