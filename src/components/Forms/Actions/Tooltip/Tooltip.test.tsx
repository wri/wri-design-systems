import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Tooltip from '.'

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

describe('Tooltip — accessibility', () => {
  it('wraps a button trigger and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Save to your library'>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with pill variant and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Required field' variant='pill'>
        <button type='button' aria-label='More info'>
          ?
        </button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('when disabled, renders children directly and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Save' disabled>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
