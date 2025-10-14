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
    id: '0',
    label: 'Item 1',
    caption: 'This is the first item',
    icon: SomeIcon,
    data: 'Value 1',
    variant: 'data',
  },
  {
    id: '1',
    label: 'Expandable Item',
    variant: 'navigation',
    onClick: () => console.log('Item clicked'),
  },
]

<List items={items} />

```

## Props

```ts
type ListProps = {
  items: ListItemProps[]
}

type ListItemProps = {
  id?: string
  label: string
  caption?: string
  icon?: React.ElementType
  value?: string | number
  variant?: 'data' | 'navigation'
  onItemClick?: () => void
  isExpanded?: boolean
}
```
