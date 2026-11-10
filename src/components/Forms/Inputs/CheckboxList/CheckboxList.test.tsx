import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import CheckboxList from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const items = [
  { name: 'news', value: 'news', children: 'News' },
  { name: 'events', value: 'events', children: 'Events' },
  { name: 'alerts', value: 'alerts', disabled: true, children: 'Alerts' },
]

describe('CheckboxList — accessibility', () => {
  it('renders a checkbox group and has no violations', async () => {
    const { container } = render(
      <CheckboxList
        label='Interests'
        caption='Select all that apply'
        required
        checkboxes={items}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a parent checkbox and no violations', async () => {
    const { container } = render(
      <CheckboxList
        label={{ type: 'checkbox', label: 'Interests', name: 'interests' }}
        checkboxes={items}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('CheckboxList — string label', () => {
  it('renders the label and group aria-label with caption and required text', () => {
    const { getByText, getByLabelText } = render(
      <CheckboxList
        label='Interests'
        caption='Select all that apply'
        required
        checkboxes={items}
      />,
    )

    expect(getByText('Interests')).toBeInTheDocument()
    expect(
      getByLabelText(/Interests\. Select all that apply\. Required\./),
    ).toBeInTheDocument()
  })

  it('marks the group label as optional when not required', () => {
    const { getByLabelText } = render(
      <CheckboxList label='Interests' checkboxes={items} />,
    )

    expect(getByLabelText(/Optional/)).toBeInTheDocument()
  })

  it('includes the error message in the group aria-label', () => {
    const { getByLabelText } = render(
      <CheckboxList
        label='Interests'
        errorMessage='Pick one'
        checkboxes={items}
      />,
    )

    expect(getByLabelText(/Error: Pick one\./)).toBeInTheDocument()
  })

  it('renders the error message text', () => {
    const { getByText } = render(
      <CheckboxList
        label='Interests'
        errorMessage='Pick one'
        checkboxes={items}
      />,
    )

    expect(getByText('Pick one')).toBeInTheDocument()
  })
})

describe('CheckboxList — parent checkbox header', () => {
  it('renders the checked counter', () => {
    const { getByText } = render(
      <CheckboxList
        label={{ type: 'checkbox', label: 'Interests', name: 'interests' }}
        checkboxes={[items[0], items[1]]}
        defaultValues={['news']}
      />,
    )

    expect(getByText('1 / 2')).toBeInTheDocument()
  })

  it('hides the counter with hideCheckedCounter', () => {
    const { queryByText } = render(
      <CheckboxList
        label={{ type: 'checkbox', label: 'Interests', name: 'interests' }}
        checkboxes={[items[0], items[1]]}
        defaultValues={['news']}
        hideCheckedCounter
      />,
    )

    expect(queryByText('1 / 2')).toBeNull()
  })

  it('toggles expand/collapse via the expand button', () => {
    const { getByRole } = render(
      <CheckboxList
        label={{ type: 'checkbox', label: 'Interests', name: 'interests' }}
        checkboxes={[items[0]]}
      />,
    )

    const toggle = getByRole('button', { name: /hide/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)

    expect(getByRole('button', { name: /expand/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('hides the expand toggle with hideExpandToggle', () => {
    const { queryByRole } = render(
      <CheckboxList
        label={{ type: 'checkbox', label: 'Interests', name: 'interests' }}
        checkboxes={[items[0]]}
        hideExpandToggle
      />,
    )

    expect(queryByRole('button', { name: /hide|expand/i })).toBeNull()
  })
})

describe('CheckboxList — initial checked state', () => {
  it('applies defaultValues to matching checkboxes', () => {
    const { container } = render(
      <CheckboxList
        label='Interests'
        checkboxes={items}
        defaultValues={['news', 'events']}
      />,
    )

    const labels = container.querySelectorAll('label[name]')
    expect(labels[0]).toHaveAttribute('name', 'news')
    expect(labels[1]).toHaveAttribute('name', 'events')
    expect(labels).toHaveLength(3)
  })

  it('honors per-checkbox checked over defaultValues', () => {
    const { container } = render(
      <CheckboxList
        label='Interests'
        checkboxes={[
          { name: 'news', value: 'news', checked: true, children: 'News' },
          { name: 'events', value: 'events', children: 'Events' },
        ]}
        defaultValues={['events']}
      />,
    )

    const labels = container.querySelectorAll('label[name]')
    expect(labels[0]).toHaveAttribute('name', 'news')
    expect(labels[1]).toHaveAttribute('name', 'events')
  })
})

describe('CheckboxList — optional label', () => {
  it('hides the optional suffix by default', () => {
    const { container } = render(
      <CheckboxList label='Interests' checkboxes={items} />,
    )

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix when showOptionalLabel is true', () => {
    const { container } = render(
      <CheckboxList label='Interests' checkboxes={items} showOptionalLabel />,
    )

    expect(container.textContent).toContain('(optional)')
  })

  it('never shows the optional suffix for required fields', () => {
    const { container } = render(
      <CheckboxList
        label='Interests'
        required
        showOptionalLabel
        checkboxes={items}
      />,
    )

    expect(container.textContent).not.toContain('(optional)')
  })
})
