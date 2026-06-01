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

    docs: {
      description: {
        component:
          'Data table with sortable columns, pagination, and row selection support.',
      },
    },
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

type RenderRowContext = {
  getCellProps?: (columnKey: string) => Record<string, any>
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

const stickyWideColumns = [
  { key: 'name', label: 'Name', sortable: true, sticky: true },
  { key: 'email', label: 'Email', sortable: true, sticky: false },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'country', label: 'Country', sortable: true },
  { key: 'city', label: 'City', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

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

const makeStickyStoryRender =
  () => (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({ key: '', order: '' })

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

    const renderRow = (rowData: WideRowData, context?: RenderRowContext) => (
      <TableRow>
        <TableCell {...context?.getCellProps?.('name')}>
          {rowData.name}
        </TableCell>
        <TableCell {...context?.getCellProps?.('email')}>
          {rowData.email}
        </TableCell>
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
          columns={stickyWideColumns}
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
  }

export const StickyColumns = {
  name: 'Sticky Columns',
  args: { height: '300px', stickyHeader: false },
  parameters: { layout: 'fullscreen' },
  render: makeStickyStoryRender(),
}

export const StickyColumnsAndHeader = {
  name: 'Sticky Columns + Sticky Header',
  args: { height: '300px', stickyHeader: true },
  parameters: { layout: 'fullscreen' },
  render: makeStickyStoryRender(),
}

type CustomizableColumnsArgs = StoryObj<typeof TableStory>['args'] & {
  nameWidth: string
  emailWidth: string
  ageWidth: string
  nameSticky: boolean
  emailSticky: boolean
}

export const CustomizableColumnWidths = {
  name: 'Customizable Column Widths',
  args: {
    height: '300px',
    stickyHeader: true,
    nameWidth: '12rem',
    emailWidth: '18rem',
    ageWidth: '8rem',
    nameSticky: true,
    emailSticky: false,
  },
  argTypes: {
    stickyHeader: {
      control: { type: 'boolean' },
    },
    height: {
      control: { type: 'text' },
    },
    nameWidth: {
      control: { type: 'text' },
      description: 'Width for Name column (e.g. 12rem, 180px, 20%).',
    },
    emailWidth: {
      control: { type: 'text' },
      description: 'Width for Email column (e.g. 18rem, 260px, 30%).',
    },
    ageWidth: {
      control: { type: 'text' },
      description: 'Width for Age column (e.g. 8rem, 100px).',
    },
    nameSticky: {
      control: { type: 'boolean' },
    },
    emailSticky: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Use controls to customize column widths and sticky behavior interactively.',
      },
    },
  },
  render: (args: CustomizableColumnsArgs) => {
    const {
      nameWidth,
      emailWidth,
      ageWidth,
      nameSticky,
      emailSticky,
      ...tableArgs
    } = args

    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortColumn, setSortColumn] = useState<{
      key: string
      order: string
    }>({ key: '', order: '' })

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

    const columnsWithControls = [
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        width: nameWidth,
        sticky: nameSticky,
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
        width: emailWidth,
        sticky: emailSticky,
      },
      { key: 'age', label: 'Age', sortable: true, width: ageWidth },
      { key: 'country', label: 'Country', sortable: true },
      { key: 'city', label: 'City', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'department', label: 'Department', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
    ]

    const renderRow = (rowData: WideRowData, context?: RenderRowContext) => (
      <TableRow>
        <TableCell {...context?.getCellProps?.('name')}>
          {rowData.name}
        </TableCell>
        <TableCell {...context?.getCellProps?.('email')}>
          {rowData.email}
        </TableCell>
        <TableCell {...context?.getCellProps?.('age')}>{rowData.age}</TableCell>
        <TableCell>{rowData.country}</TableCell>
        <TableCell>{rowData.city}</TableCell>
        <TableCell>{rowData.role}</TableCell>
        <TableCell>{rowData.department}</TableCell>
        <TableCell>{rowData.status}</TableCell>
      </TableRow>
    )

    return (
      <div style={{ padding: '1.5rem', maxWidth: '900px' }}>
        <TableStory
          {...tableArgs}
          columns={columnsWithControls}
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
