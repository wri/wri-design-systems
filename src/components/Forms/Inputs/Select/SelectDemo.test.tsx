import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import SelectDemo from './SelectDemo'

jest.mock('../../..', () => ({
  Select: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('SelectDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<SelectDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
