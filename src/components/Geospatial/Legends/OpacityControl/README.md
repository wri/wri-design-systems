# Opacity Control

Slider control for adjusting a map layer's opacity. Used inside the Layer Panel or Legend Panel alongside layer items. The value ranges from 0 (fully transparent) to 100 (fully opaque).

## Import

```tsx
import { OpacityControl } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<OpacityControl
  defaultValue={100}
  onOpacityChanged={(value) => console.log(value)}
/>
```

## Props

```ts
type OpacityControlProps = {
  /** Initial opacity value (0–100). */
  defaultValue: number
  /** Callback fired when the opacity value changes. */
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<OpacityControlLabels>
}
```

## i18n labels

Pass a partial `labels` object to override the default English strings:

```tsx
<OpacityControl
  defaultValue={80}
  onOpacityChanged={setOpacity}
  labels={{ opacity: 'Opacidad' }}
/>
```
