# Textarea

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-text-area--docs)

[TextareaDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Textarea/TextareaDemo.tsx)

## Import

```tsx
import { Textarea } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  helperText='You have 200 characters remaining'
  required
/>
```

## Props

```ts
type TextareaLabels = {
  /** aria-label on the required (*) indicator. Default: "required" */
  requiredSymbolLabel: string
  /**
   * Visible "(Optional)" suffix appended to the label.
   * Rendered as JSX child — accepts ReactNode.
   * Default: " (Optional)"
   */
  optionalSuffix: ReactNodeLabel
  /** "Error:" prefix in aria-label of error text. Default: "Error:" */
  errorPrefix: string
  /** Helper text: "Enter at least {n} characters". Default fn provided. */
  enterAtLeastChars: (n: number) => string
  /** Helper text: "{n} characters minimum". Default fn provided. */
  minChars: (n: number) => string
  /** Helper text: "{n} characters remaining". Default fn provided. */
  charsRemaining: (n: number) => string
  /** Helper text: "Max {n} characters". Default fn provided. */
  maxChars: (n: number) => string
  /** Error text when too few chars: "Need {n} more characters". Default fn provided. */
  needMoreChars: (n: number) => string
  /** Error text when too many chars: "{n} characters too many". Default fn provided. */
  tooManyChars: (n: number) => string
}

type TextareaProps = Omit<
  ChakraTextareaProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label?: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  showOptionalLabel?: boolean
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  minLength?: number
  maxLength?: number
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TextareaLabels>
}
```

## Optional

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  helperText='You have 200 characters remaining'
/>
```

## Small Input

```tsx
<Textarea
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  helperText='You have 200 characters remaining'
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
  helperText='You have 200 characters remaining'
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
