import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toast from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Toast', () => {
  it('renders without crashing', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('renders without crashing with custom labels', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Toast />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
