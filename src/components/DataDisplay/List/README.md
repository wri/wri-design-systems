# List

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-list--docs)

[ListDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/List/ListDemo.tsx)

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
      {
        id: 'nav-2',
        label: <strong>Rich label</strong>,
        ariaLabel: 'Rich label',
        variant: 'navigation' as const,
        onItemClick: () => alert('Rich label clicked'),
      },
    ]

<List items={items} />

```

### ReactNode labels

`label` accepts any `ReactNode`. When it is not a plain string, provide an
`ariaLabel` so the row keeps an accessible name, and a `searchLabel` when the
item is used inside `Search` or `MobileSearch` so it can still be filtered and
selected by text.

### Highlighting

Items can be highlighted two ways, which combine:

- `highlightedIndex` on `List` — highlights the item at that index (used by
  keyboard navigation in `Search`).
- `isHighlighted` on an item — highlights that item regardless of index.

## Props

```ts
type ListItemVariant = 'data' | 'navigation' | 'select'

interface ListItemProps {
  id?: string
  label: React.ReactNode
  searchLabel?: string
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
