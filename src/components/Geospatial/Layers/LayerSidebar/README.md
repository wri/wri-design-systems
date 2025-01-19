# Layer Sidebar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-layers-layer-sidebar--docs)

[LayerSidebarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Layers/LayerSidebar/Demo.tsx)

Check [NavigationRail](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/NavigationRail) props for more.

## Import

```tsx
import { NavigationRail } from '@worldresources/wri-design-systems'
```

## Usage

```css
/* Suggested css */
.app-container {
  margin-left: 364px;
  transition: margin-left 0.1s;
  padding: 20px;
}

.app-container.sidebar-closed {
  margin-left: 64px;
  transition: margin-left 0.1s;
}
```

```tsx
import LayerPanelDemo from '..'
import LayerPanelDemo2 from '..'
import LayerPanelDemo3 from '..'

const defaultTabValue = 'label-1'

...

const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)

const handleOnTabClick = (selectedValue: string) => {
  setSelectedTabValue(selectedValue)
}

// Suggested css update
const handleOnOpenChange = (open: boolean) => {
  const $container = document.querySelector('.app-container')
  if ($container) {
    $container?.setAttribute(
      'class',
      open ? 'app-container' : 'app-container sidebar-closed',
    )
  }
}
```

```tsx
<NavigationRail
  defaultValue={defaultTabValue}
  onTabClick={handleOnTabClick}
  onOpenChange={handleOnOpenChange}
  tabs={[
    {
      label: 'Label 1',
      value: 'label-1',
      icon: <CheckIcon />,
    },
    {
      label: 'Label 2',
      value: 'label-2',
      icon: <CheckIcon />,
    },
    {
      label: 'Label 3',
      value: 'label-3',
      icon: <CheckIcon />,
    },
  ]}
>
  {selectedTabValue === 'label-1' ? <LayerPanelDemo /> : null}
  {selectedTabValue === 'label-2' ? <LayerPanelDemo2 /> : null}
  {selectedTabValue === 'label-3' ? <LayerPanelDemo3 /> : null}
</NavigationRail>
```
