import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Combobox from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Combobox — accessibility', () => {
  it('renders with label and caption and has no violations', async () => {
    const { container } = render(
      <Combobox
        label='Country'
        caption='Choose one option'
        placeholder='Select a country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('shows optional label by default for non-required fields', () => {
    const { container } = render(
      <Combobox label='Country' items={[{ label: 'Colombia', value: 'co' }]} />,
    )

    expect(container.textContent).toContain('(Optional)')
  })

  it('hides optional label when showOptionalLabel is false', () => {
    const { container } = render(
      <Combobox
        label='Country'
        showOptionalLabel={false}
        items={[{ label: 'Colombia', value: 'co' }]}
      />,
    )

    expect(container.textContent).not.toContain('(Optional)')
  })
})

describe('Combobox — selection tags', () => {
  it('renders selected items as tags when showSelectedItems is true', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems
      />,
    )

    // The label appears once in the dropdown item and once in the tag.
    expect(screen.getAllByText('Colombia').length).toBe(2)
  })

  it('hides tags by default', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
      />,
    )

    // Only the dropdown item renders the label — no tag duplicate.
    expect(screen.getAllByText('Colombia').length).toBe(1)
  })

  it('hides tags when showSelectedItems is false', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems={false}
      />,
    )

    // Only the dropdown item renders the label — no tag duplicate.
    expect(screen.getAllByText('Colombia').length).toBe(1)
  })
})

describe('Combobox — controlled API', () => {
  it('renders tags for the controlled value', () => {
    const { rerender } = render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        value={['co']}
        showSelectedItems
      />,
    )

    expect(screen.getAllByText('Colombia').length).toBe(2)

    rerender(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        value={['co', 'br']}
        showSelectedItems
      />,
    )

    expect(screen.getAllByText('Brazil').length).toBe(2)
  })

  it('supports defaultValue for uncontrolled usage', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Clear selection' }),
    ).toBeInTheDocument()
  })

  it('calls onChange with the remaining values when a tag is closed (uncontrolled)', () => {
    const handleChange = jest.fn()
    render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        defaultValue={['co', 'br']}
        onChange={handleChange}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    expect(handleChange).toHaveBeenCalledWith(['br'])
  })

  it('calls onChange with [] when the only tag is closed (controlled)', () => {
    const handleChange = jest.fn()
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        value={['co']}
        onChange={handleChange}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    expect(handleChange).toHaveBeenCalledWith([])
  })

  it('removes the tag after closing it (uncontrolled)', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    // Only the dropdown item remains.
    expect(screen.getAllByText('Colombia').length).toBe(1)
  })
})

describe('Combobox — disabled state', () => {
  it('disables the input', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        disabled
      />,
    )

    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})

describe('Combobox — creatable', () => {
  const typeIntoInput = (value: string) => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value },
    })
  }

  it('renders the create row exactly once when typing a non-matching value', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        creatable
      />,
    )

    typeIntoInput('test')

    // Regression guard: the create option used to render twice — once as the
    // styled "+ Create …" row and once as a plain collection item.
    expect(screen.getAllByText('Create “test”')).toHaveLength(1)
  })

  it('does not render a create row when creatable is not set', () => {
    render(
      <Combobox label='Country' items={[{ label: 'Colombia', value: 'co' }]} />,
    )

    typeIntoInput('test')

    expect(screen.queryByText('Create “test”')).not.toBeInTheDocument()
  })

  it('does not render a create row when the input matches an existing item', () => {
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        creatable
      />,
    )

    // Case-insensitive match against an existing option.
    typeIntoInput('COLOMBIA')

    expect(screen.queryByText('Create “COLOMBIA”')).not.toBeInTheDocument()
  })
})

describe('Combobox — server-side filtering (async)', () => {
  const typeIntoInput = (value: string) => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value },
    })
  }

  it('fires onQueryChange on every keystroke', () => {
    const handleQueryChange = jest.fn()
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        onQueryChange={handleQueryChange}
      />,
    )

    typeIntoInput('col')
    typeIntoInput('colo')

    expect(handleQueryChange).toHaveBeenNthCalledWith(1, 'col')
    expect(handleQueryChange).toHaveBeenNthCalledWith(2, 'colo')
  })

  it('fires onQueryChange with an empty query when the clear trigger resets the input', () => {
    const handleQueryChange = jest.fn()
    render(
      <Combobox
        label='Country'
        items={[{ label: 'Colombia', value: 'co' }]}
        onQueryChange={handleQueryChange}
        defaultValue={['co']}
        showSelectedItems
      />,
    )

    typeIntoInput('col')
    expect(handleQueryChange).toHaveBeenLastCalledWith('col')

    fireEvent.click(screen.getByRole('button', { name: /clear/i }))

    expect(handleQueryChange).toHaveBeenLastCalledWith('')
  })

  it('does not client-filter the items list in async mode', () => {
    render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        onQueryChange={jest.fn()}
      />,
    )

    // "col" would client-filter Brazil away in sync mode; in async mode the
    // list is rendered verbatim — the consumer owns filtering.
    typeIntoInput('col')

    expect(screen.getByText('Colombia')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('still client-filters in sync mode (no onQueryChange)', () => {
    render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
      />,
    )

    typeIntoInput('col')

    expect(screen.getByText('Colombia')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('replaces the rendered list when the items prop changes', () => {
    const { rerender } = render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        onQueryChange={jest.fn()}
      />,
    )

    rerender(
      <Combobox
        label='Country'
        items={[{ label: 'Chile', value: 'cl' }]}
        onQueryChange={jest.fn()}
      />,
    )

    expect(screen.queryByText('Colombia')).not.toBeInTheDocument()
    expect(screen.getByText('Chile')).toBeInTheDocument()
  })

  it('shows the loading spinner and hides the empty state while isLoading', () => {
    render(
      <Combobox
        label='Country'
        items={[]}
        onQueryChange={jest.fn()}
        isLoading
      />,
    )

    // The wrapper and the mock Spinner both carry role="status".
    expect(screen.getAllByRole('status').length).toBeGreaterThan(0)
    expect(screen.queryByText('No items found')).not.toBeInTheDocument()
  })

  it('shows the empty state when not loading', () => {
    render(<Combobox label='Country' items={[]} onQueryChange={jest.fn()} />)

    expect(screen.getByText('No items found')).toBeInTheDocument()
    expect(screen.queryAllByRole('status')).toHaveLength(0)
  })

  it('keeps the selected tag label after the items list is replaced', () => {
    const { rerender } = render(
      <Combobox
        label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        defaultValue={['co']}
        showSelectedItems
        onQueryChange={jest.fn()}
      />,
    )

    expect(screen.getAllByText('Colombia').length).toBe(2)

    // Server returns a new page without Colombia — the tag must keep its
    // label because the selected value is resolved against the latest items.
    rerender(
      <Combobox
        label='Country'
        items={[{ label: 'Chile', value: 'cl' }]}
        defaultValue={['co']}
        showSelectedItems
        onQueryChange={jest.fn()}
      />,
    )

    expect(screen.getAllByText('Colombia').length).toBe(1)
    expect(screen.getByText('Chile')).toBeInTheDocument()
  })

  it('has no accessibility violations in async loading state', async () => {
    const { container } = render(
      <Combobox
        label='Country'
        items={[]}
        onQueryChange={jest.fn()}
        isLoading
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Combobox — filtering regressions', () => {
  const items = [
    { label: 'Colombia', value: 'co' },
    { label: 'Brazil', value: 'br' },
  ]

  it('preserves the active filter when equivalent inline items are passed again', () => {
    const { rerender } = render(<Combobox label='Country' items={items} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'col' } })
    rerender(
      <Combobox label='Country' items={items.map((item) => ({ ...item }))} />,
    )
    expect(screen.getByText('Colombia')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('does not emit another empty query when clearing an already empty query', () => {
    const onQueryChange = jest.fn()
    render(
      <Combobox
        label='Country'
        items={items}
        defaultValue={['co']}
        onQueryChange={onQueryChange}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'col' } })
    fireEvent.click(screen.getByRole('button', { name: 'Clear selection' }))
    fireEvent.click(screen.getByRole('button', { name: 'Clear selection' }))
    expect(onQueryChange.mock.calls).toEqual([['col'], ['']])
  })
})

describe('Combobox — deprecated initialItems compatibility', () => {
  const items = [
    { label: 'Colombia', value: 'co' },
    { label: 'Brazil', value: 'br' },
  ]

  it('supports the deprecated initialItems prop when items is omitted', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
      />,
    )

    expect(screen.getByText('Colombia')).toBeInTheDocument()
  })

  it('prefers items over initialItems when both are given', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        items={[{ label: 'Brazil', value: 'br' }]}
      />,
    )

    expect(screen.queryByText('Colombia')).not.toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('keeps initialItems seed-only after mounting', () => {
    const { rerender } = render(
      <Combobox label='Country' initialItems={items} />,
    )
    rerender(<Combobox label='Country' initialItems={[]} />)
    expect(screen.getByText('Colombia')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })
})
