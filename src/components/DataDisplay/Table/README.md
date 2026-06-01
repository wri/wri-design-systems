# Table

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-table--docs)

[TableDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/Table/TableDemo.tsx)

## Import

```tsx
import { Table } from '@worldresources/wri-design-systems'
```

## Usage

### Columns

```tsx
const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    sticky: true,
  },
  {
    key: 'email',
    label: 'Email',
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

```tsx
const selectableRenderRow = (rowData: RowData) => {
  const handleOnRowSelected = ({ checked }: any) => {
    setSelectedRows((current = [] as RowData[]) => {
      if (checked) {
        return [...current, rowData]
      }

      return current.filter((item) => item.id !== rowData.id)
    })
  }

  return (
    <TableRow
      aria-selected={selectedRows?.some((item) => item.id === rowData.id)}
    >
      <TableCell>
        <Checkbox
          name={`checkbox-${rowData.id}`}
          onCheckedChange={handleOnRowSelected}
          checked={selectedRows?.some((item) => item.id === rowData.id)}
        />
      </TableCell>
      <TableCell>{rowData.name}</TableCell>
      <TableCell>{rowData.email}</TableCell>
      <TableCell>{rowData.age}</TableCell>
    </TableRow>
  )
}
```

```tsx
<Table
  columns={columns}
  data={dataByPage}
  renderRow={renderRow}
  onSortColumn={setSortColumn}
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
type TableProps = {
  columns: {
    key: string
    label: string
    sortable?: boolean
    sticky?: boolean | 'start' | 'end'
  }[]
  data?: any
  renderRow: (
    row: any,
    context?: {
      className?: string
      getCellProps: (columnKey: string) => Record<string, any>
    },
  ) => ReactNode
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
  onSortColumn?: (sortColumn: { key: string; order: string }) => void
  onPageSizeChange?: (pageSize: number) => void
  onPageChange?: (page: number) => void
  onAllItemsSelected?: (checked: boolean) => void
  loading?: boolean
  /** When set, the table scrolls vertically within this height and horizontally within the containers width while pagination stays fixed */
  height?: string
}
```

## Sticky columns

Mark one or more columns with `sticky` and use `context.getCellProps(columnKey)` in `renderRow` for matching body cells.

```tsx
const columns = [
  { key: 'name', label: 'Name', sticky: true },
  { key: 'email', label: 'Email', sticky: true },
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

```tsx
<Table
  columns={columns}
  data={dataByPage}
  renderRow={selectableRenderRow}
  onSortColumn={setSortColumn}
  onPageSizeChange={setPageSize}
  onPageChange={setCurrentPage}
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
    showItemCountText: true,
  }}
  onAllItemsSelected={onAllItemsSelected}
  selectedRows={selectedRows}
  selectable
/>
```

## Scrollable

When `height` is set, the table body becomes scrollable (horizontally and vertically) within the given height, while the pagination and item count remain fixed below the table.

```tsx
<Table
  columns={columns}
  data={dataByPage}
  renderRow={renderRow}
  height='400px'
  pagination={{
    totalItems,
    currentPage,
    pageSize,
    showItemCount: true,
  }}
/>
```
