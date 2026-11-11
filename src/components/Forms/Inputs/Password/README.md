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

| Prop                | Type                                                                                                                                                              | Default | Description                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `caption`           | `string`                                                                                                                                                          | —       | Helper text rendered below the label                                             |
| `disabledRules`     | `{ uppercase?: boolean; lowercase?: boolean; numbers?: boolean; specialCharacters?: boolean }`                                                                    | —       | Disables individual strength rules; each key set to `true` hides its rule row    |
| `hideValidations`   | `boolean`                                                                                                                                                         | —       | Hides the strength bar and rule checklist while typing                           |
| `label`             | `string`                                                                                                                                                          | —       | Field label rendered above the input                                             |
| `labels`            | `Partial<PasswordLabels>`                                                                                                                                         | —       | Override internal UI labels for internationalization support                     |
| `minLength`         | `number`                                                                                                                                                          | `8`     | Minimum character length required and shown in the length rule                   |
| `onChange`          | `(status: { strength: string; length: boolean; uppercase: boolean; lowercase: boolean; numbers: boolean; specialCharacters: boolean; password: string }) => void` | —       | Called with the current password and its rule results whenever the value changes |
| `required`          | `boolean`                                                                                                                                                         | —       | Marks the field as required and shows the required indicator                     |
| `showOptionalLabel` | `boolean`                                                                                                                                                         | `false` | Shows the "(optional)" suffix for non-required fields                            |

### Supporting types

```ts
type StrengthLevel = 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong'

type PasswordLabels = {
  showLabel: string // Default: "Show"
  hideLabel: string // Default: "Hide"
  showPasswordLabel: string // Default: "Show password"
  hidePasswordLabel: string // Default: "Hide password"
  strengthPrefix: ReactNodeLabel // Default: "Password Strength:"
  strengthVeryWeak: ReactNodeLabel // Default: "Very Weak"
  strengthWeak: ReactNodeLabel // Default: "Weak"
  strengthMedium: ReactNodeLabel // Default: "Medium"
  strengthStrong: ReactNodeLabel // Default: "Strong"
  strengthVeryStrong: ReactNodeLabel // Default: "Very Strong"
  requirementMet: string // Default: "Requirement met."
  requirementNotMet: string // Default: "Requirement not met."
  minLengthRule: (min: number) => string // Default: (min) => `Use a minimum of ${min} characters`
  uppercaseRule: string // Default: "Use an uppercase letter"
  lowercaseRule: string // Default: "Use a lowercase letter"
  numberRule: string // Default: "Use a number"
  specialCharRule: string // Default: "Use a special character"
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
