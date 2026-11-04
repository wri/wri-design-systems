# Search

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs//navigation-search--docs)

[SearchDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Search/SearchDemo.tsx)

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
    label: <strong>Location Name 2</strong>,
    searchLabel: 'Location Name 2',
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

### ReactNode labels and searchLabel

When an option's `label` is a `ReactNode`, it renders as-is (no query
highlighting) and cannot be matched by text on its own. Provide
`searchLabel` so the option can still be filtered and selected; without it,
only `id` and `caption` are searchable. String labels keep the built-in
query highlighting.

## Props

```ts
type SearchLabels = {
  /** placeholder attribute on the filter input. Default: "Filter" */
  filterPlaceholder: string
  /** aria-label on the filter input. Default: "Search filter" */
  filterAriaLabel: string
}

type SearchProps = Omit<
  ChakraInputProps,
  'variant' | 'colorPalette' | 'defaultChecked'
> & {
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'default'
  options: ListItemProps[]
  resultsMaxHeight?: SizeValue
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
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<SearchLabels>
}
```
