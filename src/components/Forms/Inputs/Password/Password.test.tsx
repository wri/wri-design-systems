import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Password from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Password — accessibility', () => {
  it('renders with label and caption and has no violations', async () => {
    const { container } = render(
      <Password
        label='Password'
        caption='Use at least 8 characters'
        minLength={8}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
