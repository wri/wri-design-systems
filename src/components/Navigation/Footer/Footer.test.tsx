import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Footer from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Footer', () => {
  it('renders the WRI copyright line and children links with no a11y violations', async () => {
    const { container } = render(
      <Footer>
        <a href='/privacy'>Privacy policy</a>
        <a href='/terms'>Terms of service</a>
      </Footer>,
    )

    const banner = screen.getByRole('contentinfo')

    expect(banner).toBeInTheDocument()
    expect(
      screen.getByText(/© World Resources Institute \d{4}/),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Privacy policy' }),
    ).toHaveAttribute('href', '/privacy')
    expect(
      screen.getByRole('link', { name: 'Terms of service' }),
    ).toHaveAttribute('href', '/terms')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('supports a custom label and additional partner logos', () => {
    render(
      <Footer
        label='Custom legal line'
        additionalLogos={[
          <img
            key='partner-logo'
            src='https://example.com/logo.png'
            alt='Partner logo'
          />,
        ]}
      >
        <a href='/privacy'>Privacy policy</a>
      </Footer>,
    )

    expect(screen.getByText(/Custom legal line \d{4}/)).toBeInTheDocument()
    expect(screen.getByAltText('Partner logo')).toBeInTheDocument()
  })
})
