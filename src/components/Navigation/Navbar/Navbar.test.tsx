import { render, fireEvent, act } from '@testing-library/react'
import { axe } from 'jest-axe'

import Navbar from '.'

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

const LinkRouter = ({ children, href }: any) => <a href={href}>{children}</a>

const renderNavbar = (props = {}) =>
  render(
    <Navbar
      linkRouter={LinkRouter}
      pathname='/'
      navigationSection={[
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
      ]}
      utilitySection={[
        <a key='help' href='/help'>
          Help
        </a>,
      ]}
      actionsSection={[{ ariaLabel: 'Sign in', children: 'Sign in' }]}
      {...props}
    />,
  )

describe('Navbar — accessibility', () => {
  beforeEach(() => setWindowWidth(1280))

  it('renders navigation and has no violations', async () => {
    const { container } = renderNavbar()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the mobile menu with no violations', async () => {
    setWindowWidth(800)
    const { container, getByRole } = renderNavbar()

    fireEvent.click(getByRole('button', { name: 'Open menu' }))

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Navbar — desktop', () => {
  beforeEach(() => setWindowWidth(1280))

  it('renders navigation links through the link router', () => {
    const { getByRole } = renderNavbar()

    expect(getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    )
  })

  it('renders utility section children', () => {
    const { getByRole } = renderNavbar()

    expect(getByRole('link', { name: 'Help' })).toHaveAttribute('href', '/help')
  })

  it('renders action buttons', () => {
    const { getByRole } = renderNavbar()

    expect(getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('renders the logo slot', () => {
    const { getByText } = renderNavbar({ logo: <span>WRI Logo</span> })

    expect(getByText('WRI Logo')).toBeInTheDocument()
  })

  it('highlights the active pathname link', () => {
    const { getByRole } = renderNavbar({ pathname: '/about' })

    expect(getByRole('link', { name: 'About' })).toBeInTheDocument()
  })
})

describe('Navbar — mobile', () => {
  beforeEach(() => setWindowWidth(800))

  it('renders a menu toggle instead of the action buttons', () => {
    const { getByRole, queryByRole } = renderNavbar()

    expect(getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Sign in' })).toBeNull()
  })

  it('toggles the menu open and closed', () => {
    const { getByRole } = renderNavbar()

    fireEvent.click(getByRole('button', { name: 'Open menu' }))
    expect(getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    fireEvent.click(getByRole('button', { name: 'Close menu' }))
    expect(getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('reports aria-expanded on the menu toggle', () => {
    const { getByRole } = renderNavbar()

    const toggle = getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
