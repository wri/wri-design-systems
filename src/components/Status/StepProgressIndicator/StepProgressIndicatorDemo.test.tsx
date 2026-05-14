import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import StepProgressIndicatorDemo from './StepProgressIndicatorDemo'

jest.mock('../..', () => ({
  Button: jest.requireActual('../../Forms/Actions/Button').default,
  StepProgressIndicator: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('StepProgressIndicatorDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<StepProgressIndicatorDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
