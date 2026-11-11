# Layer Item

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-layers-layer-item--docs)

[LayerItemDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Layers/LayerItem/LayerItemDemo.tsx)

## Import

```tsx
import { LayerItem } from '@worldresources/wri-design-systems'
```

## Usage

LayerItem is used as part of [LayerGroups](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerGroup)

## Props

| Prop                | Type                                                               | Default                 | Description                                                                |
| ------------------- | ------------------------------------------------------------------ | ----------------------- | -------------------------------------------------------------------------- |
| `caption`           | `string`                                                           | `—`                     | Optional description shown under the layer label                           |
| `disabled`          | `boolean`                                                          | `—`                     | Disables the layer control and info button                                 |
| `infoButtonLabel`   | `string`                                                           | `labels.aboutDataLabel` | Custom label for the info button                                           |
| `isDefaultSelected` | `boolean`                                                          | `false`                 | Selects the layer by default on first render                               |
| `label`             | `string`                                                           | `—`                     | Display name of the layer                                                  |
| `labels`            | `Partial<LayerItemLabels>`                                         | `—`                     | Override internal UI labels for internationalization support               |
| `name`              | `string`                                                           | `—`                     | Unique name identifying the layer, used as the Switch name or Radio value  |
| `onChange`          | `(name: string, checked: boolean, selectedValue?: string) => void` | `—`                     | Called with the layer name and new checked state when the control changes  |
| `onInfoClick`       | `() => void`                                                       | `—`                     | Called when the info button is clicked                                     |
| `showInfoButton`    | `boolean`                                                          | `true`                  | Shows the info button below the layer                                      |
| `variant`           | `'switch' \| 'radio'`                                              | `'switch'`              | Control rendered for the layer; switch shows a Switch, radio shows a Radio |

### Supporting types

```ts
type LayerItemLabels = {
  /** Label on the info button. Default: "About data" */
  aboutDataLabel: string
}
```
