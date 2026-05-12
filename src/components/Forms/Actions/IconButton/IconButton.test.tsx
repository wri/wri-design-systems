import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import IconButton from '.'

jest.mock('@chakra-ui/react', () => {
  const React = jest.requireActual('react')

  const allowed = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-disabled',
    'aria-expanded',
    'aria-haspopup',
    'aria-controls',
    'aria-pressed',
    'role',
    'id',
    'type',
    'disabled',
    'tabIndex',
    'className',
  ])
  const clean = (props: any) =>
    Object.fromEntries(
      Object.entries(props).filter(
        ([k]) => allowed.has(k) || k.startsWith('data-'),
      ),
    )

  return {
    createSystem: () => ({ tokens: { getVar: () => '' } }),
    defaultConfig: {},
    Box: React.forwardRef(({ children, ...rest }: any, ref: any) =>
      React.createElement('div', { ref, ...clean(rest) }, children),
    ),
    Spinner: ({ ...rest }: any) =>
      React.createElement('span', { role: 'status', ...clean(rest) }),
    Button: React.forwardRef(({ children, ...rest }: any, ref: any) =>
      React.createElement(
        'button',
        { ref, type: 'button', ...clean(rest) },
        children,
      ),
    ),
    Group: React.forwardRef(({ children, ...rest }: any, ref: any) =>
      React.createElement('div', { ref, ...clean(rest) }, children),
    ),
    Portal: ({ children }: any) =>
      React.createElement(React.Fragment, {}, children),
    Icon: React.forwardRef(({ children, ...rest }: any, ref: any) =>
      React.createElement(
        'span',
        { ref, 'aria-hidden': true, ...clean(rest) },
        children,
      ),
    ),
  }
})

const MockIcon = () => (
  <svg aria-hidden='true' viewBox='0 0 24 24' focusable='false'>
    <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z' />
  </svg>
)

describe('IconButton — accessibility', () => {
  it('renders with aria-label and has no violations', async () => {
    const { container } = render(
      <IconButton aria-label='Search' icon={<MockIcon />} />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled with aria-label and has no violations', async () => {
    const { container } = render(
      <IconButton aria-label='Add item' icon={<MockIcon />} disabled />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('reports a violation when aria-label is missing (icon-only button has no accessible name)', async () => {
    const { container } = render(<IconButton icon={<MockIcon />} />)
    const results = await axe(container)
    expect(results.violations.length).toBeGreaterThan(0)
  })
})
