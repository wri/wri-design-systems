import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Breadcrumb from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const LinkRouter = ({ children, href }: any) => <a href={href}>{children}</a>

describe('Breadcrumb — accessibility', () => {
  it('renders breadcrumb trail with no violations', async () => {
    const { container } = render(
      <Breadcrumb
        links={[
          { label: 'Home', link: '/' },
          { label: 'Data', link: '/data' },
          { label: 'Layer', link: '/data/layer' },
        ]}
        linkRouter={LinkRouter}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders collapsed overflow item as a list item and a button', () => {
    const { container } = render(
      <Breadcrumb
        links={[
          { label: 'Home', link: '/' },
          { label: 'Data', link: '/data' },
          { label: 'Layer', link: '/data/layer' },
          { label: 'Analysis', link: '/data/analysis' },
        ]}
        maxItems={2}
        linkRouter={LinkRouter}
      />,
    )

    // With the Chakra 3.27 HTML-validity fix, the collapse trigger must live
    // inside a list item, not as a bare element under the <ol>.
    const ellipsisButton = container.querySelector('button')
    expect(ellipsisButton).toBeInTheDocument()
    expect(ellipsisButton?.closest('ol')).toBe(
      container.querySelector('ol'),
    )
    expect(ellipsisButton?.closest('li')).not.toBeNull()
  })
})
