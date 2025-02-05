# Layer Panel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-layers-layer-panel--docs)

[LayerPanelDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Layers/LayerPanel/LayerPanelDemo.tsx)

## Import

```tsx
import { LayerPanel } from '@worldresources/wri-design-systems'
```

## Usage

Check [LayerGroup](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerGroup) from more

```tsx
// import a LayerGroup for each tab
import LayerGroup1 from './LayerGroup1'
import LayerGroup2 from './LayerGroup2'
import LayerGroup3 from './LayerGroup3'
```

```tsx
const defaultTabValue = 'label-1'
...

// control the state for the selected tab
const [tabSelected, setTabSelected] = useState(defaultTabValue)
```

```tsx
<LayerPanel
  title='Title and more'
  description='Lorem ipsum dolor'
  tabBarVariant='panel'
  buttonTabs={[
    { label: 'Label 1', value: 'label-1' },
    { label: 'Label 2', value: 'label-2' },
    { label: 'Label 3', value: 'label-3' },
  ]}
  defaultValue={defaultTabValue}
  onTabClick={setTabSelected}
>
  {tabSelected === 'label-1' ? <LayerGroup1 /> : null}
  {tabSelected === 'label-2' ? <LayerGroup2 /> : null}
  {tabSelected === 'label-3' ? <LayerGroup3 /> : null}
</LayerPanel>
```

## Props

Check [TabBar](https://github.com/wri/wri-design-systems/tree/main/src/components/TabBar) props for more.

`children:` [LayerGroups](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup)

```ts
type LayerPanelProps = {
  title: string
  description: string
  tabBarVariant?: 'panel' | 'view' // according to TabBarProps variants
  buttonTabs?: TabBarItemProps[]
  defaultValue?: string
  onTabClick?: (tabLabel: string) => void
  children: React.ReactNode // LayerGroups
}
```
