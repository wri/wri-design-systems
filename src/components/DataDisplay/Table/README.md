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
  key: string
  label: string
  sortable?: boolean
  width?: string
  /** Optional custom renderer for this column cell. */
  cell?: (row: any) => ReactNode
  /** When true, this column sticks to the left during horizontal scroll. */
  sticky?: boolean
}

type TableRenderRowContext = {
  className?: string
  getCellProps: (columnKey: string) => Record<string, any>
}

type TableProps = {
  columns: TableColumn[]
  data?: any
  renderRow?: (row: any, context?: TableRenderRowContext) => ReactNode
  striped?: boolean
  stickyHeader?: boolean
  selectable?: boolean
  selectedRows?: any
  variant?: 'default' | 'full-width'
  pagination?: {
    totalItems: number
    currentPage: number
    pageSize: number
    showItemCount?: boolean
    showItemCountText?: boolean
  }
  /** Optional override for external sorting mode. If omitted, Table sorts internally. */
  onSortColumn?: (sortColumn: { key: string; order: string }) => void
  onPageSizeChange?: (pageSize: number) => void
  onPageChange?: (page: number) => void
  onAllItemsSelected?: (checked: boolean) => void
  onRowSelected?: (row: any, checked: boolean) => void
  loading?: boolean
  /** When set, the table scrolls vertically within this height and horizontally when it overflows its container (e.g. '400px', '60vh'). */
  height?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TableLabels>
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
