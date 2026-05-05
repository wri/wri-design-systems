// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import TableStory, { TableCell, TableRow } from '.'
import { columns } from './TableDemo'
import Checkbox from '../../Forms/Controls/Checkbox'

const meta = {
  title: 'Data Display/Table',
  component: TableStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'full-width'],
    },
    selectable: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof TableStory>

export default meta

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

export const Table = {
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({
      key: '',
      order: '',
    })

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

    return (
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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
    )
  },
}

export const FullWidthTable = {
  args: {
    variant: 'full-width',
  },

  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({
      key: '',
      order: '',
    })

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

    return (
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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
    )
  },
}

export const Selectable = {
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({
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
        <TableRow {...rowProps}>
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
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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
    )
  },
}

const wideColumns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'country', label: 'Country', sortable: true },
  { key: 'city', label: 'City', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

type WideRowData = RowData & {
  country: string
  city: string
  role: string
  department: string
  status: string
}

const wideData: WideRowData[] = Array(100)
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

export const ScrollableTable = {
  args: {
    height: '300px',
  },
  argTypes: {
    height: {
      control: { type: 'text' },
      description:
        'Height of the scrollable container. Set to any CSS value (e.g. "300px", "50vh").',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({
      key: '',
      order: '',
    })

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize

    let fullData = [...wideData]

    if (sortColumn && sortColumn.key !== '') {
      const { key, order } = sortColumn
      const isDesc = order === 'desc'

      fullData = fullData.sort((a, b) => {
        const aVal = (a as any)[key]
        const bVal = (b as any)[key]

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return isDesc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
        }

        return isDesc
          ? (aVal as number) - (bVal as number)
          : (bVal as number) - (aVal as number)
      })
    }

    const dataByPage = fullData.slice(startRange, endRange)

    const renderRow = (rowData: WideRowData) => (
      <TableRow>
        <TableCell>{rowData.name}</TableCell>
        <TableCell>{rowData.email}</TableCell>
        <TableCell>{rowData.age}</TableCell>
        <TableCell>{rowData.country}</TableCell>
        <TableCell>{rowData.city}</TableCell>
        <TableCell>{rowData.role}</TableCell>
        <TableCell>{rowData.department}</TableCell>
        <TableCell>{rowData.status}</TableCell>
      </TableRow>
    )

    return (
      <div style={{ padding: '1.5rem', maxWidth: '800px' }}>
        <TableStory
          {...args}
          columns={wideColumns}
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
    )
  },
}
