import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import PasswordDemo from './PasswordDemo'

jest.mock('../../..', () => ({
  Password: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('PasswordDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<PasswordDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
