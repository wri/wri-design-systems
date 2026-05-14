import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ComboboxDemo from './ComboboxDemo'

jest.mock('../../..', () => ({
  Combobox: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ComboboxDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<ComboboxDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
