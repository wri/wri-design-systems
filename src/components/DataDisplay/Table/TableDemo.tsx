import React, { isValidElement, type ReactNode, useMemo, useState } from 'react'
import { Table, TableRow, TableCell, Tooltip } from '../..'
import { InfoIcon } from '../../icons'
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

const reactNodeColumns = [
  {
    key: 'name',
    label: 'Name',
    sticky: true,
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'status',
    label: 'Status',
  },
]

type ReactNodeRowData = {
  id: string | number
  name: ReactNode
  email: ReactNode
  status: ReactNode
}

const getTextFromReactNode = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return ''
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join(' ')
  }

  if (isValidElement(node)) {
    return getTextFromReactNode(
      (node.props as { children?: ReactNode }).children,
    )
  }

  return ''
}

const sortReactNodeRowsByName = (
  rows: ReactNodeRowData[],
  order: 'asc' | 'desc',
) => {
  const sortedRows = [...rows].sort((a, b) => {
    const nameA = getTextFromReactNode(a.name)
    const nameB = getTextFromReactNode(b.name)

    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' })
  })

  return order === 'desc' ? sortedRows.reverse() : sortedRows
}

const reactNodeData: ReactNodeRowData[] = [
  {
    id: 1,

    name: <strong>Ana Lopez</strong>,
    email: <a href='mailto:ana@example.com'>ana@example.com</a>,
    status: <span style={{ color: '#1f7a1f', fontWeight: 600 }}>Active</span>,
  },
  {
    id: 2,
    name: <strong>Carlos Vega</strong>,
    email: <a href='mailto:carlos@example.com'>carlos@example.com</a>,
    status: (
      <span style={{ color: '#9a5a00', fontWeight: 600 }}>Needs review</span>
    ),
  },
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

type CellTooltipItem = {
  id: string
  label: string
  content: string
}

/** JSON-shaped cell value: an object holding 1–3 tooltips to render in one cell. */
type CellTooltips = {
  items: CellTooltipItem[]
}

type TooltipCellRowData = {
  id: number
  name: string
  email: string
  region: string
  country: string
  city: string
  owner: string
  status: string
  tooltips: CellTooltips
}

const TOOLTIP_CATALOG: Omit<CellTooltipItem, 'id'>[] = [
  {
    label: 'Compliance note',
    content: 'Requires compliance review before publishing.',
  },
  {
    label: 'Data quality note',
    content: 'Source data may be incomplete for this region.',
  },
  {
    label: 'Access note',
    content: 'Restricted to editors with elevated permissions.',
  },
]

const tooltipCellData: TooltipCellRowData[] = Array(40)
  .fill(0)
  .map((_, i) => {
    const tooltipCount = (i % 3) + 1
    const items = TOOLTIP_CATALOG.slice(0, tooltipCount).map((item, index) => ({
      ...item,
      id: `row-${i}-tooltip-${index}`,
    }))

    return {
      id: i,
      name: `Site ${i + 1}`,
      email: `site${i + 1}@example.com`,
      region: ['Americas', 'Europe', 'Africa', 'Asia'][i % 4],
      country: `Country ${(i % 5) + 1}`,
      city: `City ${(i % 8) + 1}`,
      owner: ['Ana Lopez', 'Carlos Vega', 'Maya Chen', 'Jon Park'][i % 4],
      status: ['Active', 'Pending', 'Archived'][i % 3],
      tooltips: { items },
    }
  })

const renderTooltipsCell = (row: TooltipCellRowData) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      flexWrap: 'wrap',
    }}
  >
    {row.tooltips.items.map((tooltip) => (
      <Tooltip key={tooltip.id} content={tooltip.content}>
        <InfoIcon height='1.25rem' width='1.25rem' aria-label={tooltip.label} />
      </Tooltip>
    ))}
    <span style={{ fontSize: '0.875rem', color: '#5a5a5a' }}>
      {row.tooltips.items.length}
    </span>
  </div>
)

const tooltipCellColumns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    sticky: true,
    width: '12rem',
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    sticky: true,
    width: '16rem',
  },
  {
    key: 'region',
    label: 'Region',
    sortable: true,
    width: '12rem',
  },
  {
    key: 'country',
    label: 'Country',
    sortable: true,
    width: '12rem',
  },
  {
    key: 'city',
    label: 'City',
    sortable: true,
    width: '12rem',
  },
  {
    key: 'owner',
    label: 'Owner',
    sortable: true,
    width: '12rem',
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    width: '10rem',
  },
  {
    key: 'tooltips',
    label: 'Alerts',
    sortable: true,
    width: '12rem',
    cell: renderTooltipsCell,
  },
]

const sortTooltipCellRows = (
  rows: TooltipCellRowData[],
  sortColumn: { key: string; order: string },
) => {
  if (
    !sortColumn.key ||
    (sortColumn.order !== 'asc' && sortColumn.order !== 'desc')
  ) {
    return rows
  }

  const isAsc = sortColumn.order === 'asc'

  return [...rows].sort((a, b) => {
    // Custom criteria: sort Alerts by number of tooltips in the cell object.
    if (sortColumn.key === 'tooltips') {
      const countA = a.tooltips.items.length
      const countB = b.tooltips.items.length

      return isAsc ? countA - countB : countB - countA
    }

    const valueA = a[sortColumn.key as keyof TooltipCellRowData]
    const valueB = b[sortColumn.key as keyof TooltipCellRowData]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    }

    return 0
  })
}

const TableDemo = () => {
  const totalItems = 100
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [reactNodeNameSortOrder, setReactNodeNameSortOrder] = useState<
    'asc' | 'desc'
  >('asc')
  const [tooltipCellSort, setTooltipCellSort] = useState<{
    key: string
    order: string
  }>({ key: '', order: '' })
  const [tooltipCellPage, setTooltipCellPage] = useState(1)
  const [tooltipCellPageSize, setTooltipCellPageSize] = useState(10)

  const startRange = (currentPage - 1) * pageSize
  const endRange = startRange + pageSize

  const dataByPage = data.slice(startRange, endRange) as RowData[]
  const stickyDataByPage = stickyData.slice(startRange, endRange)
  const sortedReactNodeData = useMemo(
    () => sortReactNodeRowsByName(reactNodeData, reactNodeNameSortOrder),
    [reactNodeNameSortOrder],
  )

  const sortedTooltipCellData = useMemo(
    () => sortTooltipCellRows(tooltipCellData, tooltipCellSort),
    [tooltipCellSort],
  )

  const tooltipCellDataByPage = useMemo(() => {
    const start = (tooltipCellPage - 1) * tooltipCellPageSize
    const end = start + tooltipCellPageSize

    return sortedTooltipCellData.slice(start, end)
  }, [sortedTooltipCellData, tooltipCellPage, tooltipCellPageSize])

  const onSortReactNodeName = (sortColumn: { key: string; order: string }) => {
    if (sortColumn.key !== 'name') {
      return
    }

    if (sortColumn.order === 'asc' || sortColumn.order === 'desc') {
      setReactNodeNameSortOrder(sortColumn.order)
    }
  }

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
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            React Node cells (simple example)
          </p>
          <Table
            columns={reactNodeColumns}
            data={sortedReactNodeData}
            onSortColumn={onSortReactNodeName}
            selectable
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
        <div style={{ width: '100%', maxWidth: '56.25rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            Cell renderer — JSON tooltips (selectable, sticky, sortable by
            count)
          </p>
          <p style={{ marginBottom: '0.75rem', fontSize: '0.875rem' }}>
            Alerts column uses <code>columns[].cell</code> to render 1–3
            tooltips from a JSON object. Sorting Alerts is handled externally
            via <code>onSortColumn</code> by tooltip count — no Table changes
            required.
          </p>
          <Table
            columns={tooltipCellColumns}
            data={tooltipCellDataByPage}
            selectable
            stickyHeader
            height='18.75rem'
            onSortColumn={setTooltipCellSort}
            onPageSizeChange={(nextPageSize) => {
              setTooltipCellPageSize(nextPageSize)
              setTooltipCellPage(1)
            }}
            onPageChange={setTooltipCellPage}
            pagination={{
              totalItems: tooltipCellData.length,
              currentPage: tooltipCellPage,
              pageSize: tooltipCellPageSize,
              showItemCount: true,
            }}
          />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default TableDemo
