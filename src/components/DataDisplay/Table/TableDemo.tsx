import { useState } from 'react'
import { Table, TableRow, TableCell, Checkbox } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

export const columns = [
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

type RowData = {
  id: string | number
  name: string
  email: string
  age: number
}

const data: Record<string, any>[] = Array(100)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    email: `email${i + 1}@example.com`,
    age: Math.round(Math.random() * 100),
  }))

const stickyColumns = [
  { key: 'name', label: 'Name', sortable: true, sticky: true },
  { key: 'email', label: 'Email', sortable: true, sticky: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'country', label: 'Country', sortable: true },
  { key: 'city', label: 'City', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

type StickyRowData = RowData & {
  country: string
  city: string
  role: string
  department: string
  status: string
}

const stickyData: StickyRowData[] = Array(100)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    email: `email${i + 1}@example.com`,
    age: Math.round(Math.random() * 100),
    country: `Country ${(i % 5) + 1}`,
    city: `City ${(i % 8) + 1}`,
    role: ['Admin', 'Editor', 'Viewer'][i % 3],
    department: ['Engineering', 'Design', 'Product', 'Marketing'][i % 4],
    status: ['Active', 'Inactive', 'Pending'][i % 3],
  }))

type RenderRowContext = {
  className?: string
  getCellProps?: (columnKey: string) => Record<string, any>
}

const TableDemo = () => {
  const totalItems = 100
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sortColumn, setSortColumn] = useState<{ key: string; order: string }>({
    key: '',
    order: '',
  })
  const [selectedRows, setSelectedRows] = useState<RowData[]>()

  const startRange = (currentPage - 1) * pageSize
  const endRange = startRange + pageSize

  let fullData = [...data]

  if (sortColumn && sortColumn.key !== '') {
    const { key, order } = sortColumn
    const isDesc = order === 'desc'

    fullData = fullData.sort((a, b) => {
      if (typeof a[key] === 'string' && typeof b[key] === 'string') {
        const newA = a[key]
        const newB = b[key]

        return isDesc ? newA.localeCompare(newB) : newB.localeCompare(newA)
      }

      const newA = a[key] as number
      const newB = b[key] as number

      return isDesc ? newA - newB : newB - newA
    })
  }

  const dataByPage = fullData.slice(startRange, endRange) as RowData[]
  const stickyDataByPage = stickyData.slice(startRange, endRange)

  const renderRow = (rowData: RowData) => (
    <TableRow>
      <TableCell>{rowData.name}</TableCell>
      <TableCell>{rowData.email}</TableCell>
      <TableCell>{rowData.age}</TableCell>
    </TableRow>
  )

  const selectableRenderRow = (
    rowData: RowData,
    rowProps?: Record<string, any>,
  ) => {
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
        {...rowProps}
        aria-selected={selectedRows?.some((item) => item.id === rowData.id)}
      >
        <TableCell>
          <Checkbox
            name={`checkbox-${rowData.id}`}
            aria-label={`Select row ${rowData.name}`}
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

  const onAllItemsSelected = (checked: boolean) => {
    if (checked) {
      setSelectedRows(dataByPage)
    } else {
      setSelectedRows([])
    }
  }

  const stickyRenderRow = (rowData: StickyRowData, context?: RenderRowContext) => (
    <TableRow>
      <TableCell {...context?.getCellProps?.('name')}>{rowData.name}</TableCell>
      <TableCell {...context?.getCellProps?.('email')}>{rowData.email}</TableCell>
      <TableCell>{rowData.age}</TableCell>
      <TableCell>{rowData.country}</TableCell>
      <TableCell>{rowData.city}</TableCell>
      <TableCell>{rowData.role}</TableCell>
      <TableCell>{rowData.department}</TableCell>
      <TableCell>{rowData.status}</TableCell>
    </TableRow>
  )

  return (
    <DemoWrapper title='Table'>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '3.125rem' }}
      >
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
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
        </div>
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <Table
            columns={columns}
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
            variant='full-width'
            loading
          />
        </div>
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
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
            }}
            onAllItemsSelected={onAllItemsSelected}
            selectedRows={selectedRows}
            selectable
          />
        </div>
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            Sticky Columns
          </p>
          <Table
            columns={stickyColumns}
            data={stickyDataByPage}
            renderRow={stickyRenderRow}
            onSortColumn={setSortColumn}
            onPageSizeChange={setPageSize}
            onPageChange={setCurrentPage}
            pagination={{
              totalItems,
              currentPage,
              pageSize,
              showItemCount: true,
            }}
            height='18.75rem'
          />
        </div>
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            Sticky Columns + Sticky Header
          </p>
          <Table
            columns={stickyColumns}
            data={stickyDataByPage}
            renderRow={stickyRenderRow}
            onSortColumn={setSortColumn}
            onPageSizeChange={setPageSize}
            onPageChange={setCurrentPage}
            pagination={{
              totalItems,
              currentPage,
              pageSize,
              showItemCount: true,
            }}
            stickyHeader
            height='18.75rem'
          />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default TableDemo
