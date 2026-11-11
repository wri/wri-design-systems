# NavigationRail

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-navigation-rail-navigation-rail--docs)

[NavigationRailDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/NavigationRail/NavigationRailDemo.tsx)

## Import

```tsx
import { NavigationRail } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
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

### NavigationRail

| Prop           | Type                              | Default         | Description                                                                       |
| -------------- | --------------------------------- | --------------- | --------------------------------------------------------------------------------- |
| `children`     | `React.ReactNode`                 | —               | Sidebar content rendered next to the rail, collapsible via the show/hide toggle   |
| `defaultValue` | `string`                          | `tabs[0].value` | Initially selected tab value                                                      |
| `labels`       | `Partial<NavigationRailLabels>`   | —               | Override internal UI labels for internationalization support                      |
| `onOpenChange` | `(open: boolean) => void`         | —               | Called when the sidebar visibility changes, with true when the sidebar is visible |
| `onTabClick`   | `(selectedValue: string) => void` | —               | Called with the selected tab value when a tab is clicked                          |
| `tabs`         | `NavigationRailTabProps[]`        | `[]`            | Tab items rendered in the rail                                                    |

### NavigationRailTab

| Prop         | Type              | Default | Description                                 |
| ------------ | ----------------- | ------- | ------------------------------------------- |
| `aria-label` | `string`          | `label` | Accessible name for the tab                 |
| `disabled`   | `boolean`         | —       | Disables the tab when true                  |
| `icon`       | `React.ReactNode` | —       | Optional icon node rendered above the label |
| `label`      | `string`          | —       | Visible label text shown under the icon     |
| `value`      | `string`          | —       | Unique value identifying the tab            |

### Supporting types

```ts
type NavigationRailLabels = {
  /** Visible toggle button text when sidebar is hidden. Default: "Show" */
  showLabel: ReactNodeLabel
  /** Visible toggle button text when sidebar is visible. Default: "Hide" */
  hideLabel: ReactNodeLabel
  /** Visible sidebar text label. Default: "Sidebar" */
  sidebarLabel: ReactNodeLabel
}
```

- `NavigationRailTabProps` also inherits `ChakraTabs.TriggerProps` (except `asChild`)

## Default Tab Selected

```tsx
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

```tsx
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

```tsx
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

## Custom Height

```tsx
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
