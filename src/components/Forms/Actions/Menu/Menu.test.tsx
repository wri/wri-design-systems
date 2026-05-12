import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Menu from '.'

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
    Portal: ({ children }: any) =>
      React.createElement(React.Fragment, {}, children),
    Menu: {
      Root: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      // Render as div (not button) to avoid nesting <button> inside <button> when asChild wraps a button trigger
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
  }
})

const items = [
  { label: 'Download CSV', value: 'csv', onClick: () => {} },
  { label: 'Download PDF', value: 'pdf', onClick: () => {} },
  { label: 'Print', value: 'print', disabled: true, onClick: () => {} },
]

describe('Menu — accessibility', () => {
  it('renders with a trigger label and items and has no violations', async () => {
    const { container } = render(<Menu label='Export options' items={items} />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with groups and has no violations', async () => {
    const { container } = render(
      <Menu
        label='Actions'
        groups={[
          { title: 'File', items: [{ label: 'Save', value: 'save' }] },
          { title: 'Edit', items: [{ label: 'Copy', value: 'copy' }] },
        ]}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a custom trigger and has no violations', async () => {
    const { container } = render(
      <Menu
        label='More'
        items={items}
        customTrigger={
          <button type='button' aria-label='Open export menu'>
            Export
          </button>
        }
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
