# Button

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-button--docs)

[ButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Actions/Button/ButtonDemo.tsx)

## Import

```tsx
import { Button } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Button label='Save and Download' variant='primary' />
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

```tsx
<Button label='Primary' variant='primary' />
```

### Secondary

```tsx
<Button label='Secondary' variant='secondary' />
```

### Borderless

```tsx
<Button label='Borderless' variant='borderless' />
```

### Outline

```tsx
<Button label='Outline' variant='outline' />
```

## Button Sizes

### Default

```tsx
<Button label='Primary' size='default' variant='primary' />
```

### Small

```tsx
<Button label='Primary' size='small' variant='primary' />
```

## Button with Icon

### Left Icon

```tsx
<Button label='Outline' leftIcon={<SettingsIcon />} variant='primary' />
```

### Right Icon

```tsx
<Button label='Outline' rightIcon={<SettingsIcon />} variant='primary' />
```

## Other Props

### Disabled

```tsx
<Button label='Primary' variant='primary' disabled />
```

### Loading state

```tsx
<Button label='Primary' variant='primary' loading />
```

## Presets

```tsx
import { SSOButtons } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <SSOButtons.Google />
  <SSOButtons.Facebook />
  <SSOButtons.X />
</div>
```
