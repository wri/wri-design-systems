# ScaleBar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-scale-bar--docs)

[ScaleBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/ScaleBar/ScaleBarDemo.tsx)

## Import

```tsx
import { ScaleBar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<ScaleBar
  colors={['#E5F5F9', '#2CA25F']}
  values={['Low', 'Medium', 'High']}
  subLabels={['<100K', '>600K']}
/>
```

## Props

```ts
type ScaleBarProps = {
  colors: string[]
  values: string[]
  subLabels?: string[]
  isGradient?: boolean
}
```

## Gradient

```tsx
<ScaleBar
  colors={['#E5F5F9', '#2CA25F']}
  values={['Low', 'Medium', 'High']}
  subLabels={['<100K', '>600K']}
  isGradient
/>
```

## Sequential

```tsx
<ScaleBar
  colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
  values={['0%', '25%', '50%', '75%', '100%']}
/>
```

## Diverging

```tsx
<ScaleBar
  colors={['#A6611A', '#DFC27D', '#F5F5F5', '#80CDC1', '#018571']}
  values={['0%', '25%', '50%', '75%', '100%']}
/>
```

## WithSubLabels

```tsx
<ScaleBar
  colors={['#A6611A', '#DFC27D', '#F5F5F5', '#80CDC1', '#018571']}
  values={['Low', 'Low-medium', 'Medium-high', 'High', 'Extremely high']}
  subLabels={[
    '(0 to 9 in 1,000,000)',
    '(9 in 1,000,000 to 7 in 100,000)',
    '(7 in 100,000 to 3 in 10,000)',
    '(3 in 10,000 to 2 in 1,000)',
    '(more than 2 in 1,000)',
  ]}
/>
```
