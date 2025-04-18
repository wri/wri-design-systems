# Menu

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/overlays-menu--docs)

[MenuDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Overlays/Menu/MenuDemo.tsx)

## Import

```tsx
import { Menu } from '@worldresources/wri-design-systems'
```

## Props

```ts
type MenuItemProps = {
  label?: string
  caption?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  command?: string
  children?: React.ReactNode
  value: string
  disabled?: boolean
  submenu?: MenuItemProps[]
}

type MenuProps = {
  label: string
  items?: MenuItemProps[]
  groups?: {
    title: string
    items: MenuItemProps[]
  }[]
  onSelect?: (value: string) => void
}
```

## Usage

### Menu

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      value: 'label-1-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      value: 'label-1-2',
    },
  ]}
  onSelect={(value) => console.log('onSelect', value)}
/>
```

### Commands

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      command: '⌘E',
      value: 'value-2-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      command: '⌘E',
      value: 'value-2-2',
    },
  ]}
/>
```

### WithIcons

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      startIcon: <PlaceholderIcon />,
      value: 'value-3-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      startIcon: <PlaceholderIcon />,
      value: 'value-3-2',
    },
    {
      label: 'Label',
      caption: 'Caption',
      endIcon: <PlaceholderIcon />,
      value: 'value-3-3',
    },
  ]}
/>
```

### WithGroups

```tsx
<Menu
  label='Open Menu'
  groups={[
    {
      title: 'Group 1',
      items: [
        {
          label: 'Label',
          value: 'value-4-1',
        },
        {
          label: 'Label',
          value: 'value-4-2',
        },
      ],
    },
    {
      title: 'Group 2',
      items: [
        {
          label: 'Label',
          value: 'value-4-3',
        },
        {
          label: 'Label',
          value: 'value-4-4',
        },
        {
          label: 'Label',
          value: 'value-4-5',
        },
      ],
    },
  ]}
/>
```

### WithSubmenu

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      value: 'label-5-1',
    },
    {
      label: 'Label',
      value: 'value-5-2',
      submenu: [
        {
          label: 'Label',
          value: 'value-5-2-1',
        },
        {
          label: 'Label',
          caption: 'Caption',
          value: 'value-5-2-2',
        },
      ],
    },
  ]}
/>
```
