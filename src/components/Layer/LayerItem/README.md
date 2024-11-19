# Layer Item

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/layers-layeritem--docs)

[LayerItemDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Layer/LayerItem/LayerItemDemo.tsx)

## Usage

LayerItem is used as part of [LayerGroups](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup)

## Props

```ts
type LayerItemProps = {
  name: string
  label: string
  caption?: string
  showInfoButton?: boolean
  infoButtonLabel?: string
  variant?: 'switch' | 'radio'
  disabled?: boolean
  onInfoClick?: () => void
  isDefaultSelected?: boolean
  onChange?: (name: string, checked: boolean) => void
}
```
