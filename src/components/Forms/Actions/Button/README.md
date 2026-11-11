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

| Prop         | Type                                                                  | Default     | Description                                                                               |
| ------------ | --------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `aria-label` | `string`                                                              | —           | Accessible name for the button; takes precedence over the text label except while loading |
| `children`   | `React.ReactNode`                                                     | —           | Button content; use instead of `label`                                                    |
| `disabled`   | `boolean`                                                             | —           | Disables the button                                                                       |
| `label`      | `string \| React.ReactNode`                                           | —           | Button content; may be any React node, but only plain text is used as the accessible name |
| `labels`     | `Partial<ButtonLabels>`                                               | —           | Override internal UI labels for internationalization support                              |
| `leftIcon`   | `React.ReactNode`                                                     | —           | Icon rendered before the button content                                                   |
| `loading`    | `boolean`                                                             | —           | Shows a spinner in place of the icons and disables the button                             |
| `rightIcon`  | `React.ReactNode`                                                     | —           | Icon rendered after the button content                                                    |
| `size`       | `'default' \| 'small'`                                                | `'default'` | Size of the button                                                                        |
| `variant`    | `'primary' \| 'secondary' \| 'borderless' \| 'outline' \| 'negative'` | `'primary'` | Visual style of the button                                                                |

### Supporting types

```ts
type ButtonLabels = {
  /** aria-label applied to the button during loading state. Default: "Loading" */
  loadingLabel: string
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

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-button-preset-sso-buttons--docs)

[SSOButtonsDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Actions/Button/ButtonDemo.tsx)

```tsx
import { SSOButtons } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
  <SSOButtons.Google />
  <SSOButtons.Facebook />
  <SSOButtons.X />
</div>
```
