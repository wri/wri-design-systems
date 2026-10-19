# AlertBanner

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-alert-banner--docs)

[AlertBannerDEmo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/AlertBanner/AlertBannerDemo.tsx)

## Import

```tsx
import { AlertBanner } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<AlertBanner variant='information'>Information</AlertBanner>
```

## Props

```ts
type AlertBannerLabels = {
  /** aria-label on the close action button. Default: "Close alert" */
  closeAlertLabel: string
}

interface AlertProps
  extends Omit<ChakraAlert.RootProps, 'title' | 'variant' | 'width'> {
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
<AlertBanner variant='success'>Success</AlertBanner>
```

## With Custom Content

Children are the single content API — pass any node, including custom layouts:

```tsx
<AlertBanner variant='success'>
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    Success
    <Button variant='secondary' size='small' label='Label' />
  </div>
</AlertBanner>
```

## Inline

The `inline` width renders a fully bordered box with a 4px border radius;
`full-width` (default) renders a square ribbon with a bottom border only.
Both are 44px tall per the Figma design.

```tsx
<AlertBanner variant='information' width='inline'>
  Information
</AlertBanner>
```
