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
}
