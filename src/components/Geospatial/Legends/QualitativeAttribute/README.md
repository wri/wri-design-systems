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

```ts
type QualitativeAttributeProps = {
  type: 'raster' | 'line' | 'point'
  label: string
  caption?: string
  color: string
  showActionButton?: boolean
  onActionClick?: () => void
  pointIcon?: React.ReactNode
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
