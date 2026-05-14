import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Switch from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Switch — accessibility', () => {
  it('renders a labeled switch and has no violations', async () => {
    const { container } = render(
      <Switch name='notifications' aria-label='Email notifications'>
        Email notifications
      </Switch>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders label-on-left and disabled states with no violations', async () => {
    const { container } = render(
      <Switch
        name='updates'
        aria-label='Product updates'
        isLabelOnLeft
        disabled
      >
        Product updates
      </Switch>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
