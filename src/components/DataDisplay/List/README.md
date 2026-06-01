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
        id: 'data-1',
        label: 'Status',
        value: 'Active',
        variant: 'data' as const,
        icon: <MapIcon />,
      },
      {
        id: 'nav-1',
        label: 'Settings',
        caption: 'Configure options',
        variant: 'navigation' as const,
        icon: <SettingsIcon />,
        onItemClick: () => alert('Settings clicked'),
      },
    ]

<List items={items} />

```

## Props

```ts
type ListItemVariant = 'data' | 'navigation' | 'select'

interface ListItemProps {
  id?: string
  label: string
  caption?: string
  icon?: ReactElement
  value?: React.ReactNode
  variant?: ListItemVariant
  isExpanded?: boolean
  onItemClick?: () => void
  ariaLabel?: string
  disabled?: boolean
  isHighlighted?: boolean
}

interface ListProps {
  items: ListItemProps[]
  noBorder?: boolean
  highlightedIndex?: number
}
```
