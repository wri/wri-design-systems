import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import NavbarMobile from './NavbarMobile'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const LinkRouter = ({ children, href, onClick }: any) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
)

const resolvedLabels = {
  openMenuLabel: 'Open menu',
  closeLabel: 'Close',
  menuLabel: 'Menu',
  goBackLabel: 'Go back',
  closeMenuLabel: 'Close menu',
  closeButtonText: 'Close',
} as any

const renderMobile = (props: Record<string, any> = {}) => {
  const setIsOpen = jest.fn()

  const view = render(
    <NavbarMobile
      isOpen
      setIsOpen={setIsOpen}
      resolvedLabels={resolvedLabels}
      linkRouter={LinkRouter}
      pathname='/'
      utilitySection={[
        <a key='help' href='/help'>
          Help
        </a>,
      ]}
      navigationSection={[
        { label: 'Home', link: '/home' },
        { label: 'Explore', items: [{ label: 'Forests', link: '/forests' }] },
      ]}
      actionsSection={[
        { ariaLabel: 'Sign in', children: 'Sign in', onClick: jest.fn() },
      ]}
      {...props}
    />,
  )

  return { ...view, setIsOpen }
}

describe('NavbarMobile', () => {
  it('renders the open menu with links, submenu triggers and actions, with no a11y violations', async () => {
    const { container } = renderMobile()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/home',
    )
    expect(screen.getByRole('link', { name: 'Help' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders nothing but empty containers when closed', () => {
    renderMobile({ isOpen: false })

    expect(screen.queryByRole('link', { name: 'Home' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Sign in' })).toBeNull()
  })

  it('opens a submenu panel with go-back, close and child links', () => {
    renderMobile()

    fireEvent.click(screen.getByRole('button', { name: 'Explore' }))

    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Close menu' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forests' })).toHaveAttribute(
      'href',
      '/forests',
    )
  })

  it('returns to the top-level list through the go-back button', () => {
    renderMobile()

    fireEvent.click(screen.getByRole('button', { name: 'Explore' }))
    fireEvent.click(screen.getByRole('button', { name: 'Go back' }))

    expect(screen.queryByRole('button', { name: 'Go back' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Forests' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Explore' })).toBeInTheDocument()
  })

  it('closes the menu from the submenu close button', () => {
    const { setIsOpen } = renderMobile()

    fireEvent.click(screen.getByRole('button', { name: 'Explore' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(setIsOpen).toHaveBeenCalledWith(false)
  })

  it('closes the menu when a top-level link is clicked', () => {
    const { setIsOpen } = renderMobile()

    fireEvent.click(screen.getByRole('link', { name: 'Home' }))

    expect(setIsOpen).toHaveBeenCalledWith(false)
  })

  it('fires the action handler and closes the menu', () => {
    const onSignIn = jest.fn()
    const { setIsOpen } = renderMobile({
      actionsSection: [
        { ariaLabel: 'Sign in', children: 'Sign in', onClick: onSignIn },
      ],
    })

    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    expect(onSignIn).toHaveBeenCalledTimes(1)
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})
