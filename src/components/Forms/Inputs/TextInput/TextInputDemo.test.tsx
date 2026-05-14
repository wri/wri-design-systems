import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import TextInputDemo from './TextInputDemo'

jest.mock('../../..', () => ({
  TextInput: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('TextInputDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<TextInputDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
