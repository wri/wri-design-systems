import { fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Table, { TableCell, TableRow } from '.'

jest.mock(
  '../../Navigation/Pagination',
  () =>
    function paginationMock() {
      return <div aria-hidden='true' />
    },
)

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Table — accessibility', () => {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
  ]

  type DataItem = {
    id: number
    name: string
    email: string
  }

  const data: DataItem[] = [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
  ]

  it('renders a paginated table with no violations', async () => {
    const { container } = render(
      <Table
        columns={columns}
        data={data}
        onSortColumn={() => {}}
        onPageSizeChange={() => {}}
        onPageChange={() => {}}
        pagination={{ totalItems: 2, currentPage: 1, pageSize: 10 }}
        renderRow={(rowData: DataItem) => (
          <TableRow>
            <TableCell>{rowData.name}</TableCell>
            <TableCell>{rowData.email}</TableCell>
          </TableRow>
        )}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with internal default renderer when renderRow is omitted', async () => {
    const { container, getByText } = render(
      <Table
        columns={columns}
        data={data}
        onSortColumn={() => {}}
        onPageSizeChange={() => {}}
        onPageChange={() => {}}
        pagination={{ totalItems: 2, currentPage: 1, pageSize: 10 }}
      />,
    )

    expect(getByText('Jane Doe')).toBeInTheDocument()
    expect(getByText('john@example.com')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('sorts internally when onSortColumn is not provided', () => {
    const { container, getAllByLabelText } = render(
      <Table
        columns={columns}
        data={data}
        onPageSizeChange={() => {}}
        onPageChange={() => {}}
        pagination={{ totalItems: 2, currentPage: 1, pageSize: 10 }}
      />,
    )

    const descendingButtons = getAllByLabelText('Descending')
    fireEvent.click(descendingButtons[0])

    const tableContent = container.textContent || ''
    expect(tableContent.indexOf('John Doe')).toBeLessThan(
      tableContent.indexOf('Jane Doe'),
    )
  })
})
