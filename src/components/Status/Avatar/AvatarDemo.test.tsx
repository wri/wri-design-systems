import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import AvatarDemo from './AvatarDemo'

jest.mock('../..', () => ({
  Avatar: jest.requireActual('.').default,
  Tooltip: jest.requireActual('../../Forms/Actions/Tooltip').default,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('AvatarDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<AvatarDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
