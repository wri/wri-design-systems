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
  }: {
    strength: string
    length: boolean
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    specialCharacters: boolean
  }) => void
  disabledRules?: {
    uppercase?: boolean
    lowercase?: boolean
    numbers?: boolean
    specialCharacters?: boolean
  }
}
