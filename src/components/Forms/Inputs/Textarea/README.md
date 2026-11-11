# Textarea

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-text-area--docs)

[TextareaDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Textarea/TextareaDemo.tsx)

## Import

```tsx
import { Textarea } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Textarea label='Label' caption='Caption' placeholder='placeholder' required />
```

## Props

| Prop                | Type                                                  | Default     | Description                                                                 |
| ------------------- | ----------------------------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `caption`           | `string`                                              | —           | Helper text rendered below the label                                        |
| `defaultValue`      | `string`                                              | `''`        | Initial value for uncontrolled usage                                        |
| `disabled`          | `boolean`                                             | —           | Disables the textarea                                                       |
| `errorMessage`      | `string`                                              | —           | Error message rendered below the textarea                                   |
| `label`             | `string`                                              | —           | Field label rendered above the textarea                                     |
| `labels`            | `Partial<TextareaLabels>`                             | —           | Override internal UI labels for internationalization support                |
| `maxLength`         | `number`                                              | —           | Maximum character count; shows a helper or error message under the textarea |
| `minLength`         | `number`                                              | —           | Minimum character count; shows a helper or error message under the textarea |
| `onChange`          | `(e: React.ChangeEvent<HTMLTextAreaElement>) => void` | —           | Called on each textarea change event                                        |
| `placeholder`       | `string`                                              | —           | Placeholder text shown when the field is empty                              |
| `required`          | `boolean`                                             | —           | Marks the field as required and shows the required indicator                |
| `showOptionalLabel` | `boolean`                                             | `false`     | Shows the "(optional)" suffix for non-required fields                       |
| `size`              | `'small' \| 'default'`                                | `'default'` | Controls the textarea size                                                  |

### Supporting types

```ts
type TextareaLabels = {
  requiredSymbolLabel: string // Default: "required"
  optionalSuffix: ReactNodeLabel // Default: "(optional)"
  errorPrefix: string // Default: "Error:"
  enterAtLeastChars: (n: number) => string // Default: (n) => `Enter at least ${n} characters`
  minChars: (n: number) => string // Default: (n) => `Min ${n} characters`
  charsRemaining: (n: number) => string // Default: (n) => `You have ${n} characters remaining`
  maxChars: (n: number) => string // Default: (n) => `Max ${n} characters`
  needMoreChars: (n: number) => string // Default: (n) => `You need ${n} more characters`
  tooManyChars: (n: number) => string // Default: (n) => `You have ${n} characters too many`
}
```

## Optional

```tsx
<Textarea label='Label' caption='Caption' placeholder='placeholder' />
```

## Optional Label

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  showOptionalLabel
/>
```

## Small Input

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  size='small'
/>
```

## Default Value

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  defaultValue='Default Value'
/>
```

## With Error

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  errorMessage='Error Message'
/>
```

## Max Length

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  maxLength={200}
/>
```

## Min Length

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  minLength={5}
/>
```

## Disabled

```tsx
<Textarea label='Label' caption='Caption' placeholder='placeholder' disabled />
```
