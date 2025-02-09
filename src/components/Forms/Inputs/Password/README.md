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
```

## Password

```tsx
<Password label='Label' caption='Caption' required />
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

## Just 8 Charactes Validation

```tsx
<Password
  label='Label'
  caption='Caption'
  disabledRules={{
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialCharacters: true,
  }}
  required
/>
```
