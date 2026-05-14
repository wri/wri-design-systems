import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CheckboxListDemo from './CheckboxListDemo'

jest.mock('../../..', () => ({
  CheckboxList: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('CheckboxListDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<CheckboxListDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
