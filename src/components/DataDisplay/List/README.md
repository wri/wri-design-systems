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

### Keys

Row keys prefer `id`, then `searchLabel`, then the label text for string
labels, so per-item state follows the item when the list is reordered. Give
items an `id` (or at least a `searchLabel`) when they can be reordered;
items without any identity — e.g. ReactNode labels — fall back to their array
index. Duplicate identities are disambiguated automatically and are only a
problem for reorder stability.

### Highlighting

Items can be highlighted two ways, which combine:

- `highlightedIndex` on `List` — highlights the item at that index (used by
  keyboard navigation in `Search`).
- `isHighlighted` on an item — highlights that item regardless of index.

## Props

### List

| Prop               | Type              | Default | Description                                                 |
| ------------------ | ----------------- | ------- | ----------------------------------------------------------- |
| `highlightedIndex` | `number`          | —       | Index of the item to highlight, used by keyboard navigation |
| `items`            | `ListItemProps[]` | —       | Item definitions rendered as list rows                      |
| `noBorder`         | `boolean`         | —       | Whether to remove the border around the list container      |

### ListItem

| Prop            | Type                 | Default  | Description                                                           |
| --------------- | -------------------- | -------- | --------------------------------------------------------------------- |
| `ariaLabel`     | `string`             | —        | Accessible name for the item row, derived from the label when omitted |
| `caption`       | `string`             | —        | Secondary text rendered under the label                               |
| `disabled`      | `boolean`            | `false`  | Whether the item row is disabled                                      |
| `icon`          | `React.ReactElement` | —        | Optional icon rendered before the label                               |
| `id`            | `string`             | —        | Unique element id for the item row                                    |
| `isExpanded`    | `boolean`            | `false`  | Whether a clickable item is announced as expanded                     |
| `isHighlighted` | `boolean`            | `false`  | Whether the item row is highlighted                                   |
| `label`         | `React.ReactNode`    | —        | Primary content of the item row                                       |
| `onItemClick`   | `() => void`         | —        | Called when a navigation or select item is clicked                    |
| `searchLabel`   | `string`             | —        | Plain-text copy of the label used for search filtering                |
| `value`         | `React.ReactNode`    | —        | Right-aligned value shown in the data variant                         |
| `variant`       | `ListItemVariant`    | `'data'` | Visual and behavioral variant of the item row                         |

### Supporting types

```ts
type ListItemVariant = 'data' | 'navigation' | 'select'
```
