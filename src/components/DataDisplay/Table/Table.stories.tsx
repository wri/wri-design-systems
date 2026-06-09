// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import TableStory, { TableCell, TableRow } from '.'
import { columns } from './TableDemo'

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
      control: { type: 'boolean' },
      description: 'Enables row selection with checkboxes.',
    },
    stickyHeader: {
      control: { type: 'boolean' },
      description: 'Makes the table header stick to the top when scrolling.',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the scrollable container (e.g. "300px", "50vh").',
    },
    striped: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },

    renderRow: { table: { disable: true } },
    onPageChange: { table: { disable: true } },
    onPageSizeChange: { table: { disable: true } },
    onSortColumn: { table: { disable: true } },
    onRowSelected: { table: { disable: true } },
    onAllItemsSelected: { table: { disable: true } },
    selectedRows: { table: { disable: true } },
    labels: { table: { disable: true } },
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

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = data.slice(startRange, endRange) as RowData[]

    return (
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = data.slice(startRange, endRange) as RowData[]

    return (
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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
      </div>
    )
  },
}

export const Selectable = {
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = data.slice(startRange, endRange) as RowData[]

    return (
      <div style={{ width: '56.25rem' }}>
        <TableStory
          {...args}
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
  parameters: {
    layout: 'fullscreen',
  },
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = wideData.slice(startRange, endRange)

    return (
      <div style={{ padding: '1.5rem', maxWidth: '800px' }}>
        <TableStory
          {...args}
          columns={wideColumns}
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
      </div>
    )
  },
}

function makeStickyStoryRender() {
  return function StickyStoryRender(args: StoryObj<typeof TableStory>['args']) {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = wideData.slice(startRange, endRange)

    return (
      <div style={{ padding: '1.5rem', maxWidth: '800px' }}>
        <TableStory
          {...args}
          columns={stickyWideColumns}
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
      </div>
    )
  }
}

export const StickyColumns = {
  name: 'Sticky Columns',
  args: { height: '300px', stickyHeader: false },
  parameters: { layout: 'fullscreen' },
  render: makeStickyStoryRender(),
}

export const StickyColumnsAndHeader = {
  name: 'Sticky Columns + Sticky Header',
  args: { height: '300px', stickyHeader: true, selectable: true },
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
      description: 'Makes the Name column sticky.',
    },
    emailSticky: {
      control: { type: 'boolean' },
      description: 'Makes the Email column sticky.',
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

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = wideData.slice(startRange, endRange)

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

    return (
      <div style={{ padding: '1.5rem', maxWidth: '900px' }}>
        <TableStory
          {...tableArgs}
          columns={columnsWithControls}
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
      </div>
    )
  },
}

export const ColumnCellOverrides = {
  name: 'Column Cell Overrides',
  args: {
    height: '300px',
    stickyHeader: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Shows per-column custom cell rendering via columns[i].cell, without writing a full renderRow.',
      },
    },
  },
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = wideData.slice(startRange, endRange)

    const overrideColumns = [
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        width: '12rem',
        sticky: true,
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
        width: '18rem',
        cell: (row: WideRowData) => row.email.toLowerCase(),
      },
      {
        key: 'age',
        label: 'Age',
        sortable: true,
        width: '8rem',
        cell: (row: WideRowData) => `${row.age} yrs`,
      },
      {
        key: 'status',
        label: 'Status',
        sortable: true,
        cell: (row: WideRowData) =>
          row.status === 'Active' ? 'Active' : 'Review',
      },
      { key: 'country', label: 'Country', sortable: true },
      { key: 'city', label: 'City', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'department', label: 'Department', sortable: true },
    ]

    return (
      <div style={{ padding: '1.5rem', maxWidth: '900px' }}>
        <TableStory
          {...args}
          columns={overrideColumns}
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
      </div>
    )
  },
}

export const CustomRowRenderer = {
  name: 'Custom Row Renderer',
  args: {
    height: '300px',
    stickyHeader: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Use renderRow when row structure must change dynamically (for example, review queues where some rows collapse details into a merged cell with colSpan and custom actions).',
      },
    },
  },
  render: (args: StoryObj<typeof TableStory>['args']) => {
    const totalItems = 100
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startRange = (currentPage - 1) * pageSize
    const endRange = startRange + pageSize
    const dataByPage = wideData.slice(startRange, endRange)

    const renderRow = (rowData: WideRowData) => {
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
      <div style={{ padding: '1.5rem', maxWidth: '900px' }}>
        <TableStory
          {...args}
          columns={wideColumns}
          data={dataByPage}
          renderRow={renderRow}
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
