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

| Prop               | Type                                               | Default                    | Description                                                                                                         |
| ------------------ | -------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `displayResults`   | `'none' \| 'text' \| 'list' \| 'custom'`           | `'text'`                   | How results are rendered, one of 'none', 'text', 'list', or 'custom'                                                |
| `disabled`         | `boolean`                                          | —                          | Disables the search input                                                                                           |
| `isLoading`        | `boolean`                                          | `false`                    | Shows a spinner in the results popover when true                                                                    |
| `labels`           | `Partial<SearchLabels>`                            | —                          | Override internal UI labels for internationalization support                                                        |
| `onClear`          | `() => void`                                       | —                          | Called when the clear button is pressed                                                                             |
| `onQueryChange`    | `(query: string) => void`                          | —                          | Called with the current query whenever it changes                                                                   |
| `onSelect`         | `(selectedOption: ListItemProps) => void`          | —                          | Called with the selected option when a result is selected                                                           |
| `options`          | `ListItemProps[]`                                  | `[]`                       | Options to filter and display as results                                                                            |
| `placeholder`      | `string`                                           | `labels.filterPlaceholder` | Placeholder and aria-label for the search input                                                                     |
| `renderResults`    | `(params: RenderResultsParams) => React.ReactNode` | —                          | Custom results renderer used when displayResults is 'custom', receives items, highlightedIndex, query, and onSelect |
| `resultsMaxHeight` | `number \| string`                                 | `50`                       | Maximum height of the results popover, numbers resolve to spacing-scale rem values                                  |
| `size`             | `'small' \| 'default'`                             | `'default'`                | Size of the search input and icon                                                                                   |

### Supporting types

```ts
type RenderResultsParams = {
  items: any[]
  highlightedIndex: number
  query: string
  onSelect: (id: string) => void
}

type SearchLabels = {
  /** placeholder attribute on the filter input. Default: "Filter" */
  filterPlaceholder: string
  /** aria-label on the filter input. Default: "Search filter" */
  filterAriaLabel: string
}
```

- `ListItemProps` — item shape from `DataDisplay/List`: `{ id?, label, searchLabel?, caption?, icon?, value?, ... }`
