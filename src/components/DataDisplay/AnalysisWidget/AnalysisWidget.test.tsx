import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import AnalysisWidget from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('AnalysisWidget', () => {
  it('renders header, content and footer with no a11y violations', async () => {
    const { container } = render(
      <AnalysisWidget
        header={<div>Widget header</div>}
        footer={<div>Widget footer</div>}
      >
        <div>Widget content</div>
      </AnalysisWidget>,
    )

    const labelledRegion = container.querySelector('[aria-labelledby]')
    const trigger = screen.getByRole('button')

    expect(labelledRegion).not.toBeNull()
    expect(labelledRegion?.getAttribute('aria-labelledby')).toBe(
      trigger.getAttribute('id'),
    )
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Widget content')).toBeInTheDocument()
    expect(screen.getByText('Widget footer')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('collapses and expands through the header trigger', () => {
    const { container } = render(
      <AnalysisWidget header={<div>Widget header</div>}>
        <div>Widget content</div>
      </AnalysisWidget>,
    )
    const trigger = screen.getByRole('button')

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('.item-content-closed')).not.toBeNull()
    expect(container.querySelector('.item-content-open')).toBeNull()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(container.querySelector('.item-content-closed')).toBeNull()
  })

  it('keeps the trigger inert when collapsible is false', () => {
    const { container } = render(
      <AnalysisWidget header={<div>Widget header</div>} collapsible={false}>
        <div>Widget content</div>
      </AnalysisWidget>,
    )
    const trigger = screen.getByRole('button')

    fireEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(container.querySelector('.item-content-open')).not.toBeNull()
  })

  it('renders header actions as buttons that fire once per click', () => {
    const onAbout = jest.fn()
    const onRefresh = jest.fn()
    render(
      <AnalysisWidget
        header={<div>Widget header</div>}
        actions={[
          { label: 'About', onClick: onAbout, icon: <InfoIcon /> },
          { label: 'Refresh', onClick: onRefresh },
        ]}
      >
        <div>Widget content</div>
      </AnalysisWidget>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'About' }))
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))

    expect(onAbout).toHaveBeenCalledTimes(1)
    expect(onRefresh).toHaveBeenCalledTimes(1)
  })

  it('keeps the footer visible outside the collapsible body when showFooterOnCollapsed is set', () => {
    const { container } = render(
      <AnalysisWidget
        header={<div>Widget header</div>}
        footer={<div>Widget footer</div>}
        showFooterOnCollapsed
      >
        <div>Widget content</div>
      </AnalysisWidget>,
    )

    fireEvent.click(screen.getByRole('button'))

    const hiddenWrapper = container.querySelector('.item-content-closed')
    const footers = screen.getAllByText('Widget footer')

    // The footer is rendered once, outside the collapsible body, so it stays
    // available while the widget is collapsed.
    expect(footers).toHaveLength(1)
    expect(hiddenWrapper?.contains(footers[0])).toBe(false)
    expect(hiddenWrapper).not.toBeNull()
  })

  it('renders a collapsed widget with no a11y violations', async () => {
    const { container } = render(
      <AnalysisWidget header={<div>Widget header</div>} expanded={false}>
        <div>Widget content</div>
      </AnalysisWidget>,
    )

    expect(container.querySelector('.item-content-closed')).not.toBeNull()
    expect(await axe(container)).toHaveNoViolations()
  })
})
