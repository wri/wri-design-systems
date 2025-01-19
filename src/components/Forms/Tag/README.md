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
type TagProps = Omit<
  ChakraTag.RootProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  label: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  icon?: React.ReactNode
  onClose?: VoidFunction
  closable?: boolean
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

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable />
```

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable disabled />
```
