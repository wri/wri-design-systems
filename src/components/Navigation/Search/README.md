# Search

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs//navigation-search--docs)

[ItemCountDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Search/SearchDemo.tsx)

## Import

```tsx
import { Search } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const sampleOptions = [
  {
    id: '1',
    label: 'Location Name 1',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '2',
    label: 'Location Name 2',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '3',
    label: 'Location Name 3',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
]

<Search options={sampleOptions} placeholder='Search' />

```

## Props

```ts
export type SearchProps = Omit<
  ChakraInputProps,
  'variant' | 'colorPalette' | 'defaultChecked'
> & {
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'default'
  options: ListItemProps[]
  resultsMaxHeight?: string
  isLoading?: boolean
  displayResults?: 'none' | 'text' | 'list' | 'custom'
  onSelect?: (selectedOption: ListItemProps) => void
  onQueryChange?: (query: string) => void
  onClear?: () => void
  renderResults?: (params: {
    items: any[]
    highlightedIndex: number
    query: string
    onSelect: (id: string) => void
  }) => React.ReactNode
}
```
