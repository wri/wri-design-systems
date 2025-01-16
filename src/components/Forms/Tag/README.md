# Tag

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-tag--docs)

[TagDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Tag/TagDemo.tsx)

## Import

```js
import { Tag } from '@worldresources/wri-design-systems'
```

## Usage

```html
<Tag
  label='Default'
  variant='info-white'
  icon={<InfoIcon />}
  closable
/>
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

```html
<Tag label="Label" variant="info-white" />
```

## Info Grey

```html
<Tag label="Label" variant="info-grey" />
```

## Success

```html
<Tag label="Label" variant="success" />
```

## Warning

```html
<Tag label="Label" variant="warning" />
```

## Error

```html
<Tag label="Label" variant="error" />
```

## Small Size

```html
<Tag label="Label" size="small" variant="info-grey" />
```

## Large Size

```html
<Tag label="Label" size="large" variant="info-grey" />
```

## With Icon

```html
<Tag
  label='Label'
  variant='info-grey'
  icon={<InfoIcon />}
/>
```

## Closable

```html
<Tag
  label='Label'
  variant='info-grey'
  icon={<InfoIcon />}
  closable
/>
```

## Closable

```html
<Tag
  label='Label'
  variant='info-grey'
  icon={<InfoIcon />}
  closable
  disabled
/>
```
