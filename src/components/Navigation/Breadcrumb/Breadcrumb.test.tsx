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
})
