import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Button from '.'

// Mock @chakra-ui/react to avoid ESM parse errors from @zag-js/store
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

describe('Button — accessibility', () => {
  it('renders with text children and has no violations', async () => {
    const { container } = render(<Button>Save changes</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with label prop and has no violations', async () => {
    const { container } = render(<Button label='Submit form' />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(<Button disabled>Delete</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders in loading state and has no violations', async () => {
    const { container } = render(<Button loading>Submit</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders secondary variant and has no violations', async () => {
    const { container } = render(<Button variant='secondary'>Cancel</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders borderless variant and has no violations', async () => {
    const { container } = render(
      <Button variant='borderless'>Learn more</Button>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders outline variant and has no violations', async () => {
    const { container } = render(
      <Button variant='outline'>View details</Button>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
