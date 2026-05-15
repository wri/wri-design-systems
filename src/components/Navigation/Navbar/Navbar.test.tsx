import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Navbar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const LinkRouter = ({ children, href }: any) => <a href={href}>{children}</a>

describe('Navbar — accessibility', () => {
  it('renders navigation and has no violations', async () => {
    const { container } = render(
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
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
