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
type OpacityControlLabels = {
  /** Button.label prop — must be string. Default: "Opacity" */
  opacityButtonLabel: string
  /**
   * Visible heading in the popover.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Opacity"
   */
  opacityHeading: ReactNodeLabel
  /** aria-label on the slider/input. Default: "Opacity" */
  opacityAriaLabel: string
  /**
   * Visible "%" suffix next to the value.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "%"
   */
  percentSuffix: ReactNodeLabel
}

type OpacityControlProps = {
  defaultValue: number
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
