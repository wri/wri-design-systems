import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CloseButton from '.'

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

describe('CloseButton — accessibility', () => {
  it('renders with default i18n aria-label and has no violations', async () => {
    // CloseButton sources its label from defaultLabels when no props override is given
    const { container } = render(<CloseButton />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with explicit aria-label and has no violations', async () => {
    const { container } = render(
      <CloseButton aria-label='Close notification' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(
      <CloseButton aria-label='Close dialog' disabled />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
