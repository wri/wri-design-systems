import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Checkbox from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Checkbox — accessibility', () => {
  it('renders a labeled checkbox and has no violations', async () => {
    const { container } = render(
      <Checkbox aria-label='Accept terms' defaultChecked>
        Accept terms
      </Checkbox>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and indeterminate states with no violations', async () => {
    const { container } = render(
      <Checkbox aria-label='Select all' disabled indeterminate>
        Select all
      </Checkbox>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
