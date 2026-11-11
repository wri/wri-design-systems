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

### TabBar

| Prop             | Type                                 | Default         | Description                                              |
| ---------------- | ------------------------------------ | --------------- | -------------------------------------------------------- |
| `activationMode` | `'automatic' \| 'manual'`            | `'manual'`      | Tab activation mode                                      |
| `defaultValue`   | `string`                             | `tabs[0].value` | Initially selected tab value                             |
| `onTabClick`     | `(tabValue: string) => void`         | —               | Called with the selected tab value when a tab is clicked |
| `tabs`           | `TabBarItemProps[]`                  | —               | Tab items to render                                      |
| `variant`        | `'panel' \| 'view' \| 'transparent'` | `'panel'`       | Visual style of the tab bar                              |

### TabBarItem

| Prop         | Type                     | Default     | Description                                  |
| ------------ | ------------------------ | ----------- | -------------------------------------------- |
| `aria-label` | `string`                 | `the label` | Accessible name for the tab                  |
| `disabled`   | `boolean`                | —           | Disables the tab when true                   |
| `icon`       | `React.ReactNode`        | —           | Optional icon node rendered before the label |
| `label`      | `string`                 | —           | Visible label text rendered inside the tab   |
| `ref`        | `Ref<HTMLButtonElement>` | —           | Ref forwarded to the tab trigger button      |
| `value`      | `string`                 | —           | Unique value identifying the tab             |

### Supporting types

- `TabBarItemProps` also inherits `ChakraTabs.TriggerProps` (except `asChild`)

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

## Automatic Activation Mode

```tsx
<TabBar
  variant='panel'
  tabs={[
    { label: 'One', value: 'one', icon: <CheckIcon /> },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]}
  activationMode='automatic'
/>
```

## Transparent

```tsx
<TabBar
  variant='transparent'
  tabs={[
    { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
    { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
    { label: 'Three', value: 'three', icon: <PlaceholderIcon /> },
  ]}
/>
```
