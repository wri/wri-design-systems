import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Breadcrumb from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const LinkRouter = ({ children, href }: any) => <a href={href}>{children}</a>

describe('Breadcrumb', () => {
  it('renders links as anchors and the current page as text, with no a11y violations', async () => {
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

    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    )
    expect(screen.getByRole('link', { name: 'Data' })).toHaveAttribute(
      'href',
      '/data',
    )
    expect(
      screen.queryByRole('link', { name: 'Layer' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Layer').getAttribute('aria-current')).toBe('page')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('collapses long trails behind an ellipsis button that expands them', () => {
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

    const ellipsis = screen.getByRole('button', {
      name: 'Show hidden breadcrumb items',
    })

    // With the Chakra 3.27 HTML-validity fix, the collapse trigger must live
    // inside a list item, not as a bare element under the <ol>.
    expect(ellipsis.closest('ol')).toBe(container.querySelector('ol'))
    expect(ellipsis.closest('li')).not.toBeNull()

    fireEvent.click(ellipsis)

    expect(
      screen.queryByRole('button', { name: 'Show hidden breadcrumb items' }),
    ).toBeNull()
    expect(screen.getByRole('link', { name: 'Data' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Layer' })).toBeInTheDocument()
  })

  it('keeps the collapsed trail showing the first and last links', () => {
    render(
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

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByText('Analysis').getAttribute('aria-current')).toBe(
      'page',
    )
  })

  it('renders small size without a11y violations', async () => {
    const { container } = render(
      <Breadcrumb
        size='small'
        links={[
          { label: 'Home', link: '/' },
          { label: 'Layers', link: '/layers' },
        ]}
        linkRouter={LinkRouter}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
