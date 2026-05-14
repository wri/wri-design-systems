import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import BadgeDemo from './BadgeDemo'

jest.mock('../..', () => ({
  Badge: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('BadgeDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<BadgeDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
