# Input

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/inputs-input--docs)

[InputDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Input/InputDemo.tsx)

## Import

```js
import { Input } from 'wri-design-systems'
```

## Usage

```html
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  required
/>
```

## Props

```ts
type InputProps = Omit<
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
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
/>
```

## Small Input

```html
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  size='small'
  required
/>
```

## Default Value

```html
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  defaultValue='Default Value'
  required
/>
```

## With Error

```html
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  errorMessage='Error Message'
  required
/>
```

## Disabled

```html
<Input
  label='Label'
  caption='Caption'
  placeholder='placeholder'
  required
  disabled
/>
```
