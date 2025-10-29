# Mobile Tab Bar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-mobile-tab-bar--docs)

[MobileTabBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/MobileTabBar/MobileTabBarDemo.tsx)

## Import

```tsx
import { MobileTabBar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MobileTabBar
  tabs={[
    { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
    { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
    {
      label: 'Three',
      value: 'three',
      icon: <PlaceholderIcon />,
      bagdeCount: 3,
    },
    {
      label: 'Four',
      value: 'four',
      icon: <PlaceholderIcon />,
      disabled: true,
    },
    {
      label: 'Five',
      value: 'five',
      icon: <PlaceholderIcon />,
      hideLabel: true,
    },
  ]}
  onTabClick={console.log}
/>
```

## Props

```ts
type MobileTabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon: React.ReactNode
  bagdeCount?: number
  disabled?: boolean
  ref?: Ref<HTMLButtonElement>
  hideLabel?: boolean
}

type MobileTabBarProps = {
  defaultValue?: string
  tabs: MobileTabBarItemProps[]
  onTabClick?: (tabValue: string) => void
}
```
