# Banner

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/banner--docs)

[BannerDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Banner/BannerDemo.tsx)

## Import

```js
import { Banner } from 'wri-design-systems'
```

## Usage

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
/>
```

## Props

```ts
type BannerProps = {
  label: string
  caption?: string
  variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
  size?: 'small' | 'large'
  icon?: React.ReactNode
  onActionClick?: VoidFunction
  actionLabel?: string
  isButtonRight?: boolean
}
```

## Info White

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
/>
```

## Info Grey

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-grey'
  actionLabel='Label'
/>
```

## Success

```html
<Banner
  label='Label'
  caption='caption'
  variant='success'
  actionLabel='Label'
/>
```

## Warning

```html
<Banner
  label='Label'
  caption='caption'
  variant='warning'
  actionLabel='Label'
/>
```

## Error

```html
<Banner
  label='Label'
  caption='caption'
  variant='error'
  actionLabel='Label'
/>
```

## Button Right

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  isButtonRight
/>
```

## Small

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  size='small'
/>
```

## Small Button Right

```html
<Banner
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  isButtonRight
  size='small'
/>
```
