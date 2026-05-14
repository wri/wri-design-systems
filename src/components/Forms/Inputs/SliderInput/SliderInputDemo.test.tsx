import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import SliderInputDemo from './SliderInputDemo'

jest.mock('../../..', () => ({
  SliderInput: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('SliderInputDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<SliderInputDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
