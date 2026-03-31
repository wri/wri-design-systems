# AlertBanner

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-alert-banner--docs)

[AlertBannerDEmo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/AlertBanner/AlertBannerDemo.tsx)

## Import

```tsx
import { AlertBanner } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<AlertBanner title='Success' variant='information' />
```

## Props

```ts
interface AlertProps extends Omit<ChakraAlert.RootProps, 'title' | 'variant'> {
  title?: React.ReactNode
  icon?: React.ReactElement
  onClose?: () => void
  variant?:
    | 'general-white'
    | 'general-grey'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
}
```

## Success

```tsx
<AlertBanner title='Success' variant='success' />
```

## With Children

```tsx
<AlertBanner title='Success' variant='success'>
  <Tag label='Label' variant='info-white' />
</AlertBanner>
```
