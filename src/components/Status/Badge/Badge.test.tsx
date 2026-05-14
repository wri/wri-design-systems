import { render, act } from '@testing-library/react'
import { axe } from 'jest-axe'

import Badge from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const setWindowWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

describe('Badge', () => {
  beforeEach(() => {
    setWindowWidth(1280) // desktop by default
  })

  it('renders notification count', () => {
    const { getByText } = render(
      <Badge notificationCount={5} hasNotification />,
    )
    expect(getByText('5')).toBeInTheDocument()
  })

  it('displays 99+ when notificationCount exceeds 99', () => {
    const { getAllByText } = render(
      <Badge notificationCount={100} hasNotification />,
    )
    expect(getAllByText('99+').length).toBeGreaterThan(0)
  })

  it('renders a label', () => {
    const { getByText } = render(<Badge label='Alerts' />)
    expect(getByText('Alerts')).toBeInTheDocument()
  })

  it('renders on mobile (tablet) layout when width < 1024', () => {
    setWindowWidth(768)
    const { getByRole } = render(
      <Badge notificationCount={3} hasNotification />,
    )
    expect(getByRole('status')).toBeInTheDocument()
  })

  it('has no accessibility violations (desktop)', async () => {
    const { container } = render(
      <Badge notificationCount={2} hasNotification label='Notifications' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations (tablet)', async () => {
    setWindowWidth(600)
    const { container } = render(
      <Badge notificationCount={2} hasNotification label='Notifications' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
