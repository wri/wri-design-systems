import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Search from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Search — accessibility', () => {
  it('renders search input and has no violations', async () => {
    const { container } = render(
      <Search
        options={[
          { id: 'forest', label: 'Forest monitor' },
          { id: 'water', label: 'Water risk layer' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
