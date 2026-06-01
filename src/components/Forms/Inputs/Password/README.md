# Password

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-password--docs)

[PasswordDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Password/PasswordDemo.tsx)

## Import

```tsx
import { Password } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Password label='Label' caption='Caption' required />
```

## Props

```ts
type PasswordLabels = {
  /** Button label when password is hidden. Must be string (passed to Button.label: string). Default: "Show" */
  showLabel: string
  /** Button label when password is visible. Must be string (passed to Button.label: string). Default: "Hide" */
  hideLabel: string
  /** Aria-label for the reveal button when password is hidden. Must be string (aria-label). Default: "Show password" */
  showPasswordLabel: string
  /** Aria-label for the reveal button when password is visible. Must be string (aria-label). Default: "Hide password" */
  hidePasswordLabel: string
  /**
   * Text prefix before the strength value.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Password Strength:"
   */
  strengthPrefix: ReactNodeLabel
  /**
   * Displayed label for each strength level — rendered as JSX children.
   * All five accept ReactNode.
   */
  strengthVeryWeak: ReactNodeLabel
  strengthWeak: ReactNodeLabel
  strengthMedium: ReactNodeLabel
  strengthStrong: ReactNodeLabel
  strengthVeryStrong: ReactNodeLabel
  /** Appended to a rule's aria-label when satisfied. Must be string (aria-label template). Default: "Requirement met." */
  requirementMet: string
  /** Appended to a rule's aria-label when not satisfied. Must be string (aria-label template). Default: "Requirement not met." */
  requirementNotMet: string
  /**
   * Dual-use: rendered as `<p>` text AND inside an aria-label template.
   * Must be string to satisfy the aria-label constraint.
   * Default: (min) => `Use a minimum of ${min} characters`
   */
  minLengthRule: (min: number) => string
  /** Dual-use (p + aria-label). Must be string. Default: "Use an uppercase letter" */
  uppercaseRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a lowercase letter" */
  lowercaseRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a number" */
  numberRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a special character" */
  specialCharRule: string
}

/**
 * Internal strength key — used for styling logic.
 * Decoupled from display labels so that translations do not break styles.
 */
type StrengthLevel = 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong'

type PasswordProps = {
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
```

## Password

```tsx
<Password label='Label' caption='Caption' required />
```

## Custom Min Characters

```tsx
<Password label='Label' caption='Caption' minLength={10} required />
```

## No Uppercase Validation

```tsx
<Password
  label='Label'
  caption='Caption'
  disabledRules={{
    uppercase: true,
  }}
  required
/>
```

## No Lowercase Validation

```tsx
<Password
  label='Label'
  caption='Caption'
  disabledRules={{
    lowercase: true,
  }}
  required
/>
```

## No Numbers Validation

```tsx
<Password
  label='Label'
  caption='Caption'
  disabledRules={{
    numbers: true,
  }}
  required
/>
```

## No Special Characters Validation

```tsx
<Password
  label='Label'
  caption='Caption'
  disabledRules={{
    specialCharacters: true,
  }}
  required
/>
```

## No Validations

```tsx
<Password label='Label' caption='Caption' hideValidations required />
```

## Internationalization (i18n)

The component ships with English defaults for all internal UI strings. Override any or all of them via the `labels` prop, or set them app-wide using `DesignSystemLocaleProvider`.

### Per-component override

```tsx
<Password
  label='Contraseña'
  labels={{
    showLabel: 'Mostrar',
    hideLabel: 'Ocultar',
    strengthPrefix: 'Seguridad:',
    strengthVeryWeak: 'Muy débil',
    strengthWeak: 'Débil',
    strengthMedium: 'Media',
    strengthStrong: 'Fuerte',
    strengthVeryStrong: 'Muy fuerte',
    requirementMet: 'Requisito cumplido.',
    requirementNotMet: 'Requisito no cumplido.',
    minLengthRule: (min) => `Usa un mínimo de ${min} caracteres`,
    uppercaseRule: 'Usa una letra mayúscula',
    lowercaseRule: 'Usa una letra minúscula',
    numberRule: 'Usa un número',
    specialCharRule: 'Usa un carácter especial',
  }}
  required
/>
```

### App-wide via context

```tsx
import { DesignSystemLocaleProvider } from '@worldresources/wri-design-systems'
;<DesignSystemLocaleProvider
  labels={{
    Password: {
      showLabel: 'Mostrar',
      hideLabel: 'Ocultar',
      minLengthRule: (min) => `Usa un mínimo de ${min} caracteres`,
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

### With react-intl

```tsx
const intl = useIntl()

<Password
  labels={{
    showLabel: intl.formatMessage({ id: 'password.show' }),
    hideLabel: intl.formatMessage({ id: 'password.hide' }),
    minLengthRule: (min) =>
      intl.formatMessage({ id: 'password.minLength' }, { min }),
  }}
/>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.
