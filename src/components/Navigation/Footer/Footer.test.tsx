import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Footer from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Footer — accessibility', () => {
  it('renders footer links and has no violations', async () => {
    const { container } = render(
      <Footer
        additionalLogos={[
          <img
            key='partner-logo'
            src='https://example.com/logo.png'
            alt='Partner logo'
          />,
        ]}
      >
        <a href='/privacy'>Privacy policy</a>
        <a href='/terms'>Terms of service</a>
      </Footer>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
