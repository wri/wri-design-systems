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

| Prop                | Type                                               | Default     | Description                                                  |
| ------------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| `caption`           | `string`                                           | —           | Helper text rendered below the label                         |
| `defaultValue`      | `string`                                           | `''`        | Initial value for uncontrolled usage                         |
| `disabled`          | `boolean`                                          | —           | Disables the input                                           |
| `errorMessage`      | `string`                                           | —           | Error message rendered below the input                       |
| `label`             | `string`                                           | —           | Field label rendered above the input                         |
| `labels`            | `Partial<TextInputLabels>`                         | —           | Override internal UI labels for internationalization support |
| `noMarginBottom`    | `boolean`                                          | `false`     | Removes the bottom margin below the field                    |
| `onChange`          | `(e: React.ChangeEvent<HTMLInputElement>) => void` | —           | Called on each input change event                            |
| `placeholder`       | `string`                                           | —           | Placeholder text shown when the field is empty               |
| `required`          | `boolean`                                          | —           | Marks the field as required and shows the required indicator |
| `showOptionalLabel` | `boolean`                                          | `false`     | Shows the "(optional)" suffix for non-required fields        |
| `size`              | `'small' \| 'default'`                             | `'default'` | Controls the input size                                      |

### Supporting types

```ts
type TextInputLabels = {
  requiredSymbolLabel: string // Default: "required"
  optionalSuffix: ReactNodeLabel // Default: "(optional)"
}
```

## Optional

```tsx
<TextInput label='Label' caption='Caption' placeholder='placeholder' />
```

## Optional Label

```tsx
<TextInput
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  showOptionalLabel
/>
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
    optionalSuffix: '(opcional)',
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
      optionalSuffix: '(optionnel)',
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.
