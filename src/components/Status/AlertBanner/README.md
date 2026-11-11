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

| Prop         | Type                                                                                      | Default           | Description                                                  |
| ------------ | ----------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| `children`   | `React.ReactNode`                                                                         | —                 | Alert content                                                |
| `icon`       | `React.ReactElement`                                                                      | —                 | Custom icon; defaults to an icon matching the variant        |
| `isCentered` | `boolean`                                                                                 | `false`           | Whether to center the alert content                          |
| `labels`     | `Partial<AlertBannerLabels>`                                                              | —                 | Override internal UI labels for internationalization support |
| `onClose`    | `() => void`                                                                              | —                 | Called when the banner is closed; the banner hides itself    |
| `variant`    | `'general-white' \| 'general-grey' \| 'information' \| 'success' \| 'warning' \| 'error'` | `'general-white'` | Color scheme of the banner                                   |
| `width`      | `'full-width' \| 'inline'`                                                                | `'full-width'`    | Whether the banner spans the full width or fits its content  |

### Supporting types

```ts
type AlertBannerLabels = {
  /** aria-label on the close action button. Default: "Close alert" */
  closeAlertLabel: string
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
