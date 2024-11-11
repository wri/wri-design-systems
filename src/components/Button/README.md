# Button

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/button--docs)

## Import

```
import { Button } from 'wri-design-systems'
```

## Usage

```
<Button
  label='Save and Download'
  variant='primary'
/>
```

## Props

```
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

```
<Button
  label='Primary'
  variant='primary'
/>
```

### Secondary

```
<Button
  label='Secondary'
  variant='secondary'
/>
```

### Borderless

```
<Button
  label='Borderless'
  variant='borderless'
/>
```

### Outline

```
<Button
  label='Outline'
  variant='outline'
/>
```

## Button Sizes

### Default

```
<Button
  label="Primary"
  size="default"
  variant="primary"
/>
```

### Small

```
<Button
  label="Primary"
  size="small"
  variant="primary"
/>
```

## Button with Icon

### Left Icon

```
<Button
  label="Outline"
  leftIcon={<SettingsIcon />}
  variant="primary"
/>
```

### Right Icon

```
<Button
  label="Outline"
  rightIcon={<SettingsIcon />}
  variant="primary"
/>
```

## Other Props

### Disabled

```
<Button
  label="Primary"
  variant="primary"
  isDisabled
/>
```

### Loading state

```
<Button
  label="Primary"
  variant="primary"
  isLoading
/>
```
