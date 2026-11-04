import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Pagination from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const renderPagination = (props = {}) =>
  render(
    <Pagination
      currentPage={1}
      totalItems={30}
      pageSize={10}
      onPageChange={() => {}}
      {...props}
    />,
  )

describe('Pagination — accessibility', () => {
  it('renders pagination controls and has no violations', async () => {
    const { container } = renderPagination()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the compact variant with no violations', async () => {
    const { container } = renderPagination({ variant: 'compact' })

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the compact-with-buttons variant with no violations', async () => {
    const { container } = renderPagination({ variant: 'compact-with-buttons' })

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Pagination — default variant', () => {
  it('renders a page button per page in the mock range', () => {
    const { getByRole } = renderPagination()

    expect(getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Page 2' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Page 3' })).toBeInTheDocument()
  })

  it('renders previous and next page buttons', () => {
    const { getByRole } = renderPagination()

    expect(getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Next page' })).toBeInTheDocument()
  })

  it('labels the outer wrapper as Pagination', () => {
    const { getAllByLabelText } = renderPagination()

    // The wrapper div and the mock nav both carry the label.
    expect(getAllByLabelText('Pagination').length).toBeGreaterThan(0)
  })
})

describe('Pagination — compact variants', () => {
  it('renders Previous/Next labeled buttons in compact-with-buttons', () => {
    const { getByRole, queryByRole } = renderPagination({
      variant: 'compact-with-buttons',
    })

    expect(getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Next' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Page 1' })).toBeNull()
  })

  it('renders icon buttons in the compact variant', () => {
    const { getByRole, queryByRole } = renderPagination({ variant: 'compact' })

    expect(getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Page 1' })).toBeNull()
  })
})
