# NavigationRail

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-navigation-rail--docs)

[NavigationRailDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/NavigationRail/NavigationRailDemo.tsx)

## Import

```js
import { NavigationRail } from '@worldresources/wri-design-systems'
```

## Usage

```html
  <NavigationRail
    tabs={[
      {
        label: 'Label 1',
        value: 'label-1',
      },
      {
        label: 'Label 2',
        value: 'label-2',
      },
      {
        label: 'Label 3',
        value: 'label-3',
      },
    ]}
  />
```

## Props

```ts
type NavigationRailProps = {
  tabs: NavigationRailTabProps[]
  defaultValue?: string
  onTabClick?: (selectedValue: string) => void
  children?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}
```

## Default Tab Selected

```html
  <NavigationRail
    defaultValue='label-2'
    tabs={[
      {
        label: 'Label 1',
        value: 'label-1',
      },
      {
        label: 'Label 2',
        value: 'label-2',
      },
      {
        label: 'Label 3',
        value: 'label-3',
      },
    ]}
  />
```

## With Icons

```html
  <NavigationRail
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
  />
```

## With Open/Close Action

```html
  <NavigationRail
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
    <div>Children</div>
  </NavigationRail>
```
