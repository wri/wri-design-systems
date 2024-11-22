# TabBar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/tabbar--docs)

[TabBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/TabBar/TabBarDemo.tsx)

## Import

```js
import { TabBar } from 'wri-design-systems'
```

## Usage

```html
<TabBar
  variant='panel'
  tabs={[
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
/>
```

## Props

```ts
type TabBarProps = {
  variant: 'panel' | 'view'
  defaultValue?: string
  tabs: TabBarItemProps[]
  onTabClick?: (tabLabel: string) => void
}
```

## View Variant

```html
<TabBar
  variant='view'
  tabs={[
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
/>
```

## Default Tab Active

```html
<TabBar
  variant='panel'
  defaultValue='two'
  tabs={[
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
/>
```

## Disabled

```html
<TabBar
  variant='panel'
  tabs={[
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two', disabled: true },
    { label: 'Three', value: 'three' },
  ]}
/>
```

## With Icons

```html
<TabBar
  variant='panel'
  tabs={[
    { label: 'One', value: 'one', icon: <CheckIcon /> },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
/>
```
