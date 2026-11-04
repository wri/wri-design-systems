import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Checkbox from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Checkbox', () => {
  it('renders a labelled checkbox with no a11y violations', async () => {
    const { container } = render(
      <Checkbox aria-label='Accept terms' checked>
        Accept terms
      </Checkbox>,
    )

    // A boolean `checked` is a React reserved prop the mock's label drops;
    // the check icon path is rendered for the checked state.
    expect(
      Array.from(container.querySelectorAll('path')).some((path) =>
        path.getAttribute('d')?.startsWith('M4.19632'),
      ),
    ).toBe(true)
    expect(
      screen.getByRole('checkbox', { name: 'Accept terms' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders unchecked by default', () => {
    const { container } = render(
      <Checkbox aria-label='Subscribe'>Subscribe</Checkbox>,
    )

    expect(
      screen.getByRole('checkbox', { name: 'Subscribe' }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(1)
  })

  it('renders the indeterminate icon for partially selected state', () => {
    const { container } = render(
      <Checkbox aria-label='Select all' indeterminate>
        Select all
      </Checkbox>,
    )

    // indeterminate maps to the string 'indeterminate' on the mocked Root.
    expect(container.querySelector('label')).toHaveAttribute(
      'checked',
      'indeterminate',
    )
    // The indeterminate dash icon replaces the check icon.
    expect(
      Array.from(container.querySelectorAll('path')).some((path) =>
        path.getAttribute('d')?.startsWith('M0 6.75'),
      ),
    ).toBe(true)
  })

  it('renders a disabled checkbox with no a11y violations', async () => {
    const { container } = render(
      <Checkbox aria-label='Locked option' disabled>
        Locked option
      </Checkbox>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
