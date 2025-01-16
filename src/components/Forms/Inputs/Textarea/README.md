# Textarea

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-text-area--docs)

[TextareaDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Textarea/TextareaDemo.tsx)

## Import

```js
import { Textarea } from '@worldresources/wri-design-systems'
```

## Usage

```html
<textarea
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  helperText="You have 200 characters remaining"
  required
/>
```

## Props

```ts
type TextareaProps = Omit<
  ChakraTextareaProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  label: string
  caption?: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'default'
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
```

## Optional

```html
<textarea
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  helperText="You have 200 characters remaining"
/>
```

## Small Input

```html
<textarea
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  helperText="You have 200 characters remaining"
  size="small"
/>
```

## Default Value

```html
<textarea
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  defaultValue="Default Value"
/>
```

## With Error

```html
<textarea
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  helperText="You have 200 characters remaining"
  errorMessage="Error Message"
/>
```

## Disabled

```html
<textarea label="Label" caption="Caption" placeholder="placeholder" disabled />
```
