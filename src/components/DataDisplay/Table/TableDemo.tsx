import { useState } from 'react'
import { Table, TableRow, TableCell } from '../..'
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

const TableDemo = () => {
  const totalItems = 100
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const startRange = (currentPage - 1) * pageSize
  const endRange = startRange + pageSize

  const dataByPage = data.slice(startRange, endRange) as RowData[]
  const stickyDataByPage = stickyData.slice(startRange, endRange)

  const customRenderRow = (rowData: StickyRowData) => {
    const needsReview = rowData.status !== 'Active'

    if (needsReview) {
      return (
        <TableRow>
          <TableCell>{rowData.name}</TableCell>
          <TableCell>{rowData.email}</TableCell>
          <TableCell colSpan={6}>
            Requires compliance review before activation
          </TableCell>
        </TableRow>
      )
    }

    return (
      <TableRow>
        <TableCell>{rowData.name}</TableCell>
        <TableCell>{rowData.email}</TableCell>
        <TableCell>{`${rowData.age} years`}</TableCell>
        <TableCell>{rowData.country}</TableCell>
        <TableCell>{rowData.city}</TableCell>
        <TableCell>{rowData.role}</TableCell>
        <TableCell>{rowData.department}</TableCell>
        <TableCell>View details</TableCell>
      </TableRow>
    )
  }

  return (
    <DemoWrapper title='Table'>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '3.125rem' }}
      >
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
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
          />
        </div>
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <Table
            columns={columns}
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
            onPageSizeChange={setPageSize}
            onPageChange={setCurrentPage}
            pagination={{
              totalItems,
              currentPage,
              pageSize,
              showItemCount: true,
            }}
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
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            Custom Row Renderer
          </p>
          <Table
            columns={stickyColumns}
            data={stickyDataByPage}
            renderRow={customRenderRow}
            onPageSizeChange={setPageSize}
            onPageChange={setCurrentPage}
            pagination={{
              totalItems,
              currentPage,
              pageSize,
              showItemCount: true,
            }}
          />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default TableDemo
