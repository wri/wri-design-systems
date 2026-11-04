import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import { SSOButtons } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../../testUtils').createChakraMock(),
)

describe('SSOButtons', () => {
  it('renders one accessible button per provider with no a11y violations', async () => {
    const { container } = render(
      <div>
        <SSOButtons.Google />
        <SSOButtons.Facebook />
        <SSOButtons.X />
        <SSOButtons.Microsoft />
      </div>,
    )

    expect(
      screen.getByRole('button', { name: 'Google Login' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Facebook Login' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'X Login' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Microsoft Login' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('forwards clicks to the provider handler', () => {
    const onGoogle = jest.fn()
    const onMicrosoft = jest.fn()
    render(
      <div>
        <SSOButtons.Google onClick={onGoogle} />
        <SSOButtons.Microsoft onClick={onMicrosoft} />
      </div>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Google Login' }))
    fireEvent.click(screen.getByRole('button', { name: 'Microsoft Login' }))

    expect(onGoogle).toHaveBeenCalledTimes(1)
    expect(onMicrosoft).toHaveBeenCalledTimes(1)
  })

  it('supports custom accessible names', () => {
    render(<SSOButtons.Microsoft ariaLabel='Iniciar sesión con Microsoft' />)

    expect(
      screen.getByRole('button', { name: 'Iniciar sesión con Microsoft' }),
    ).toBeInTheDocument()
  })
})
