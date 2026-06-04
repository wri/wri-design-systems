import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MobileSearch from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('MobileSearch — accessibility', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<MobileSearch />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
