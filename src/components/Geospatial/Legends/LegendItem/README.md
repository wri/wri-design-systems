# LegendItem

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-legend-item--docs)

[LegendItemDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/LegendItem/LegendItemDemo.tsx)

## Import

```tsx
import {
  Button,
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
    variant='info-grey'
    size='small'
  >
    <Button label='Label' size='small' />
  </InlineMessage>
  <LayerParameters label='Adjust layer parameters'>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
  </LayerParameters>
</LegendItem>
```

## Props

| Prop               | Type                        | Default | Description                                                         |
| ------------------ | --------------------------- | ------- | ------------------------------------------------------------------- |
| `children`         | `React.ReactNode`           | `—`     | Legend content, such as ScaleBar or QualitativeAttribute components |
| `dataUnit`         | `string`                    | `—`     | Unit of the layer data shown under the layer name                   |
| `labels`           | `Partial<LegendItemLabels>` | `—`     | Override internal UI labels for internationalization support        |
| `layerName`        | `string`                    | `—`     | Name of the layer shown as the legend item title                    |
| `onDownClick`      | `VoidFunction`              | `—`     | Called when the move-down button is clicked                         |
| `onDrag`           | `VoidFunction`              | `—`     | Reserved for drag-and-drop reordering of the legend item            |
| `onInfoClick`      | `VoidFunction`              | `—`     | Called when the about-data button is clicked                        |
| `onOpacityChanged` | `(value: number) => void`   | `—`     | Called with the new opacity value when the opacity control changes  |
| `onRemoveClick`    | `VoidFunction`              | `—`     | Called when the remove button is clicked                            |
| `onUpClick`        | `VoidFunction`              | `—`     | Called when the move-up button is clicked                           |

### Supporting types

```ts
type VoidFunction = () => void

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
```
