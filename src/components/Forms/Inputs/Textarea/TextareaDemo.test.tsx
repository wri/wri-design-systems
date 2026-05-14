import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import TextareaDemo from './TextareaDemo'

jest.mock('../../..', () => ({
  Textarea: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('TextareaDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<TextareaDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
