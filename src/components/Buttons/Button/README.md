# Button

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-buttons-button--docs)

[ButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Buttons/Button/ButtonDemo.tsx)

## Import

```js
import { Button } from '@worldresources/wri-design-systems'
```

## Usage

```html
<Button label="Save and Download" variant="primary" />
```

## Props

```ts
type ButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label?: string
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
```

## Button Variants

### Primary

```html
<Button label="Primary" variant="primary" />
```

### Secondary

```html
<Button label="Secondary" variant="secondary" />
```

### Borderless

```html
<Button label="Borderless" variant="borderless" />
```

### Outline

```html
<Button label="Outline" variant="outline" />
```

## Button Sizes

### Default

```html
<Button label="Primary" size="default" variant="primary" />
```

### Small

```html
<Button label="Primary" size="small" variant="primary" />
```

## Button with Icon

### Left Icon

```html
<Button
  label="Outline"
  leftIcon={<SettingsIcon />}
  variant="primary"
/>
```

### Right Icon

```html
<Button
  label="Outline"
  rightIcon={<SettingsIcon />}
  variant="primary"
/>
```

## Other Props

### Disabled

```html
<Button label="Primary" variant="primary" disabled />
```

### Loading state

```html
<Button label="Primary" variant="primary" loading />
```
