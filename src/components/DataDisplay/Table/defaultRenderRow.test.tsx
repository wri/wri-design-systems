import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { createDefaultRowRenderer } from './defaultRenderRow'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const baseParams = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'area', label: 'Area' },
  ],
  isRowSelected: (row: any) => row.id === 1,
  onRowSelected: jest.fn(),
  getSelectRowLabel: (name?: string, id?: string | number) =>
    `Select ${name ?? id}`,
}

describe('defaultRenderRow', () => {
  it('renders a selectable row with a labelled checkbox and data cells, with no a11y violations', async () => {
    const Row = createDefaultRowRenderer({ ...baseParams, selectable: true })
    const { container } = render(
      <table>
        <tbody>
          {Row(
            { id: 1, name: 'Forest', area: '10 ha' },
            {
              getCellProps: () => ({}),
            },
          )}
        </tbody>
      </table>,
    )

    expect(
      screen.getByRole('checkbox', { name: 'Select Forest' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Forest')).toBeInTheDocument()
    expect(screen.getByText('10 ha')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('omits the checkbox column when not selectable', () => {
    const Row = createDefaultRowRenderer({ ...baseParams, selectable: false })
    const { container } = render(
      <table>
        <tbody>{Row({ id: 1, name: 'Forest', area: '10 ha' })}</tbody>
      </table>,
    )

    expect(container.querySelector('input[type="checkbox"]')).toBeNull()
    expect(container.querySelectorAll('td')).toHaveLength(2)
  })

  it('uses a custom cell renderer when the column provides one', () => {
    const Row = createDefaultRowRenderer({
      ...baseParams,
      selectable: false,
      columns: [
        { key: 'name', label: 'Name' },
        {
          key: 'area',
          label: 'Area',
          cell: (row: any) => `${row.area} total`,
        },
      ],
    })
    render(
      <table>
        <tbody>{Row({ id: 2, name: 'Peatland', area: '5 ha' })}</tbody>
      </table>,
    )

    expect(screen.getByText('Peatland')).toBeInTheDocument()
    expect(screen.getByText('5 ha total')).toBeInTheDocument()
  })

  it('applies the row class name and per-cell props from the render context', () => {
    const Row = createDefaultRowRenderer({ ...baseParams, selectable: false })
    const { container } = render(
      <table>
        <tbody>
          {Row(
            { id: 2, name: 'Peatland', area: '5 ha' },
            {
              className: 'striped-row',
              getCellProps: (key: string) => ({ 'data-col': key }),
            },
          )}
        </tbody>
      </table>,
    )

    expect(container.querySelector('tr.striped-row')).not.toBeNull()
    expect(container.querySelector('td[data-col="name"]')).not.toBeNull()
    expect(container.querySelector('td[data-col="area"]')).not.toBeNull()
  })
})
