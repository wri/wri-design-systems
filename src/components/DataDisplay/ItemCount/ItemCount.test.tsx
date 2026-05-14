import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ItemCount from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ItemCount — accessibility', () => {
  it('renders with pagination values and has no violations', async () => {
    const { container } = render(
      <ItemCount
        pageSize={10}
        currentPage={1}
        totalItems={100}
        onPageSizeChange={() => {}}
        showItemCountText
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
