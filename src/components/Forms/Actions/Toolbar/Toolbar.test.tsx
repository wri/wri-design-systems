/* eslint-disable class-methods-use-this */

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toolbar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

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

  it('marks an active item with aria-pressed and data-active', async () => {
    const { container } = render(
      <Toolbar
        items={[
          {
            icon: <MockIcon />,
            ariaLabel: 'Toggle polygons',
            label: 'Polygons',
            active: true,
            onClick: () => {},
          },
          {
            icon: <MockIcon />,
            ariaLabel: 'Share',
            label: 'Share',
            active: false,
            onClick: () => {},
          },
        ]}
        ariaLabel='Map layer controls'
      />,
    )

    const activeButton = screen.getByRole('button', {
      name: 'Toggle polygons',
    })
    const inactiveButton = screen.getByRole('button', { name: 'Share' })

    expect(activeButton).toHaveAttribute('aria-pressed', 'true')
    expect(activeButton).toHaveAttribute('data-active')
    expect(inactiveButton).toHaveAttribute('aria-pressed', 'false')
    expect(inactiveButton).not.toHaveAttribute('data-active')
    expect(await axe(container)).toHaveNoViolations()
  })
})
