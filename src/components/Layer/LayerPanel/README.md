# Layer Panel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/layers-layerpanel--docs)

## Import

```js
import { LayerPanel } from 'wri-design-systems'
```

## Usage

Check [LayerGroup](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup) from more

```js
// import a LayerGroup for each tab
import LayerGroup1 from './LayerGroup1'
import LayerGroup2 from './LayerGroup2'
import LayerGroup3 from './LayerGroup3'
```

```js
const defaultActiveTabLabel = 'Label 1'
...

// control the state for the selected tab
const [tabSelected, setTabSelected] = useState(defaultActiveTabLabel)
```

```html
<LayerPanel
  title='Title and more'
  description='Lorem ipsum dolor'
  tabBarVariant='panel'
  buttonTabs={[
    { label: 'Label 1' },
    { label: 'Label 2' },
    { label: 'Label 3' },
  ]}
  defaultActiveTabLabel={defaultActiveTabLabel}
  onTabClick={setTabSelected}
>
  {tabSelected === 'Label 1' ? <LayerGroup1 /> : null}
  {tabSelected === 'Label 2' ? <LayerGroup2 /> : null}
  {tabSelected === 'Label 3' ? <LayerGroup3 /> : null}
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
  defaultActiveTabLabel?: string
  onTabClick?: (tabLabel: string) => void
  children: React.ReactNode // LayerGroups
}
```
