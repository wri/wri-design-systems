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
    },
  ]}
  onTabClick={console.log}
/>
```

## Props

### MobileTabBar

| Prop             | Type                          | Default         | Description                                                  |
| ---------------- | ----------------------------- | --------------- | ------------------------------------------------------------ |
| `activationMode` | `'automatic' \| 'manual'`     | `'manual'`      | Tab activation mode                                          |
| `defaultValue`   | `string`                      | `tabs[0].value` | Initially selected tab value                                 |
| `hideLabels`     | `boolean`                     | —               | Hides the tab labels, rendering icons only, when true        |
| `labels`         | `Partial<MobileTabBarLabels>` | —               | Override internal UI labels for internationalization support |
| `onTabClick`     | `(tabValue: string) => void`  | —               | Called with the selected tab value when a tab is clicked     |
| `tabs`           | `MobileTabBarItemProps[]`     | —               | Tab items to render                                          |

### MobileTabBarItem

| Prop               | Type                     | Default | Description                                                  |
| ------------------ | ------------------------ | ------- | ------------------------------------------------------------ |
| `aria-describedby` | `string`                 | —       | Extra describedby text, joined with the tab status region id |
| `aria-label`       | `string`                 | `label` | Accessible name for the tab                                  |
| `bagdeCount`       | `number`                 | —       | Optional count rendered as a badge on the icon               |
| `disabled`         | `boolean`                | —       | Disables the tab when true                                   |
| `icon`             | `React.ReactNode`        | —       | Icon node rendered above the label                           |
| `label`            | `string`                 | —       | Visible label text shown under the icon                      |
| `ref`              | `Ref<HTMLButtonElement>` | —       | Ref forwarded to the tab trigger button                      |
| `value`            | `string`                 | —       | Unique value identifying the tab                             |

### Supporting types

```ts
type MobileTabBarLabels = {
  tabPositionStatus: (index: number, total: number) => string
  selectedStatus: string
  notSelectedStatus: string
  disabledStatus: string
}
```

- `MobileTabBarItemProps` also inherits `ChakraTabs.TriggerProps` (except `asChild`)
