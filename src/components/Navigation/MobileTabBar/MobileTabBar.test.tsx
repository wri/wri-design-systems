import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MobileTabBar from '.'
import { PlaceholderIcon } from '../../icons'

/**
 * The shared mock's Tabs.Trigger doesn't wire clicks to the Root's
 * `onValueChange`; extend it with the same context-based pattern TabBar.test
 * uses so tab selection can be exercised.
 */
jest.mock('@chakra-ui/react', () => {
  const React = jest.requireActual('react')
  const base = jest.requireActual('../../testUtils').createChakraMock()

  const TabsContext = React.createContext(() => {})

  const Tabs = {
    Root: ({ children, onValueChange }: any) =>
      React.createElement(
        TabsContext.Provider,
        { value: onValueChange ?? (() => {}) },
        React.createElement('div', null, children),
      ),
    List: base.Tabs.List,
    Trigger: ({
      children,
      value,
      disabled,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': ariaDisabled,
    }: any) => {
      const onValueChange = React.useContext(TabsContext)

      return React.createElement(
        'button',
        {
          type: 'button',
          role: 'tab',
          value,
          disabled,
          'aria-label': ariaLabel,
          'aria-describedby': ariaDescribedBy,
          'aria-disabled': ariaDisabled,
          onClick: () => onValueChange({ value }),
        },
        children,
      )
    },
    Content: base.Tabs.Content,
  }

  return { ...base, Tabs }
})

const tabs = [
  { label: 'Map', value: 'map', icon: <PlaceholderIcon /> },
  { label: 'Layers', value: 'layers', icon: <PlaceholderIcon />, bagdeCount: 2 },
  { label: 'Settings', value: 'settings', icon: <PlaceholderIcon /> },
]

describe('MobileTabBar', () => {
  it('renders one tab per entry with badges and hidden status text, with no a11y violations', async () => {
    const { container } = render(
      <MobileTabBar tabs={tabs} defaultValue='map' onTabClick={() => {}} />,
    )

    const tabsList = screen.getAllByRole('tab')

    expect(tabsList).toHaveLength(3)
    expect(tabsList[0]).toHaveAttribute('aria-label', 'Map')
    expect(container.querySelector('.ds-badge-count')).toHaveTextContent('2')
    expect(
      container.querySelector('#map-str-status'),
    ).toHaveTextContent('tab 1 of 3, selected')
    expect(
      container.querySelector('#layers-str-status'),
    ).toHaveTextContent('tab 2 of 3, not selected')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('defaults to the first tab when no defaultValue is given', () => {
    const { container } = render(<MobileTabBar tabs={tabs} />)

    expect(
      container.querySelector('#map-str-status'),
    ).toHaveTextContent('selected')
  })

  it('reports the selected tab value through onTabClick', () => {
    const onTabClick = jest.fn()
    const { container } = render(
      <MobileTabBar tabs={tabs} defaultValue='map' onTabClick={onTabClick} />,
    )

    fireEvent.click(screen.getByRole('tab', { name: 'Settings' }))

    expect(onTabClick).toHaveBeenCalledWith('settings')
    expect(
      container.querySelector('#settings-str-status'),
    ).toHaveTextContent('tab 3 of 3, selected')
    expect(
      container.querySelector('#map-str-status'),
    ).toHaveTextContent('not selected')
  })

  it('marks disabled tabs in their status description', () => {
    const { container } = render(
      <MobileTabBar
        tabs={[
          { label: 'Map', value: 'map', icon: <PlaceholderIcon /> },
          {
            label: 'Layers',
            value: 'layers',
            icon: <PlaceholderIcon />,
            disabled: true,
          },
        ]}
        defaultValue='map'
      />,
    )

    expect(
      container.querySelector('#layers-str-status'),
    ).toHaveTextContent('tab 2 of 2, not selected, disabled')
    expect(screen.getByRole('tab', { name: 'Layers' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  it('hides visible labels when hideLabels is set', () => {
    const { container } = render(<MobileTabBar tabs={tabs} hideLabels />)

    expect(container.querySelectorAll('p')).toHaveLength(0)
  })

  it('supports localized status text', () => {
    const { container } = render(
      <MobileTabBar
        tabs={tabs}
        defaultValue='map'
        labels={{
          tabPositionStatus: (index, total) => `pestaña ${index} de ${total}`,
          selectedStatus: 'seleccionada',
          notSelectedStatus: 'no seleccionada',
        }}
      />,
    )

    expect(
      container.querySelector('#map-str-status'),
    ).toHaveTextContent('pestaña 1 de 3, seleccionada')
  })
})
