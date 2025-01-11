# InlineMessage

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-inline-message--docs)

[InlineMessageDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/InlineMessage/InlineMessageDemo.tsx)

## Import

```js
import { InlineMessage } from '@worldresources/wri-design-systems'
```

## Usage

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-white"
  actionLabel="Label"
/>
```

## Props

```ts
type InlineMessageProps = {
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
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-white"
  actionLabel="Label"
/>
```

## Info Grey

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-grey"
  actionLabel="Label"
/>
```

## Success

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="success"
  actionLabel="Label"
/>
```

## Warning

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="warning"
  actionLabel="Label"
/>
```

## Error

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="error"
  actionLabel="Label"
/>
```

## Button Right

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-white"
  actionLabel="Label"
  isButtonRight
/>
```

## Small

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-white"
  actionLabel="Label"
  size="small"
/>
```

## Small Button Right

```html
<InlineMessage
  label="Label"
  caption="caption"
  variant="info-white"
  actionLabel="Label"
  isButtonRight
  size="small"
/>
```
