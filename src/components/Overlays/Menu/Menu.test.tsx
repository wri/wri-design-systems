import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Menu from '.'
import { menuNavbarItemStyles, menuTriggerChevronStyles } from './styled'
import { getThemedColor } from '../../../lib/theme'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

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

describe('Menu — link items', () => {
  it('renders an anchor with the correct href for a linked item', () => {
    render(
      <Menu
        label='Links'
        items={[
          {
            label: 'Open docs',
            value: 'docs',
            link: 'https://example.com/docs',
          },
        ]}
      />,
    )
    const anchor = screen.getByRole('link', { name: /open docs/i })
    expect(anchor).toHaveAttribute('href', 'https://example.com/docs')
  })

  it('marks a disabled linked item as aria-disabled and keeps the href', () => {
    render(
      <Menu
        label='Links'
        items={[
          {
            label: 'Disabled link',
            value: 'disabled',
            link: 'https://example.com',
            disabled: true,
          },
        ]}
      />,
    )
    const anchor = screen.getByRole('link', { name: /disabled link/i })
    expect(anchor).toHaveAttribute('href', 'https://example.com')
    expect(anchor).toHaveAttribute('aria-disabled', 'true')
  })
})

describe('Menu — trigger variants', () => {
  it('renders the built-in trigger as a button named after the label', () => {
    render(<Menu label='Open Menu' items={items} />)

    expect(
      screen.getByRole('button', { name: 'Open Menu' }),
    ).toBeInTheDocument()
  })

  it.each(['primary', 'secondary', 'borderless', 'navbarItem'] as const)(
    'renders the %s trigger variant with no a11y violations',
    async (triggerVariant) => {
      const { container } = render(
        <Menu
          label='Open Menu'
          triggerVariant={triggerVariant}
          items={items}
        />,
      )

      expect(
        screen.getByRole('button', { name: 'Open Menu' }),
      ).toBeInTheDocument()
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('renders a different emotion class per trigger variant', () => {
    const { container: primary } = render(
      <Menu label='Open Menu' triggerVariant='primary' items={items} />,
    )
    const primaryClass = primary.querySelector('button')?.className

    const { container: secondary } = render(
      <Menu label='Open Menu' triggerVariant='secondary' items={items} />,
    )
    const secondaryClass = secondary.querySelector('button')?.className

    expect(primaryClass).not.toEqual(secondaryClass)
  })

  it('renders the dark navbarItem trigger with no a11y violations', async () => {
    const { container } = render(
      <Menu
        label='Open Menu'
        triggerVariant='navbarItem'
        theme='dark'
        items={items}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Open Menu' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a smaller trigger for size="small"', () => {
    const { container: defaultSize } = render(
      <Menu label='Open Menu' items={items} />,
    )
    const defaultClass = defaultSize.querySelector('button')?.className

    const { container: small } = render(
      <Menu label='Open Menu' size='small' items={items} />,
    )
    const smallClass = small.querySelector('button')?.className

    expect(defaultClass).not.toEqual(smallClass)
  })

  it('renders the left icon before the label on the built-in trigger', () => {
    render(
      <Menu
        label='Open Menu'
        items={items}
        triggerLeftIcon={<span data-testid='trigger-left-icon' />}
      />,
    )

    const button = screen.getByRole('button', { name: 'Open Menu' })
    const icon = button.querySelector<HTMLElement>(
      '[data-testid="trigger-left-icon"]',
    )

    expect(icon).toBeInTheDocument()
    expect(button.firstElementChild).toContainElement(icon)
  })

  it('renders the custom trigger instead of the built-in trigger', () => {
    render(
      <Menu
        label='Open Menu'
        items={items}
        customTrigger={
          <button type='button' aria-label='Custom trigger'>
            Custom
          </button>
        }
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Custom trigger' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Open Menu' }),
    ).not.toBeInTheDocument()
  })
})

describe('Menu — DS-406 trigger style contract', () => {
  it('tightens the label-to-chevron gap to 0.375rem on the built-in trigger', () => {
    expect(menuTriggerChevronStyles.styles).toMatch(
      /margin-left:\s*0\.375rem\s*!important/,
    )
  })

  it('sizes only the trailing chevron, not every icon in the trigger', () => {
    const { styles } = menuTriggerChevronStyles

    expect(styles).not.toMatch(/(^|[},])\s*svg\s*\{/)
    expect(styles).toMatch(/:last-child[^{]*svg\s*\{[^}]*0\.625rem/s)
  })
})

describe('Menu — disabled trigger', () => {
  it('disables the built-in Button trigger', () => {
    render(<Menu label='Open Menu' disabled items={items} />)

    expect(screen.getByRole('button', { name: 'Open Menu' })).toBeDisabled()
  })

  it('disables the navbarItem trigger', () => {
    render(
      <Menu
        label='Open Menu'
        triggerVariant='navbarItem'
        disabled
        items={items}
      />,
    )

    expect(screen.getByRole('button', { name: 'Open Menu' })).toBeDisabled()
  })
})

describe('Menu — navbarItem theme style contract', () => {
  it('renders dark-theme trigger text in the light neutral color', () => {
    const darkStyles = menuNavbarItemStyles('default', 'dark').styles
    const lightStyles = menuNavbarItemStyles('default', 'light').styles

    expect(darkStyles).not.toEqual(lightStyles)
    expect(darkStyles).toContain(getThemedColor('neutral', 100))
    expect(lightStyles).toContain(getThemedColor('neutral', 900))
  })

  it('keeps the dark-theme trigger hover transparent', () => {
    expect(menuNavbarItemStyles('default', 'dark').styles).toMatch(
      /&:hover\s*\{[^}]*background-color:\s*transparent/s,
    )
  })
})

describe('Menu — navbarItem active state', () => {
  it('only marks the navbarItem trigger with aria-current', () => {
    render(
      <Menu label='Open Menu' triggerVariant='secondary' active items={items} />,
    )
    expect(
      screen.getByRole('button', { name: 'Open Menu' }),
    ).not.toHaveAttribute('aria-current')
  })

  it('marks the trigger with aria-current when active only', () => {
    const { rerender } = render(
      <Menu label='Open Menu' triggerVariant='navbarItem' items={items} />,
    )
    expect(
      screen.getByRole('button', { name: 'Open Menu' }),
    ).not.toHaveAttribute('aria-current')

    rerender(
      <Menu
        label='Open Menu'
        triggerVariant='navbarItem'
        active
        items={items}
      />,
    )
    expect(screen.getByRole('button', { name: 'Open Menu' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('renders the active navbarItem trigger with no a11y violations', async () => {
    const { container } = render(
      <Menu
        label='Open Menu'
        triggerVariant='navbarItem'
        active
        items={items}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('styles the active light-theme trigger like the active Navbar link', () => {
    const activeLightStyles = menuNavbarItemStyles(
      'default',
      'light',
      true,
    ).styles

    expect(activeLightStyles).toMatch(/font-weight:\s*700/)
    expect(activeLightStyles).toContain(
      getThemedColor('accessible', 'controls-on-neutral-lights'),
    )
  })

  it('keeps the dark-theme active trigger in the light neutral color', () => {
    const activeDarkStyles = menuNavbarItemStyles(
      'default',
      'dark',
      true,
    ).styles

    expect(activeDarkStyles).toMatch(/font-weight:\s*700/)
    const [, textColor] = activeDarkStyles.match(/color:\s*([^;]+);/) ?? []
    expect(textColor).toBe(getThemedColor('neutral', 100))
    expect(textColor).not.toBe(
      getThemedColor('accessible', 'controls-on-neutral-lights'),
    )
  })
})
