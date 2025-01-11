# QualitativeLegend

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-qualitative-attributes--docs)

[QualitativeLegendDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Legend/QualitativeLegend/QualitativeLegendDemo.tsx)

## Import

```js
import { QualitativeLegend } from '@worldresources/wri-design-systems'
```

## Usage

```html
<QualitativeLegend
  type="raster"
  label="Attribute"
  caption="Caption"
  color="#238B45"
  onActionClick="{()"
  =""
>
  console.log('click')} showActionButton /></QualitativeLegend
>
```

## Props

```ts
type QualitativeLegendProps = {
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
<QualitativeLegend
  type="raster"
  label="Attribute"
  caption="Caption"
  color="#238B45"
  onActionClick="{()"
  =""
>
  console.log('click')} showActionButton /></QualitativeLegend
>
```

## Line

```html
<QualitativeLegend
  type="line"
  label="Attribute"
  caption="Caption"
  color="#238B45"
  onActionClick="{()"
  =""
>
  console.log('click')} showActionButton /></QualitativeLegend
>
```

## Point

```html
<QualitativeLegend
  type='point'
  label='Attribute'
  caption='Caption'
  color='#238B45'
  pointIcon: <InfoIcon />,
  onActionClick={() => console.log('click')}
  showActionButton
/>
```
