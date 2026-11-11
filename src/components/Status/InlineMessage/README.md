# InlineMessage

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-inline-message--docs)

[InlineMessageDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/InlineMessage/InlineMessageDemo.tsx)

## Import

```tsx
import { InlineMessage } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
/>
```

## Props

| Prop                  | Type                                                                  | Default                                   | Description                                                     |
| --------------------- | --------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------- |
| `actionButtonVariant` | `'primary' \| 'secondary' \| 'borderless' \| 'outline' \| 'negative'` | `'secondary'`                             | Variant of the action button                                    |
| `actionLabel`         | `string`                                                              | —                                         | Text of the optional action button; renders the button when set |
| `buttonLeftIcon`      | `React.ReactNode`                                                     | —                                         | Icon rendered before the action button label                    |
| `buttonRightIcon`     | `React.ReactNode`                                                     | —                                         | Icon rendered after the action button label                     |
| `caption`             | `React.ReactNode`                                                     | —                                         | Secondary message text rendered under the label                 |
| `icon`                | `React.ReactNode`                                                     | `<InfoIcon height='1rem' width='1rem' />` | Icon rendered before the label                                  |
| `isButtonRight`       | `boolean`                                                             | —                                         | Whether the action button sits to the right of the message      |
| `label`               | `React.ReactNode`                                                     | —                                         | Primary message text                                            |
| `labels`              | `Partial<InlineMessageLabels>`                                        | —                                         | Override internal UI labels for internationalization support    |
| `onActionClick`       | `() => void`                                                          | —                                         | Called when the action button is clicked                        |
| `size`                | `InlineMessageSize`                                                   | `'large'`                                 | Message size and width                                          |
| `variant`             | `'info-white' \| 'info-grey' \| 'success' \| 'warning' \| 'error'`    | —                                         | Color scheme of the message                                     |

### Supporting types

```ts
type InlineMessageLabels = {
  /** aria-roledescription on the root element. Default: "Note" */
  roleDescription: string
}

type InlineMessageSize = 'small' | 'large' | 'full-width' | 'small-full-width'
```

## Info White

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
/>
```

## Info Grey

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-grey'
  actionLabel='Label'
/>
```

## Success

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='success'
  actionLabel='Label'
/>
```

## Warning

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='warning'
  actionLabel='Label'
/>
```

## Error

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='error'
  actionLabel='Label'
/>
```

## Button Right

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  isButtonRight
/>
```

## Small

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  size='small'
/>
```

## Small Full Width

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  size='small-full-width'
/>
```

## Small Button Right

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  actionLabel='Label'
  isButtonRight
  size='small'
/>
```
