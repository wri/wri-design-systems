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
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
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
const renderRow = (rowData: RowData) => (
  <TableRow>
    <TableCell>{rowData.name}</TableCell>
    <TableCell>{rowData.email}</TableCell>
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
  }[]
  data: any
  renderRow: any
  striped?: boolean
  stickyHeader?: boolean
  selectable?: boolean
  selectedRows?: any
  pagination?: {
    totalItems: number
    currentPage: number
    pageSize: number
    showItemCount?: boolean
    showItemCountText?: boolean
  }
  onSortColumn: (sortColumn: { key: string; order: string }) => void
  onPageSizeChange: (pageSize: number) => void
  onPageChange: (page: number) => void
  onAllItemsSelected?: (checked: boolean) => void
}
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
