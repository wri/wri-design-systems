import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import TagDemo from './TagDemo'

jest.mock('../..', () => ({
  Tag: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../testUtils').createChakraMock(),
)

describe('TagDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<TagDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
