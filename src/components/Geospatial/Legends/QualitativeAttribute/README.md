# QualitativeAttribute

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-qualitative-attributes--docs)

[QualitativeAttributeDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/QualitativeAttribute/QualitativeAttributeDemo.tsx)

## Import

```tsx
import { QualitativeAttribute } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<QualitativeAttribute
  type='raster'
  label='Attribute'
  caption='Caption'
  color='#238B45'
  onActionClick={() => console.log('click')}
  showActionButton
/>
```

## Props

| Prop               | Type                                  | Default           | Description                                                                      |
| ------------------ | ------------------------------------- | ----------------- | -------------------------------------------------------------------------------- |
| `ariaLabelType`    | `string`                              | `''`              | Extra type text passed to the aria-label template                                |
| `caption`          | `string`                              | `—`               | Optional description shown under the label                                       |
| `color`            | `string`                              | `—`               | Color applied to the visual indicator                                            |
| `label`            | `string \| React.ReactNode`           | `—`               | Attribute name shown next to the indicator                                       |
| `labels`           | `Partial<QualitativeAttributeLabels>` | `—`               | Override internal UI labels for internationalization support                     |
| `onActionClick`    | `() => void`                          | `—`               | Called when the show/hide action button toggles visibility                       |
| `pointIcon`        | `React.ReactNode`                     | `PlaceholderIcon` | Custom icon rendered inside the point indicator                                  |
| `showActionButton` | `boolean`                             | `—`               | Shows the show/hide action button; requires onActionClick                        |
| `type`             | `'raster' \| 'line' \| 'point'`       | `—`               | Visual indicator style; raster shows a square, line a bar, point a circular icon |

### Supporting types

```ts
type ReactNodeLabel = ReactNode

type QualitativeAttributeLabels = {
  /**
   * Visible "Hide" button text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Hide"
   */
  hideLabel: ReactNodeLabel
  /**
   * Visible "Show" button text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Show"
   */
  showLabel: ReactNodeLabel
  /** "visible" — used inside aria-label. Default: "visible" */
  visibleText: string
  /** "hidden" — used inside aria-label. Default: "hidden" */
  hiddenText: string
  /** "line," — type prefix in aria-label. Default: "line," */
  linePrefix: string
  /** Full aria-label builder. Default fn provided. */
  currentlyTemplate: (
    label: string,
    caption: string | undefined,
    typeText: string,
    visibilityText: string,
  ) => string
}
```

## Raster

```tsx
<QualitativeAttribute
  type='raster'
  label='Attribute'
  caption='Caption'
  color='#238B45'
  onActionClick={() => console.log('click')}
  showActionButton
/>
```

## Line

```tsx
<QualitativeAttribute
  type='line'
  label='Attribute'
  caption='Caption'
  color='#238B45'
  onActionClick={() => console.log('click')}
  showActionButton
/>
```

## Point

```tsx
<QualitativeAttribute
  type='point'
  label='Attribute'
  caption='Caption'
  color='#238B45'
  pointIcon={<InfoIcon />}
  onActionClick={() => console.log('click')}
  showActionButton
/>
```
