import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import FormContainerDemo from './FormContainerDemo'

jest.mock('../..', () => ({
  Checkbox: jest.requireActual('../Controls/Checkbox').default,
  FormContainer: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../testUtils').createChakraMock(),
)

describe('FormContainerDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<FormContainerDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
