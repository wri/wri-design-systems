# QualitativeAttribute

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-qualitative-attributes--docs)

[QualitativeAttributeDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/QualitativeAttribute/QualitativeAttributeDemo.tsx)

## Import

```js
import { QualitativeAttribute } from '@worldresources/wri-design-systems'
```

## Usage

```html
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

```html
<QualitativeAttribute
  type="raster"
  label="Attribute"
  caption="Caption"
  color="#238B45"
  onActionClick={() => console.log('click')}
  showActionButton
/>
```

## Line

```html
<QualitativeAttribute
  type="line"
  label="Attribute"
  caption="Caption"
  color="#238B45"
  onActionClick={() => console.log('click')}
  showActionButton
/>
```

## Point

```html
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
