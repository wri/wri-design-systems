# CloseButton

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-close-button--docs)

[CloseButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Actions/CloseButton/CloseButtonDemo.tsx)

## Import

```tsx
import { CloseButton } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<CloseButton />
```

## Props

| Prop         | Type                         | Default | Description                                                                |
| ------------ | ---------------------------- | ------- | -------------------------------------------------------------------------- |
| `aria-label` | `string`                     | —       | Accessible name for the button; falls back to the close label when omitted |
| `disabled`   | `boolean`                    | —       | Disables the button                                                        |
| `labels`     | `Partial<CloseButtonLabels>` | —       | Override internal UI labels for internationalization support               |

### Supporting types

```ts
type CloseButtonLabels = {
  /** Fallback aria-label when none is provided via props. Default: "Close" */
  closeLabel: string
}
```

## Default

```tsx
<CloseButton />
```

## Disabled

```tsx
<CloseButton disabled />
```
