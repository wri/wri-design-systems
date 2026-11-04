import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import ItemCount from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ItemCount', () => {
  it('renders the per-page selector and showing text with no a11y violations', async () => {
    const { container } = render(
      <ItemCount
        pageSize={10}
        currentPage={2}
        totalItems={95}
        showItemCountText
        onPageSizeChange={() => {}}
      />,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Per Page')).toBeInTheDocument()
    expect(screen.getByText('Showing 11-20 of 95')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('clamps the last row to the total item count', () => {
    render(
      <ItemCount
        pageSize={50}
        currentPage={1}
        totalItems={30}
        showItemCountText
      />,
    )

    expect(screen.getByText('Showing 1-30 of 30')).toBeInTheDocument()
  })

  it('shows zero rows when the list is empty', () => {
    render(
      <ItemCount
        pageSize={10}
        currentPage={1}
        totalItems={0}
        showItemCountText
      />,
    )

    expect(screen.getByText('Showing 0-0 of 0')).toBeInTheDocument()
  })

  it('hides the showing text unless requested and supports localized labels', () => {
    render(
      <ItemCount
        pageSize={10}
        currentPage={1}
        totalItems={100}
        labels={{
          perPageLabel: 'Por página',
        }}
      />,
    )

    expect(screen.getByText('Por página')).toBeInTheDocument()
    expect(screen.queryByText(/Showing/)).not.toBeInTheDocument()

    render(
      <ItemCount
        pageSize={10}
        currentPage={1}
        totalItems={100}
        showItemCountText
        labels={{
          showingLabel: (start, end, total) =>
            `Viendo ${start}-${end} de ${total}`,
        }}
      />,
    )

    expect(screen.getByText('Viendo 1-10 de 100')).toBeInTheDocument()
  })
})
