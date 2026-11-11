# Tag

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-tag--docs)

[TagDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Tag/TagDemo.tsx)

## Import

```tsx
import { Tag } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Tag label='Default' variant='info-white' icon={<InfoIcon />} closable />
```

## Props

| Prop              | Type                                                               | Default     | Description                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`       | `string`                                                           | —           | Optional accessible name used when the label is not plain text                                                                                                                                      |
| `backgroundColor` | `string`                                                           | —           | Optional custom background color, overriding the variant background. Only valid CSS colors are applied (hex, named colors, color functions); any other value is ignored to prevent CSS injection    |
| `borderColor`     | `string`                                                           | —           | Optional custom border color; when set, the border renders on any size. Only valid CSS colors are applied (hex, named colors, color functions); any other value is ignored to prevent CSS injection |
| `closable`        | `boolean`                                                          | —           | Renders a close button. Hidden when disabled or size small                                                                                                                                          |
| `closeIconColor`  | `string`                                                           | —           | Optional custom color for the close icon, overriding the default. Only valid CSS colors are applied (hex, named colors, color functions); any other value is ignored to prevent CSS injection       |
| `disabled`        | `boolean`                                                          | —           | Disables the tag and applies disabled styles. Also hides the close button                                                                                                                           |
| `icon`            | `React.ReactNode`                                                  | —           | Icon rendered inside the tag                                                                                                                                                                        |
| `iconPosition`    | `'start' \| 'end'`                                                 | `'start'`   | Whether the icon renders before (start) or after (end) the label                                                                                                                                    |
| `label`           | `React.ReactNode`                                                  | —           | Label content of the tag. Can be plain text or a React node                                                                                                                                         |
| `labels`          | `Partial<TagLabels>`                                               | —           | Override internal UI labels for internationalization support                                                                                                                                        |
| `onClose`         | `() => void`                                                       | —           | Called when the close trigger is activated                                                                                                                                                          |
| `size`            | `'small' \| 'default' \| 'large'`                                  | `'default'` | Size of the tag                                                                                                                                                                                     |
| `variant`         | `'info-white' \| 'info-grey' \| 'success' \| 'warning' \| 'error'` | —           | Visual style of the tag                                                                                                                                                                             |

### Supporting types

```ts
/** Labels for Tag internal UI strings. Override any key to provide translations */
type TagLabels = {
  /** aria-label builder for the close trigger. Default: (label) => `${label} tag close button` */
  closeButtonAriaLabel: (label: string) => string
}
```

## Info White

```tsx
<Tag label='Label' variant='info-white' />
```

## Info Grey

```tsx
<Tag label='Label' variant='info-grey' />
```

## Success

```tsx
<Tag label='Label' variant='success' />
```

## Warning

```tsx
<Tag label='Label' variant='warning' />
```

## Error

```tsx
<Tag label='Label' variant='error' />
```

## Small Size

```tsx
<Tag label='Label' size='small' variant='info-grey' />
```

## Large Size

```tsx
<Tag label='Label' size='large' variant='info-grey' />
```

## With Icon

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} />
```

## Icon On The Right

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} iconPosition='end' />
```

## Custom Background Color

```tsx
<Tag label='Label' variant='info-grey' backgroundColor='#7B61FF' />
```

## Close Icon Color

When `closeIconColor` is set, it overrides the close icon's original color.

```tsx
<Tag label='Label' variant='info-grey' closable closeIconColor='#FF0000' />
```

## Custom Border Color

```tsx
<Tag label='Label' variant='info-grey' borderColor='#7B61FF' />
```

## Node Label

```tsx
<Tag
  ariaLabel='Status: active'
  label={<strong>Status</strong>}
  variant='success'
/>
```

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable />
```

## Closable

```tsx
<Tag label='Label' variant='info-grey' icon={<InfoIcon />} closable disabled />
```

## Internationalization (i18n)

```tsx
<Tag
  label='Etiqueta'
  variant='info-grey'
  closable
  labels={{
    closeButtonAriaLabel: (label) => `Cerrar etiqueta ${label}`,
  }}
/>
```
