# Item Count

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-list--docs)

[ItemCountDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/List/ListDemo.tsx)

## Import

```tsx
import { List } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const items = [
    {
      id: 0,
      label: 'Username',
      value: 'John Doe',
      variant: 'data' as const,
      icon: <UserIcon />,
    },
    {
      id: 1,
      label: 'Connection Status',
      value: 'Active',
      variant: 'data' as const,
      icon: <InfoIcon />,
    },
    {
      id: 2,
      label: 'Account Settings',
      caption: 'Manage your profile and security',
      icon: <UserIcon />,
      variant: 'navigation' as const,
      onItemClick: () => alert('Navigating to Settings'),
    },
  ]

<List items={items} />

```

## Props

```ts
export interface ListItemProps {
  label: string
  caption?: string
  icon?: ReactElement
  value?: string
  variant?: ListItemVariant
  isExpanded?: boolean
  id?: string | number
  onItemClick?: () => void
  ariaLabel?: string
}

export interface ListProps {
  items: ListItemProps[]
}
```
