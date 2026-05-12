import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MultiActionButton from '.'

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
    Menu: {
      Root: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      // Use div (not button) — Chakra injects aria props internally on the real trigger;
      // mocking as <button> would create false button-name violations for the chevron-only trigger
      Trigger: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement('div', { ref, ...clean(rest) }, children),
      ),
      Content: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement(
          'div',
          { ref, role: 'menu', ...clean(rest) },
          children,
        ),
      ),
      Positioner: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Item: ({ children, ...rest }: any) =>
        React.createElement(
          'div',
          { role: 'menuitem', ...clean(rest) },
          children,
        ),
      ItemCommand: ({ children, ...rest }: any) =>
        React.createElement('span', clean(rest), children),
      ItemText: ({ children, ...rest }: any) =>
        React.createElement('span', clean(rest), children),
      ItemGroupLabel: ({ children, ...rest }: any) =>
        React.createElement('div', clean(rest), children),
      ItemGroup: ({ children, ...rest }: any) =>
        React.createElement('div', clean(rest), children),
      Separator: () => React.createElement('div', { role: 'separator' }),
      Arrow: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      ArrowTip: () => null,
      TriggerItem: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement(
          'button',
          { ref, type: 'button', ...clean(rest) },
          children,
        ),
      ),
    },
    Icon: React.forwardRef(({ children, ...rest }: any, ref: any) =>
      React.createElement(
        'span',
        { ref, 'aria-hidden': true, ...clean(rest) },
        children,
      ),
    ),
  }
})

const extraActions = [
  { label: 'Export as PDF', value: 'pdf', onClick: () => {} },
  { label: 'Export as CSV', value: 'csv', onClick: () => {} },
]

describe('MultiActionButton — accessibility', () => {
  it('renders with main label and extra actions and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='secondary'
        mainActionLabel='Export'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        disabled
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
