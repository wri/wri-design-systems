import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import InputWithUnitsDemo from './InputWithUnitsDemo'

jest.mock('../../..', () => ({
  InputWithUnits: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('InputWithUnitsDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<InputWithUnitsDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
