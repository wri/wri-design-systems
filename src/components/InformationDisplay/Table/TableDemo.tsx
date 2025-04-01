import { useState } from 'react'
import { Table, TableRow, TableCell, Checkbox } from '../..'

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

  const renderRow = (rowData: RowData) => (
    <TableRow>
      <TableCell>{rowData.name}</TableCell>
      <TableCell>{rowData.email}</TableCell>
      <TableCell>{rowData.age}</TableCell>
    </TableRow>
  )

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

  const onAllItemsSelected = (checked: boolean) => {
    if (checked) {
      setSelectedRows(dataByPage)
    } else {
      setSelectedRows([])
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ width: '900px' }}>
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
          }}
        />
      </div>
      <div style={{ width: '900px' }}>
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
    </div>
  )
}

export default TableDemo
