/* eslint-disable class-methods-use-this */
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toolbar from '.'

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
      Trigger: ({ children, ...rest }: any) =>
        React.createElement('div', clean(rest), children),
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
    Tooltip: {
      Root: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Trigger: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement('span', { ref, ...clean(rest) }, children),
      ),
      Content: ({ children, ...rest }: any) =>
        React.createElement(
          'div',
          { role: 'tooltip', ...clean(rest) },
          children,
        ),
      Positioner: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Arrow: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      ArrowTip: () => null,
    },
  }
})

// ResizeObserver is not available in jsdom — polyfill it for this test
global.ResizeObserver = class ResizeObserver
  implements globalThis.ResizeObserver
{
  observe(_target: Element, _options?: ResizeObserverOptions): void {}

  unobserve(_target: Element): void {}

  disconnect(): void {}
}

const MockIcon = () => (
  <svg aria-hidden='true' viewBox='0 0 24 24' focusable='false'>
    <path d='M5 12h14' />
  </svg>
)

const toolbarItems = [
  {
    icon: <MockIcon />,
    ariaLabel: 'Download',
    label: 'Download',
    onClick: () => {},
  },
  { icon: <MockIcon />, ariaLabel: 'Share', label: 'Share', onClick: () => {} },
  {
    icon: <MockIcon />,
    ariaLabel: 'Print',
    label: 'Print',
    disabled: true,
    onClick: () => {},
  },
]

describe('Toolbar — accessibility', () => {
  it('renders a horizontal toolbar with items and has no violations', async () => {
    const { container } = render(
      <Toolbar items={toolbarItems} ariaLabel='Document actions' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a vertical toolbar with items and has no violations', async () => {
    const { container } = render(
      <Toolbar items={toolbarItems} vertical ariaLabel='Sidebar actions' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders in expanded state and has no violations', async () => {
    const { container } = render(
      <Toolbar items={toolbarItems} expanded ariaLabel='Expanded toolbar' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
