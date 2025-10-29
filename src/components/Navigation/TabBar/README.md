# TabBar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-tab-bar--docs)

[TabBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/TabBar/TabBarDemo.tsx)

## Import

```tsx
import { TabBar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
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
type TabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

type TabBarProps = {
  variant?: 'panel' | 'view'
  defaultValue?: string
  tabs: TabBarItemProps[]
  onTabClick?: (tabValue: string) => void
}
```

## View Variant

```tsx
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

```tsx
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

```tsx
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

```tsx
<TabBar
  variant='panel'
  tabs={[
    { label: 'One', value: 'one', icon: <CheckIcon /> },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
/>
```
