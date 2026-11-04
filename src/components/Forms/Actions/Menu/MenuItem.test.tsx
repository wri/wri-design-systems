import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MenuItem from './MenuItem'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const labels = {
  menuAriaLabel: 'Menu',
  submenuAriaLabel: (label: string) => `${label} submenu`,
  shortcutPrefix: 'Shortcut',
} as any

describe('MenuItem', () => {
  it('renders label, caption and keyboard shortcut with its aria label, with no a11y violations', async () => {
    const { container } = render(
      <div role='menu'>
        <MenuItem
          labels={labels}
          item={{
            label: 'Duplicate layer',
            caption: 'Makes a copy',
            command: '⌘D',
            value: 'dup',
          }}
        />
      </div>,
    )

    const item = screen.getByRole('menuitem', { name: 'Duplicate layer' })

    expect(item).toHaveTextContent('Duplicate layer')
    expect(item.querySelector('.ds-menu-item-caption')).toHaveTextContent(
      'Makes a copy',
    )
    expect(screen.getByLabelText('Shortcut ⌘D')).toHaveTextContent('⌘D')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('shows the check icon when checked and the end icon otherwise', () => {
    const { rerender } = render(
      <MenuItem
        labels={labels}
        item={{ label: 'Grid view', value: 'grid', endIcon: <span>X</span> }}
      />,
    )

    expect(screen.queryByRole('menuitem', { name: 'Grid view' })).not.toBeNull()
    expect(screen.getByText('X')).toBeInTheDocument()

    rerender(
      <MenuItem
        labels={labels}
        item={{ label: 'Grid view', value: 'grid' }}
        isChecked
      />,
    )

    // The checked state swaps the end icon for the check mark icon.
    const item = screen.getByRole('menuitem', { name: 'Grid view' })

    expect(item.querySelector('svg')).not.toBeNull()
    expect(screen.queryByText('X')).toBeNull()
  })

  it('renders link items as anchors, disabled links as inert', () => {
    const { rerender } = render(
      <MenuItem
        labels={labels}
        item={{ label: 'Docs', value: 'docs', link: '/docs' }}
      />,
    )

    const link = screen.getByRole('link', { name: 'Docs' })

    expect(link).toHaveAttribute('href', '/docs')

    rerender(
      <MenuItem
        labels={labels}
        item={{ label: 'Docs', value: 'docs', link: '/docs', disabled: true }}
      />,
    )

    const disabledLink = screen.getByRole('link', { name: 'Docs' })

    expect(disabledLink).toHaveAttribute('aria-disabled', 'true')
    expect(disabledLink).toHaveAttribute('tabindex', '-1')

    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    disabledLink.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
  })

  it('renders a custom children node inside the item body', () => {
    render(
      <MenuItem
        labels={labels}
        item={{
          label: 'Custom',
          value: 'custom',
          children: <div>Custom body</div>,
        }}
      />,
    )

    const item = screen.getByRole('menuitem', { name: 'Custom' })

    expect(item.querySelector('div')).toHaveTextContent('Custom body')
  })
})
