# TextInput

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/inputs-text-input--docs)

[TextInputDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/TextInput/TextInputDemo.tsx)

## Import

```js
import { TextInput } from '@worldresources/wri-design-systems'
```

## Usage

```html
<TextInput label="Label" caption="Caption" placeholder="placeholder" required />
```

## Props

```ts
type TextInputProps = Omit<
  ChakraInputProps,
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
<TextInput label="Label" caption="Caption" placeholder="placeholder" />
```

## Small Input

```html
<TextInput
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  size="small"
  required
/>
```

## Default Value

```html
<TextInput
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  defaultValue="Default Value"
  required
/>
```

## With Error

```html
<TextInput
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  errorMessage="Error Message"
  required
/>
```

## Disabled

```html
<TextInput
  label="Label"
  caption="Caption"
  placeholder="placeholder"
  required
  disabled
/>
```
