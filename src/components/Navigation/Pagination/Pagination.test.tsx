import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Pagination from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Pagination — accessibility', () => {
  it('renders pagination controls and has no violations', async () => {
    const { container } = render(
      <Pagination
        currentPage={1}
        totalItems={30}
        pageSize={10}
        onPageChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
