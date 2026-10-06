import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import TabBar from '.'
import { PlaceholderIcon } from '../../icons'

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
    List: ({ children }: any) =>
      React.createElement('div', { role: 'tablist' }, children),
    Trigger: ({ children, value, disabled, 'aria-label': ariaLabel }: any) => {
      const onValueChange = React.useContext(TabsContext)
      return React.createElement(
        'button',
        {
          type: 'button',
          role: 'tab',
          value,
          disabled,
          'aria-label': ariaLabel,
          onClick: () => onValueChange({ value }),
        },
        children,
      )
    },
    Content: base.Tabs.Content,
  }

  return { ...base, Tabs }
})

const threeTabs = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
]

const getDividers = (container: HTMLElement) =>
  container.querySelectorAll('[role="tablist"] > div')

describe('TabBar — accessibility', () => {
  it('renders tabs and has no violations', async () => {
    const { container } = render(
      <TabBar
        tabs={[
          { label: 'Overview', value: 'overview' },
          { label: 'Details', value: 'details' },
          { label: 'Stats', value: 'stats' },
        ]}
        defaultValue='overview'
        onTabClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the view variant with icons and has no violations', async () => {
    const { container } = render(
      <TabBar
        variant='view'
        tabs={[
          { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
          { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
        ]}
        defaultValue='one'
        onTabClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('TabBar — view variant divider', () => {
  it('does not render a divider after the last tab', () => {
    const { container } = render(
      <TabBar
        variant='view'
        tabs={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
        ]}
        defaultValue='one'
      />,
    )

    expect(getDividers(container)).toHaveLength(0)
  })

  it('does not render a divider after selecting the last tab', () => {
    const { container, getByRole } = render(
      <TabBar
        variant='view'
        tabs={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
        ]}
        defaultValue='one'
      />,
    )

    fireEvent.click(getByRole('tab', { name: 'Two' }))

    expect(getDividers(container)).toHaveLength(0)
  })

  it('renders a divider after the second tab when the first tab is selected', () => {
    const { container, getByRole } = render(
      <TabBar variant='view' tabs={threeTabs} defaultValue='one' />,
    )

    const two = getByRole('tab', { name: 'Two' })
    const three = getByRole('tab', { name: 'Three' })

    expect(getDividers(container)).toHaveLength(1)
    expect(two.nextElementSibling?.tagName).toBe('DIV')
    expect(three.previousElementSibling?.tagName).toBe('DIV')
  })

  it('renders a divider before the second tab when the third tab is selected', () => {
    const { container, getByRole } = render(
      <TabBar variant='view' tabs={threeTabs} defaultValue='three' />,
    )

    const one = getByRole('tab', { name: 'One' })
    const two = getByRole('tab', { name: 'Two' })

    expect(getDividers(container)).toHaveLength(1)
    expect(one.nextElementSibling?.tagName).toBe('DIV')
    expect(two.previousElementSibling?.tagName).toBe('DIV')
  })

  it('does not render a divider when the second tab is selected', () => {
    const { container } = render(
      <TabBar variant='view' tabs={threeTabs} defaultValue='two' />,
    )

    expect(getDividers(container)).toHaveLength(0)
  })

  it('moves the divider when the selected tab changes', () => {
    const onTabClick = jest.fn()
    const { container, getByRole } = render(
      <TabBar
        variant='view'
        tabs={threeTabs}
        defaultValue='one'
        onTabClick={onTabClick}
      />,
    )

    const two = getByRole('tab', { name: 'Two' })

    expect(two.nextElementSibling?.tagName).toBe('DIV')

    fireEvent.click(getByRole('tab', { name: 'Three' }))
    expect(onTabClick).toHaveBeenLastCalledWith('three')
    expect(two.previousElementSibling?.tagName).toBe('DIV')
    expect(getDividers(container)).toHaveLength(1)

    fireEvent.click(two)
    expect(onTabClick).toHaveBeenLastCalledWith('two')
    expect(getDividers(container)).toHaveLength(0)

    fireEvent.click(getByRole('tab', { name: 'One' }))
    expect(onTabClick).toHaveBeenLastCalledWith('one')
    expect(two.nextElementSibling?.tagName).toBe('DIV')
    expect(getDividers(container)).toHaveLength(1)
  })

  it('never renders a divider for non-view variants', () => {
    const { container: panel } = render(
      <TabBar variant='panel' tabs={threeTabs} defaultValue='one' />,
    )
    const { container: transparent } = render(
      <TabBar variant='transparent' tabs={threeTabs} defaultValue='three' />,
    )

    expect(getDividers(panel)).toHaveLength(0)
    expect(getDividers(transparent)).toHaveLength(0)
  })
})
