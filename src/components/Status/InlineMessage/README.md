# InlineMessage

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-inline-message--docs)

[InlineMessageDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/InlineMessage/InlineMessageDemo.tsx)

## Import

```tsx
import { InlineMessage } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<InlineMessage label='Label' caption='caption' variant='info-white'>
  <Button label='Label' />
</InlineMessage>
```

## Props

| Prop                  | Type                                                                  | Default                                   | Description                                                                                          |
| --------------------- | --------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `caption`             | `React.ReactNode`                                                     | —                                         | Secondary message text rendered under the label                                                      |
| `children`            | `React.ReactNode`                                                     | —                                         | Arbitrary content rendered inside the message (e.g. actions, links, custom markup)                   |
| `icon`                | `React.ReactNode`                                                     | `<InfoIcon height='1rem' width='1rem' />` | Icon rendered before the label                                                                       |
| `isContentRight`      | `boolean`                                                             | `false`                                   | Whether the message content is aligned to the right of the message.                                  |
| `label`               | `React.ReactNode`                                                     | —                                         | Primary message text                                                                                 |
| `labels`              | `Partial<InlineMessageLabels>`                                        | —                                         | Override internal UI labels for internationalization support                                         |
| `size`                | `InlineMessageSize`                                                   | `'large'`                                 | Message size and width                                                                               |
| `variant`             | `'info-white' \| 'info-grey' \| 'success' \| 'warning' \| 'error'`    | —                                         | Color scheme of the message                                                                          |
| `actionButtonVariant` | `'primary' \| 'secondary' \| 'borderless' \| 'outline' \| 'negative'` | `'secondary'`                             | @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set               |
| `actionLabel`         | `string`                                                              | —                                         | @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set               |
| `buttonLeftIcon`      | `React.ReactNode`                                                     | —                                         | @deprecated Use `children` with a `<Button leftIcon={…} />` instead. Ignored when `children` is set  |
| `buttonRightIcon`     | `React.ReactNode`                                                     | —                                         | @deprecated Use `children` with a `<Button rightIcon={…} />` instead. Ignored when `children` is set |
| `isButtonRight`       | `boolean`                                                             | —                                         | @deprecated Use `isContentRight` instead. Ignored when `isContentRight` is set                       |
| `onActionClick`       | `() => void`                                                          | —                                         | @deprecated Use `children` with a `<Button />` instead. Ignored when `children` is set               |

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
<InlineMessage label='Label' caption='caption' variant='info-white' />
```

## Info Grey

```tsx
<InlineMessage label='Label' caption='caption' variant='info-grey' />
```

## Success

```tsx
<InlineMessage label='Label' caption='caption' variant='success' />
```

## Warning

```tsx
<InlineMessage label='Label' caption='caption' variant='warning' />
```

## Error

```tsx
<InlineMessage label='Label' caption='caption' variant='error' />
```

## With Children

Any content can be rendered inside the message — compose a `Button` for actions:

```tsx
import { Button, InlineMessage } from '@worldresources/wri-design-systems'
;<InlineMessage label='Label' caption='caption' variant='info-white'>
  <Button label='Label' onClick={() => {}} />
</InlineMessage>
```

## Content Right

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  isContentRight
>
  <Button label='Label' onClick={() => {}} />
</InlineMessage>
```

## Small

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  size='small'
/>
```

## Small Full Width

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  size='small-full-width'
/>
```

## Small Content Right

```tsx
<InlineMessage
  label='Label'
  caption='caption'
  variant='info-white'
  size='small'
  isContentRight
>
  <Button label='Label' size='small' onClick={() => {}} />
</InlineMessage>
```
