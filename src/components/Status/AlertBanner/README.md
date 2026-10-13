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
type AlertBannerLabels = {
  /** aria-label on the close action button. Default: "Close alert" */
  closeAlertLabel: string
}

interface AlertProps
  extends Omit<ChakraAlert.RootProps, 'title' | 'variant' | 'width'> {
  title?: React.ReactNode
  icon?: React.ReactElement
  onClose?: () => void
  isCentered?: boolean
  width?: 'full-width' | 'inline'
  variant?:
    | 'general-white'
    | 'general-grey'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AlertBannerLabels>
}
```

## Success

```tsx
<AlertBanner title='Success' variant='success' />
```

## With Children

```tsx
<AlertBanner title='Success' variant='success'>
  <Button variant='secondary' size='small' label='Label' />
</AlertBanner>
```

## Inline

The `inline` width renders a fully bordered box with a 4px border radius;
`full-width` (default) renders a square ribbon with a bottom border only.
Both are 44px tall per the Figma design.

```tsx
<AlertBanner title='Information' variant='information' width='inline' />
```
