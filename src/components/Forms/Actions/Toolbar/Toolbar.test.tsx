/* eslint-disable class-methods-use-this */

import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toolbar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

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
