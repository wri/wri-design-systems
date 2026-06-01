# LegendItem

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-legend-item--docs)

[LegendItemDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/LegendItem/LegendItemDemo.tsx)

## Import

```tsx
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

```tsx
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
type LegendItemLabels = {
  /** aria-label on the drag handle icon button. Default: "Drag and drop" */
  dragAndDropLabel: string
  /** aria-label on the move-up icon button. Default: "Up" */
  upLabel: string
  /** aria-label on the move-down icon button. Default: "Down" */
  downLabel: string
  /**
   * Visible text on the remove button.
   * Passed directly to Button.label (string).
   * Default: "Remove"
   */
  removeLabel: string
  /**
   * Visible text on the info/about-data button.
   * Passed directly to Button.label (string).
   * Default: "About data"
   */
  aboutDataLabel: string
}

type LegendItemProps = {
  layerName: string
  dataUnit: string
  onDrag?: VoidFunction
  onUpClick: VoidFunction
  onDownClick: VoidFunction
  onRemoveClick: VoidFunction
  children: React.ReactNode
  onInfoClick: VoidFunction
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LegendItemLabels>
}
```
