import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import RadioListDemo from './RadioListDemo'

jest.mock('../../..', () => ({
  RadioList: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('RadioListDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<RadioListDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
