# LegendItem

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-legend-item--docs)

[LegendItemDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/LegendItem/LegendItemDemo.tsx)

## Import

```js
import {
  LegendItem,
  InlineMessage,
  LayerParameters,
  LegendItem,
  QualitativeAttribute,
  ScaleBar,
} from '@worldresources/wri-design-systems'
```

## Usage

```html
<LegendItem
  layerName='Layer Name'
  dataUnit='Data Unit'
  onDrag={() => console.log('drag')}
  onUpClick={() => console.log('up')}
  onDownClick={() => console.log('down')}
  onRemoveClick={() => console.log('remove')}
  onInfoClick={() => console.log('info')}
  onOpacityChanged={(value) => console.log('opacity changed', value)}
>
  <ScaleBar
    colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
    values={['0%', '25%', '50%', '75%', '100%']}
  />
  <QualitativeAttribute
    type='raster'
    label='Attribute'
    caption='Caption'
    color='#238B45'
    onActionClick={() => console.log('click')}
    showActionButton
  />
  <QualitativeAttribute
    type='raster'
    label='Attribute'
    caption='Caption'
    color='#238B45'
  />
  <InlineMessage
    label='Label'
    caption='caption'
    variant='info-white'
    actionLabel='Label'
    size='small'
  />
  <LayerParameters label='Adjust layer parameters'>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
  </LayerParameters>
</LegendItem>
```

## Props

```ts
type LegendItemProps = {
  layerName: string
  dataUnit: string
  onDrag: VoidFunction
  onUpClick: VoidFunction
  onDownClick: VoidFunction
  onRemoveClick: VoidFunction
  children: React.ReactNode
  onInfoClick: VoidFunction
  onOpacityChanged: (value: number) => void
}
```
