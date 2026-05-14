import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import InlineMessageDemo from './InlineMessageDemo'

jest.mock('../..', () => ({
  InlineMessage: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('InlineMessageDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<InlineMessageDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
