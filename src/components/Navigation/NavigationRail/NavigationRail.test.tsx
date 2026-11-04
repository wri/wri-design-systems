import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import NavigationRail from '.'
import { CheckIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const tabs = [
  { label: 'Layers', value: 'layers', icon: <CheckIcon /> },
  { label: 'Legend', value: 'legend', icon: <CheckIcon /> },
]

const renderRail = (props = {}) =>
  render(
    <NavigationRail
      tabs={tabs}
      defaultValue='layers'
      onTabClick={() => {}}
    >
      <div>Sidebar content</div>
    </NavigationRail>,
    props as any,
  )

describe('NavigationRail — accessibility', () => {
  it('renders tabs and panel content with no violations', async () => {
    const { container } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' onTabClick={() => {}}>
        <div>Sidebar content</div>
      </NavigationRail>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders without children with no violations', async () => {
    const { container } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('NavigationRail — tabs', () => {
  it('renders a tab trigger per tab', () => {
    const { getAllByRole } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' />,
    )

    const tabTriggers = getAllByRole('tab')
    expect(tabTriggers.length).toBeGreaterThanOrEqual(tabs.length)
  })

  it('renders tab labels', () => {
    const { getByText } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' />,
    )

    expect(getByText('Layers')).toBeInTheDocument()
    expect(getByText('Legend')).toBeInTheDocument()
  })

  it('renders tab icons', () => {
    const { container } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' />,
    )

    expect(container.querySelectorAll('svg').length).toBeGreaterThan(0)
  })
})

describe('NavigationRail — sidebar', () => {
  it('renders children in the panel', () => {
    const { getByText } = render(
      <NavigationRail tabs={tabs} defaultValue='layers'>
        <div>Sidebar content</div>
      </NavigationRail>,
    )

    expect(getByText('Sidebar content')).toBeInTheDocument()
  })

  it('renders the hide/show sidebar trigger when children exist', () => {
    const { getByRole } = render(
      <NavigationRail tabs={tabs} defaultValue='layers'>
        <div>Sidebar content</div>
      </NavigationRail>,
    )

    expect(getByRole('button', { name: /Hide Sidebar/i })).toBeInTheDocument()
  })

  it('omits the sidebar trigger without children', () => {
    const { queryByRole } = render(
      <NavigationRail tabs={tabs} defaultValue='layers' />,
    )

    expect(queryByRole('button', { name: /Sidebar/i })).toBeNull()
  })
})
