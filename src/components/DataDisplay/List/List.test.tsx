import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import List from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('List — accessibility', () => {
  it('renders data and navigation rows with no violations', async () => {
    const { container } = render(
      <List
        items={[
          {
            id: 'data-1',
            label: 'Status',
            value: 'Active',
            variant: 'data',
            icon: <InfoIcon />,
          },
          {
            id: 'nav-1',
            label: 'Settings',
            caption: 'Configure options',
            variant: 'navigation',
            onItemClick: () => {},
          },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('List — ReactNode labels (DS-332)', () => {
  it('renders a ReactNode label', () => {
    render(
      <List
        items={[
          {
            id: 'node-1',
            label: <strong>Rich label</strong>,
          },
        ]}
      />,
    )

    expect(screen.getByText('Rich label')).toBeInTheDocument()
  })

  it('does not render an empty aria-label for ReactNode labels', () => {
    render(
      <List
        items={[
          {
            id: 'node-1',
            label: <strong>Rich label</strong>,
          },
        ]}
      />,
    )

    const row = screen.getByText('Rich label').closest('[id]')
    expect(row).not.toHaveAttribute('aria-label', '')
  })

  it('keeps the string aria-label for data rows with a value', () => {
    render(
      <List
        items={[
          {
            id: 'data-1',
            label: 'Status',
            value: 'Active',
            variant: 'data',
          },
        ]}
      />,
    )

    expect(screen.getByText('Status').closest('[id]')).toHaveAttribute(
      'aria-label',
      'Status, Active',
    )
  })

  it('prefers the explicit ariaLabel prop', () => {
    render(
      <List
        items={[
          {
            id: 'node-1',
            label: <strong>Rich label</strong>,
            ariaLabel: 'Custom name',
          },
        ]}
      />,
    )

    expect(screen.getByText('Rich label').closest('[id]')).toHaveAttribute(
      'aria-label',
      'Custom name',
    )
  })

  it('uses a stable key for items without id or string label', () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const { rerender } = render(
      <List items={[{ id: 'a', label: 'A' }, { label: <em>B</em> }]} />,
    )
    rerender(<List items={[{ id: 'a', label: 'A' }, { label: <em>B</em> }]} />)

    expect(consoleError).not.toHaveBeenCalledWith(
      expect.stringContaining('unique "key" prop'),
    )
    consoleError.mockRestore()
  })
})

describe('List — highlighting (DS-332)', () => {
  const items = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
    { id: 'three', label: 'Three' },
  ]

  it('highlights the item at highlightedIndex', () => {
    render(<List items={items} highlightedIndex={1} />)

    expect(screen.getByText('Two').closest('[id]')).toHaveAttribute(
      'data-highlighted',
      'true',
    )
    expect(screen.getByText('One').closest('[id]')).not.toHaveAttribute(
      'data-highlighted',
    )
  })

  it('highlights items flagged with isHighlighted', () => {
    render(
      <List
        items={[
          { id: 'one', label: 'One', isHighlighted: true },
          { id: 'two', label: 'Two' },
        ]}
      />,
    )

    expect(screen.getByText('One').closest('[id]')).toHaveAttribute(
      'data-highlighted',
      'true',
    )
    expect(screen.getByText('Two').closest('[id]')).not.toHaveAttribute(
      'data-highlighted',
    )
  })

  it('combines highlightedIndex and item-level isHighlighted', () => {
    render(
      <List
        items={[
          { id: 'one', label: 'One', isHighlighted: true },
          { id: 'two', label: 'Two' },
        ]}
        highlightedIndex={1}
      />,
    )

    expect(screen.getByText('One').closest('[id]')).toHaveAttribute(
      'data-highlighted',
      'true',
    )
    expect(screen.getByText('Two').closest('[id]')).toHaveAttribute(
      'data-highlighted',
      'true',
    )
  })
})

describe('List — interaction', () => {
  it('invokes onItemClick for navigation rows', () => {
    const onItemClick = jest.fn()
    render(
      <List
        items={[
          {
            id: 'nav-1',
            label: 'Settings',
            variant: 'navigation',
            onItemClick,
          },
        ]}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Settings' }))
    expect(onItemClick).toHaveBeenCalledTimes(1)
  })
})
