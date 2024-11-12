# Button

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/button--docs)

## Import

```js
import { Button } from 'wri-design-systems'
```

## Usage

```html
<Button
  label='Save and Download'
  variant='primary'
/>
```

## Props

```js
type ButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorScheme'
> & {
  label?: string
  isLoading?: boolean
  variant: 'primary' | 'secondary' | 'borderless' | 'outline'
  size?: 'default' | 'small'
  isDisabled?: boolean
}
```

## Button Variants

### Primary

```html
<Button
  label='Primary'
  variant='primary'
/>
```

### Secondary

```html
<Button
  label='Secondary'
  variant='secondary'
/>
```

### Borderless

```html
<Button
  label='Borderless'
  variant='borderless'
/>
```

### Outline

```html
<Button
  label='Outline'
  variant='outline'
/>
```

## Button Sizes

### Default

```html
<Button
  label="Primary"
  size="default"
  variant="primary"
/>
```

### Small

```html
<Button
  label="Primary"
  size="small"
  variant="primary"
/>
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
<Button
  label="Primary"
  variant="primary"
  isDisabled
/>
```

### Loading state

```html
<Button
  label="Primary"
  variant="primary"
  isLoading
/>
```
