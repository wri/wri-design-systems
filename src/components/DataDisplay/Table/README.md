# Table

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-table--docs)

[TableDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/Table/TableDemo.tsx)

## Import

```tsx
import { Table } from '@worldresources/wri-design-systems'
```

## Usage

### Simple (No `renderRow`)

`Table` now renders rows by default from `columns + data`.
Sorting is `auto` by default:

- with `onSortColumn` => external sorting (parent controls data order)
- without `onSortColumn` => internal sorting (Table sorts received data)

```tsx
const columns = [
  { key: 'name', label: 'Name', sortable: true, width: '12rem', sticky: true },
  { key: 'email', label: 'Email', sortable: true, width: '18rem' },
  { key: 'age', label: 'Age', sortable: true, width: '8rem' },
]

<Table
  columns={columns}
  data={dataByPage}
  onPageSizeChange={setPageSize}
  onPageChange={setCurrentPage}
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
  }}
/>
```

### Override `onSortColumn` (External Sorting)

Use `onSortColumn` when the parent must decide sort behavior (for example: server-side sorting, custom comparator rules, or coordinated sorting across views).

```tsx
const [sortColumn, setSortColumn] = useState<{ key: string; order: string }>({
  key: '',
  order: '',
})

const sortedData = useMemo(() => {
  if (!sortColumn.key) return data

  const { key, order } = sortColumn
  const isAsc = order === 'asc'

  return [...data].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return isAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }

    return isAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
  })
}, [data, sortColumn])

<Table
  columns={columns}
  data={sortedData}
  onSortColumn={setSortColumn}
  onPageSizeChange={setPageSize}
  onPageChange={setCurrentPage}
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
  }}
/>
```

### Columns

```tsx
const columns = [
  {
    key: 'name',
    label: 'Name',
    width: '12rem',
    sortable: true,
    sticky: true,
  },
  {
    key: 'email',
    label: 'Email',
    width: '18rem',
    sortable: true,
    sticky: true,
  },
  {
    key: 'age',
    label: 'Age',
    sortable: true,
  },
]
```

### Render Row

`renderRow` is optional and intended for advanced cases where you need full control of the row markup.

```tsx
const renderRow = (
  rowData: RowData,
  context?: { getCellProps?: (columnKey: string) => Record<string, any> },
) => (
  <TableRow>
    <TableCell {...context?.getCellProps?.('name')}>{rowData.name}</TableCell>
    <TableCell {...context?.getCellProps?.('email')}>{rowData.email}</TableCell>
    <TableCell>{rowData.age}</TableCell>
  </TableRow>
)
```

### Column Cell Overrides

For lighter customization, prefer `columns[i].cell` over a full `renderRow`.

```tsx
const columns = [
  { key: 'name', label: 'Name', sortable: true, sticky: true },
  {
    key: 'age',
    label: 'Age',
    sortable: true,
    cell: (row: RowData) => `${row.age} yrs`,
  },
]
```

```tsx
<Table
  columns={columns}
  data={dataByPage}
  renderRow={renderRow}
  onPageSizeChange={setPageSize}
  onPageChange={setCurrentPage}
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
    showItemCountText: true,
  }}
/>
```

## Props

| Prop                 | Type                                                                                                                  | Default                | Description                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`            | `TableColumn[]`                                                                                                       | —                      | Column definitions that drive the header and default row rendering                                                                                    |
| `data`               | `any`                                                                                                                 | `[]`                   | Row data rendered in the table body                                                                                                                   |
| `height`             | `string`                                                                                                              | —                      | When set, the table scrolls vertically within this height and horizontally when it overflows its container (e.g. '400px', '60vh')                     |
| `labels`             | `Partial<TableLabels>`                                                                                                | —                      | Override internal UI labels for internationalization support                                                                                          |
| `loading`            | `boolean`                                                                                                             | —                      | Whether to show a loading spinner below the table                                                                                                     |
| `onAllItemsSelected` | `(checked: boolean) => void`                                                                                          | —                      | Called when the select-all checkbox is toggled                                                                                                        |
| `onPageChange`       | `(page: number) => void`                                                                                              | —                      | Called when the page changes                                                                                                                          |
| `onPageSizeChange`   | `(pageSize: number) => void`                                                                                          | —                      | Called when a new page size is selected in the item count                                                                                             |
| `onRowSelected`      | `(row: any, checked: boolean) => void`                                                                                | —                      | Called when a row checkbox is toggled                                                                                                                 |
| `onSortColumn`       | `(sortColumn: { key: string; order: string }) => void`                                                                | —                      | Called when a column sort changes; if omitted, Table sorts internally                                                                                 |
| `pagination`         | `{ totalItems: number; currentPage: number; pageSize: number; showItemCount?: boolean; showItemCountText?: boolean }` | —                      | Pagination options for the footer; enables the pagination controls when set. totalItems defaults to the data length, currentPage to 1, pageSize to 10 |
| `renderRow`          | `(row: any, context?: TableRenderRowContext) => React.ReactNode`                                                      | `Default row renderer` | Custom row renderer for full control of the row markup                                                                                                |
| `selectable`         | `boolean`                                                                                                             | —                      | Whether to show a row selection checkbox column                                                                                                       |
| `selectedRows`       | `any`                                                                                                                 | —                      | Externally controlled selected rows; omit to use internal selection state                                                                             |
| `stickyHeader`       | `boolean`                                                                                                             | —                      | Whether the header row sticks to the top while scrolling                                                                                              |
| `striped`            | `boolean`                                                                                                             | —                      | Whether to render rows with striped backgrounds                                                                                                       |
| `variant`            | `'default' \| 'full-width'`                                                                                           | `'default'`            | Table layout variant; full-width removes the outer border and shadow                                                                                  |

### Supporting types

```ts
type TableLabels = {
  /** aria-label on the ascending sort icon button. Default: "Ascending" */
  ascendingLabel: string
  /** aria-label on the descending sort icon button. Default: "Descending" */
  descendingLabel: string
  /** aria-label on the header checkbox that selects all rows. Default: "Select all rows" */
  selectAllRowsLabel: string
  /** aria-label template for each row checkbox. Default: (name, id) => (name || id ? `Select row ${name || id}` : 'Select row') */
  selectRowLabel: (name?: string, id?: string | number) => string
}

type TableColumn = {
  /** Unique key of the column, matching the row data field */
  key: string
  /** Header text of the column */
  label: string
  /** Whether the column shows ascending and descending sort buttons */
  sortable?: boolean
  /** Fixed width of the column, e.g. '12rem' */
  width?: string
  /** Optional custom renderer for this column cell */
  cell?: (row: any) => ReactNode
  /** When true, this column sticks to the left during horizontal scroll. */
  sticky?: boolean
}

type TableRenderRowContext = {
  /** Class applied to the rendered row, e.g. 'selected' */
  className?: string
  /** Returns sticky and width props for the cells of a column key */
  getCellProps: (columnKey: string) => Record<string, any>
}
```

## Sticky columns

Mark one or more columns with `sticky` and use `context.getCellProps(columnKey)` in `renderRow` for matching body cells.

```tsx
const columns = [
  { key: 'name', label: 'Name', width: '12rem', sticky: true },
  { key: 'email', label: 'Email', width: '18rem', sticky: true },
  { key: 'age', label: 'Age' },
  { key: 'country', label: 'Country' },
]

const renderRow = (
  rowData: RowData,
  context?: { getCellProps?: (columnKey: string) => Record<string, any> },
) => (
  <TableRow>
    <TableCell {...context?.getCellProps?.('name')}>{rowData.name}</TableCell>
    <TableCell {...context?.getCellProps?.('email')}>{rowData.email}</TableCell>
    <TableCell>{rowData.age}</TableCell>
    <TableCell>{rowData.country}</TableCell>
  </TableRow>
)
```

## Selectable

With `selectable`, the default renderer automatically adds row checkboxes. Custom `renderRow` is not required.

```tsx
<Table
  columns={columns}
  data={dataByPage}
  onPageSizeChange={setPageSize}
  onPageChange={setCurrentPage}
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
    showItemCountText: true,
  }}
  selectable
/>
```

## Scrollable

When `height` is set, the table body becomes scrollable (horizontally and vertically) within the given height, while the pagination and item count remain fixed below the table.

```tsx
<Table
  columns={columns}
  data={dataByPage}
  height='400px'
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
  }}
/>
```
