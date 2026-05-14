import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ProgressBarDemo from './ProgressBarDemo'

jest.mock('../..', () => ({
  ProgressBar: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ProgressBarDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<ProgressBarDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
