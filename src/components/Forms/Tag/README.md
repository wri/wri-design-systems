# Tag

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-tag--docs)

[TagDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Tag/TagDemo.tsx)

## Import

```tsx
import { Tag } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Tag label='Default' variant='info-white' icon={<InfoIcon />} closable />
```

## Props

```ts
type TagLabels = {
  closeButtonAriaLabel: (label: string) => string
}

type TagProps = Omit<
  ChakraTag.RootProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label: React.ReactNode
  /** Optional accessible name when `label` is not plain text. */
  ariaLabel?: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  icon?: React.ReactNode
  /** Whether the icon renders before (start) or after (end) the label. */
  iconPosition?: 'start' | 'end'
  /** Optional custom background color, overriding the variant background. */
  color?: string
  /** Optional custom border color, overriding the variant border. */
  borderColor?: string
  /** Optional custom color for the close icon, overriding the default. */
  closeIconColor?: string
  onClose?: VoidFunction
  closable?: boolean
  labels?: Partial<TagLabels>
}
```

## Info White

```tsx
<Tag label='Label' variant='info-white' />
```

## Info Grey

```tsx
<Tag label='Label' variant='info-grey' />
```

## Success

```tsx
<Tag label='Label' variant='success' />
```

## Warning

```tsx
<Tag label='Label' variant='warning' />
```

## Error

```tsx
<Tag label='Label' variant='error' />
```

## Small Size

```tsx
<Tag label='Label' size='small' variant='info-grey' />
```

## Large Size

```tsx
<Tag label='Label' size='large' variant='info-grey' />
```

## With Icon

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} />
```

## Icon On The Right

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} iconPosition='end' />
```

## Custom Color

```tsx
<Tag label='Label' variant='info-grey' color='#7B61FF' />
```

## Close Icon Color

When `closeIconColor` is set, it overrides the close icon's original color.

```tsx
<Tag label='Label' variant='info-grey' closable closeIconColor='#FF0000' />
```

## Custom Border Color

```tsx
<Tag label='Label' variant='info-grey' borderColor='#7B61FF' />
```

## Node Label

```tsx
<Tag
  ariaLabel='Status: active'
  label={<strong>Status</strong>}
  variant='success'
/>
```

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable />
```

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable disabled />
```

## Internationalization (i18n)

```tsx
<Tag
  label='Etiqueta'
  variant='info-grey'
  closable
  labels={{
    closeButtonAriaLabel: (label) => `Cerrar etiqueta ${label}`,
  }}
/>
```
