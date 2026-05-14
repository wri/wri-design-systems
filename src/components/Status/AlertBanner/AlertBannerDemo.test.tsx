import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import AlertBannerDemo from './AlertBannerDemo'

jest.mock('../..', () => ({
  AlertBanner: jest.requireActual('.').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('AlertBannerDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<AlertBannerDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
