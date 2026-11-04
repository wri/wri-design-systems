import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Switch from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Switch', () => {
  it('renders a labelled switch bound to its name with no a11y violations', async () => {
    const { container } = render(
      <Switch name='notifications' aria-label='Email notifications'>
        Email notifications
      </Switch>,
    )

    const input = screen.getByRole('checkbox', { name: 'Email notifications' })
    const label = input.closest('label')

    expect(label).toHaveAttribute('id', 'notifications')
    expect(label).toHaveAttribute('name', 'notifications')
    expect(input).not.toHaveAttribute('checked')
    expect(screen.getByText('Email notifications')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the default accessible label from the switch name', () => {
    render(<Switch name='bluetooth' />)

    expect(
      screen.getByRole('checkbox', { name: 'bluetooth' }),
    ).toBeInTheDocument()
  })

  it('places the label to the left when isLabelOnLeft is set', () => {
    render(
      <Switch name='wifi' aria-label='Wi-Fi' isLabelOnLeft>
        Wi-Fi
      </Switch>,
    )

    const label = screen
      .getByRole('checkbox', { name: 'Wi-Fi' })
      .closest('label')

    expect(label).toHaveTextContent('Wi-Fi')
  })

  it('renders a disabled switch with no a11y violations', async () => {
    const { container } = render(
      <Switch name='locked' aria-label='Locked switch' disabled>
        Locked switch
      </Switch>,
    )

    expect(screen.getByText('Locked switch')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})
