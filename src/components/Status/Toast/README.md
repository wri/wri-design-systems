# Toast

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-toast--docs)

[ToastDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/Toast/ToastDemo.tsx)

## Import

```tsx
import { Toast, showToast } from '@worldresources/wri-design-systems'
```

## Usage

First, render the Toast component in your app.

```tsx
<Toast />
```

Then, create a toast by calling the showToast function.

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'general',
  placement: 'bottom-end',
  duration: 10000,
  icon: <CheckIcon />,
  action: {
    label: 'Action',
    onClick: () => console.log('Action'),
  },
  closable: true,
  onClose: () => console.log('Closed'),
})
```

## Props

### Toast

| Prop     | Type                   | Default | Description                                                  |
| -------- | ---------------------- | ------- | ------------------------------------------------------------ |
| `labels` | `Partial<ToastLabels>` | —       | Override internal UI labels for internationalization support |

### showToast

| Prop            | Type                                                                              | Default | Description                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`        | `{ label: string; onClick: () => void }`                                          | —       | Optional action button shown in the toast. When combined with `closable`, the dismiss button is rendered instead of the close button         |
| `ariaLabel`     | `string`                                                                          | —       | Accessible name of the toast. Provide it when `label` is not plain text                                                                      |
| `caption`       | `React.ReactNode`                                                                 | —       | Secondary toast text rendered under the label                                                                                                |
| `closable`      | `boolean`                                                                         | —       | Whether the toast can be dismissed. Renders the close (X) button, or the labelled borderless dismiss button when an `action` is also present |
| `closableLabel` | `string`                                                                          | —       | **Deprecated.** Overrides the dismiss button label and the close button accessible name                                                      |
| `duration`      | `number`                                                                          | `5000`  | How long the toast stays visible in milliseconds                                                                                             |
| `hideIcon`      | `boolean`                                                                         | `false` | Hides the icon entirely, including the default type icon                                                                                     |
| `icon`          | `React.ReactNode`                                                                 | —       | Custom icon replacing the default type icon                                                                                                  |
| `id`            | `string`                                                                          | —       | Optional ID for the toast, useful for programmatically closing it                                                                            |
| `label`         | `React.ReactNode`                                                                 | —       | Primary toast content. Set `ariaLabel` when it is not plain text                                                                             |
| `onClose`       | `() => void`                                                                      | —       | Called when the close or dismiss button is clicked                                                                                           |
| `placement`     | `'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end'` | —       | Screen position where the toast appears                                                                                                      |
| `type`          | `'success' \| 'warning' \| 'error' \| 'general' \| 'information' \| 'loading'`    | —       | Toast type controlling the icon and color scheme. The legacy `info` type is deprecated and maps to `general`                                 |
| `width`         | `string`                                                                          | —       | Custom width of the toast                                                                                                                    |

**Deprecated:** `maxWidth` — use `width` instead. `maxWidth` is still honoured for backwards compatibility.

### Supporting types

```ts
type ToastLabels = {
  /** aria-label on the close button and label of the dismiss button. Default: "Dismiss" */
  dismissLabel: string
}
```

## General

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'general',
  placement: 'bottom-end',
})
```

## Information

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'information',
  placement: 'bottom-end',
})
```

## Success

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
})
```

## Warning

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'warning',
  placement: 'bottom-end',
})
```

## Error

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'error',
  placement: 'bottom-end',
})
```

## Loading

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'loading',
  placement: 'bottom-end',
})
```

## Custom Duration - 10 Seconds

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  duration: 10000,
})
```

## Custom Icon

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  icon: <CheckIcon />,
})
```

## Hidden Icon

Hides the icon entirely, including the default type icon and any custom icon.

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  hideIcon: true,
})
```

## Closable

Shows the close (X) button.

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  closable: true,
})
```

## With Action

When an action and `closable` are combined, the action button is rendered
together with the borderless dismiss button instead of the close (X) button.

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  action: {
    label: 'Action',
    onClick: () => console.log('Action'),
  },
  closable: true,
})
```

## Accessible Name

Use `ariaLabel` when the label is not plain text.

```tsx
showToast({
  label: <strong>Label</strong>,
  ariaLabel: 'Label',
  type: 'general',
  placement: 'bottom-end',
})
```

## Placements

### Top Start

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'top-start',
})
```

### Top Center

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'top',
})
```

### Top End

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'top-end',
})
```

### Bottom Start

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-start',
})
```

### Bottom Center

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom',
})
```

### Bottom End

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
})
```

### OnClose

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  closable: true,
  onClose: () => console.log('Closed'),
})
```

### Custom Width

```tsx
showToast({
  label: 'Label',
  type: 'general',
  placement: 'bottom',
  width: '15.625rem', // 250px
})
```

### Manual Close

#### Close all toasts at once

```tsx
showToast({
  label: 'Label',
  type: 'loading',
  placement: 'bottom',
})

closeToast()
```

#### Close a specific toast

```tsx
showToast({
  id: 'toast-id',
  label: 'Label',
  type: 'loading',
  placement: 'bottom',
})

closeToast('toast-id')
```
