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
  type: 'info',
  placement: 'bottom-end',
  duration: 10000,
  icon: <CheckIcon />,
  action: {
    label: 'Action',
    onClick: () => console.log('Action'),
  },
  closable: true,
  closableLabel: 'Dismiss',
})
```

## Props

```ts
type ToastProps = {
  label: string
  caption?: React.ReactNode
  type: 'success' | 'warning' | 'error' | 'info' | 'loading'
  placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  duration?: number
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  closable?: boolean
  closableLabel?: string
}
```

## Info

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'info',
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

## Closable

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  closable: true,
})
```

## Closable Label

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
  closable: true,
  closableLabel: 'Dismiss',
})
```

## With Action

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

### Bottom End

```tsx
showToast({
  label: 'Label',
  caption: 'Caption',
  type: 'success',
  placement: 'bottom-end',
})
```
