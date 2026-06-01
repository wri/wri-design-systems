# TextInput

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-text-input--docs)

[TextInputDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/TextInput/TextInputDemo.tsx)

## Import

```tsx
import { TextInput } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<TextInput label='Label' caption='Caption' placeholder='placeholder' required />
```

## Props

```ts
type TextInputLabels = {
  /** Accessible label for the required (*) indicator. Must be string (aria-label). Default: "required" */
  requiredSymbolLabel: string
  /**
   * Suffix appended after the field label when the field is optional.
   * Rendered as JSX child inside a <span> — accepts ReactNode.
   * Default: " (Optional)"
   */
  optionalSuffix: ReactNodeLabel
}

type TextInputProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label?: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  noMarginBottom?: boolean
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TextInputLabels>
}
```

## Optional

```tsx
<TextInput label='Label' caption='Caption' placeholder='placeholder' />
```

## Small Input

```tsx
<TextInput
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  size='small'
  required
/>
```

## Default Value

```tsx
<TextInput
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  defaultValue='Default Value'
  required
/>
```

## With Error

```tsx
<TextInput
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  errorMessage='Error Message'
  required
/>
```

## Disabled

```tsx
<TextInput
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  required
  disabled
/>
```

## Internationalization (i18n)

The component ships with English defaults for all internal UI strings. Override any or all of them via the `labels` prop, or set them app-wide using `DesignSystemLocaleProvider`.

### Per-component override

```tsx
<TextInput
  label='Correo electrónico'
  labels={{
    requiredSymbolLabel: 'obligatorio',
    optionalSuffix: ' (Opcional)',
  }}
/>
```

### App-wide via context

```tsx
import { DesignSystemLocaleProvider } from '@worldresources/wri-design-systems'
;<DesignSystemLocaleProvider
  labels={{
    TextInput: {
      requiredSymbolLabel: 'obligatoire',
      optionalSuffix: ' (Optionnel)',
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.
