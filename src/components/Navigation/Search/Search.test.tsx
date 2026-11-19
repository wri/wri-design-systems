import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Search from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Search — accessibility', () => {
  it('renders search input and has no violations', async () => {
    const { container } = render(
      <Search
        options={[
          { id: 'forest', label: 'Forest monitor' },
          { id: 'water', label: 'Water risk layer' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Search — ReactNode labels with searchLabel (DS-332)', () => {
  const options = [
    {
      id: '1',
      label: <strong>Amazon biome</strong>,
      searchLabel: 'Amazon biome',
    },
    {
      id: '2',
      label: <em>Water risk</em>,
      searchLabel: 'Water risk',
    },
    { id: '3', label: 'Plain label' },
  ]

  const type = (value: string) => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value },
    })
  }

  it('filters ReactNode-label options by their searchLabel', () => {
    render(<Search options={options} />)

    type('amazon')

    expect(screen.getByText('Amazon biome')).toBeInTheDocument()
    expect(screen.queryByText('Water risk')).not.toBeInTheDocument()
  })

  it('filters string-label options by label text when searchLabel is absent', () => {
    const { container } = render(<Search options={options} />)

    type('plain')

    // The label text is split across highlight spans, so assert on the row's
    // text content instead of a single text node.
    const rows = Array.from(
      container.querySelectorAll('[data-nav-source] > div > div'),
    )
    expect(rows.some((row) => row.textContent === 'Plain label')).toBe(true)
    expect(rows.some((row) => row.textContent === 'Amazon biome')).toBe(false)
  })

  it('filters options by id', () => {
    const { container } = render(<Search options={options} />)

    // "3" matches only the third option's id — none of the labels contain
    // "3", so the row is rendered without highlight spans.
    type('3')

    const rows = Array.from(
      container.querySelectorAll('[data-nav-source] > div > div'),
    )
    expect(rows.some((row) => row.textContent === 'Plain label')).toBe(true)
    expect(rows.some((row) => row.textContent === 'Amazon biome')).toBe(false)
    expect(rows.some((row) => row.textContent === 'Water risk')).toBe(false)
  })

  it('selects a ReactNode-label option via searchLabel', () => {
    const onSelect = jest.fn()
    render(<Search options={options} onSelect={onSelect} />)

    type('water')
    fireEvent.click(screen.getByText('Water risk'))

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect.mock.calls[0][0]).toMatchObject({ id: '2' })
  })

  // Note: keyboard selection (ArrowDown + Enter) is covered by
  // "selects the highlighted option via ArrowDown + Enter" below — the
  // Chakra mock's useDisclosure is stateful, so the resultsVisible guard
  // behaves like the real component.

  it('renders ReactNode labels without text highlighting', () => {
    render(<Search options={options} />)

    type('amazon')

    // ReactNode labels render as-is; only string labels get <strong> wrapping.
    expect(screen.getByText('Amazon biome').tagName).toBe('STRONG')
  })
})

describe('Search — selection persistence and controlled value', () => {
  const options = [
    { id: 'forest', label: 'Forest monitor' },
    { id: 'water', label: 'Water risk layer' },
  ]

  const type = (value: string) => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value },
    })
  }

  // String labels are split across highlight spans, so find rows by their
  // full text content instead of a single text node.
  const getRow = (container: HTMLElement, text: string) => {
    const rows = Array.from(
      container.querySelectorAll('[data-nav-source] > div > div'),
    )
    const row = rows.find((candidate) => candidate.textContent === text)
    if (!row) throw new Error(`No result row with text: ${text}`)
    return row
  }

  it('keeps the selected label in the input after selection', () => {
    const { container } = render(<Search options={options} />)

    type('forest')
    fireEvent.click(getRow(container, 'Forest monitor'))

    expect(screen.getByRole('combobox')).toHaveValue('Forest monitor')
  })

  it('keeps the X available after selection and clears it via onClear', () => {
    const onClear = jest.fn()
    const onChange = jest.fn()
    const { container } = render(
      <Search options={options} onClear={onClear} onChange={onChange} />,
    )

    type('forest')
    fireEvent.click(getRow(container, 'Forest monitor'))

    const clearButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(clearButton)

    expect(screen.getByRole('combobox')).toHaveValue('')
    expect(onClear).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith('')
  })

  it('fires onChange with the selected label in controlled mode', () => {
    const onChange = jest.fn()
    const onSelect = jest.fn()
    const { container } = render(
      <Search
        options={options}
        value=''
        onChange={onChange}
        onSelect={onSelect}
      />,
    )

    type('forest')
    fireEvent.click(getRow(container, 'Forest monitor'))

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect.mock.calls[0][0]).toMatchObject({ id: 'forest' })
    expect(onChange).toHaveBeenLastCalledWith('Forest monitor')
  })

  it('fires onChange on every keystroke in controlled mode', () => {
    const onChange = jest.fn()
    render(<Search options={options} value='' onChange={onChange} />)

    type('f')
    expect(onChange).toHaveBeenLastCalledWith('f')

    type('fo')
    expect(onChange).toHaveBeenLastCalledWith('fo')
  })

  it('does not reset the input when re-rendered with the same value', () => {
    const onChange = jest.fn()
    const view = render(
      <Search options={options} value='Forest monitor' onChange={onChange} />,
    )

    view.rerender(
      <Search options={options} value='Forest monitor' onChange={onChange} />,
    )

    expect(screen.getByRole('combobox')).toHaveValue('Forest monitor')
  })

  it('seeds the input from defaultValue (uncontrolled)', () => {
    render(<Search options={options} defaultValue='forest' />)

    expect(screen.getByRole('combobox')).toHaveValue('forest')
  })

  it('still fires the deprecated onQueryChange for backwards compatibility', () => {
    const onQueryChange = jest.fn()
    render(<Search options={options} onQueryChange={onQueryChange} />)

    type('forest')

    expect(onQueryChange).toHaveBeenLastCalledWith('forest')
  })

  it('selects the highlighted option via ArrowDown + Enter', () => {
    const onSelect = jest.fn()
    const { container } = render(
      <Search options={options} onSelect={onSelect} />,
    )

    type('forest')
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Enter' })

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect.mock.calls[0][0]).toMatchObject({ id: 'forest' })
    // Selection keeps the label in the field.
    expect(screen.getByRole('combobox')).toHaveValue('Forest monitor')
  })

  it('treats value={null} (untyped JS) as uncontrolled', () => {
    // Untyped JS consumers can pass null; TS would reject it, so cast here.
    const onChange = jest.fn()
    render(
      <Search
        options={options}
        value={null as unknown as string}
        onChange={onChange}
      />,
    )

    // Null must not be treated as a controlled value (no crash on
    // currentValue.length) — the component behaves uncontrolled instead.
    type('forest')
    expect(screen.getByRole('combobox')).toHaveValue('forest')
    expect(onChange).toHaveBeenLastCalledWith('forest')
  })

  it('re-applies the filter when options refresh while the query is active', () => {
    const { container, rerender } = render(
      <Search options={options} value='forest' onChange={jest.fn()} />,
    )

    const initialRows = Array.from(
      container.querySelectorAll('[data-nav-source] > div > div'),
    )
    expect(
      initialRows.some((row) => row.textContent === 'Forest monitor'),
    ).toBe(true)

    const refreshedOptions = [
      { id: 'forest-new', label: 'New forest layer' },
      { id: 'water', label: 'Water risk layer' },
    ]
    rerender(
      <Search options={refreshedOptions} value='forest' onChange={jest.fn()} />,
    )

    const refreshedRows = Array.from(
      container.querySelectorAll('[data-nav-source] > div > div'),
    )
    expect(
      refreshedRows.some((row) => row.textContent === 'New forest layer'),
    ).toBe(true)
    expect(
      refreshedRows.some((row) => row.textContent === 'Forest monitor'),
    ).toBe(false)
  })

  it('resets the keyboard highlight when the options change', () => {
    const { container, rerender } = render(<Search options={options} />)

    // Typing opens the disclosure; ArrowDown highlights the first row.
    type('f')
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    expect(
      container.querySelectorAll('[data-nav-source] > div > div')[0],
    ).toHaveAttribute('data-highlighted')

    // An async options refresh must clear the highlight — it could otherwise
    // point at a stale row index.
    rerender(<Search options={[{ id: 'new', label: 'Fresh option' }]} />)
    expect(container.querySelectorAll('[data-highlighted]')).toHaveLength(0)
  })
})

describe('Search — disclosure closes when the value becomes empty', () => {
  const options = [
    { id: 'forest', label: 'Forest monitor' },
    { id: 'water', label: 'Water risk layer' },
  ]

  const type = (value: string) => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value },
    })
  }

  // renderResults only fires when resultsVisible is true, which requires the
  // disclosure to be open — so it observes the disclosure's open state.
  const renderResults = jest.fn(() => null)
  const customProps = { displayResults: 'custom', renderResults } as const

  // Controlled harness whose parent state tracks onChange, plus a button that
  // sets the value programmatically (simulating an outside state change).
  const ControlledHarness = () => {
    const [value, setValue] = React.useState('')
    return (
      <>
        <Search
          options={options}
          value={value}
          onChange={setValue}
          {...customProps}
        />
        <button onClick={() => setValue('Forest monitor')}>set value</button>
      </>
    )
  }

  const flushResults = () => renderResults.mockClear()

  it('closes the popover when the input is cleared via the X', () => {
    render(<ControlledHarness />)

    type('forest')
    expect(renderResults).toHaveBeenCalled()
    flushResults()

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(renderResults).not.toHaveBeenCalled()

    // The reviewer's regression: a programmatic value change afterwards must
    // not reopen the results without a keystroke.
    fireEvent.click(screen.getByRole('button', { name: 'set value' }))
    expect(renderResults).not.toHaveBeenCalled()

    // Typing still reopens the disclosure.
    type('forest')
    expect(renderResults).toHaveBeenCalled()
  })

  it('closes the popover when the input is emptied by typing', () => {
    render(<ControlledHarness />)

    type('forest')
    expect(renderResults).toHaveBeenCalled()
    flushResults()

    type('')
    expect(renderResults).not.toHaveBeenCalled()

    // Same regression check as the clear path: no reopen without a keystroke.
    fireEvent.click(screen.getByRole('button', { name: 'set value' }))
    expect(renderResults).not.toHaveBeenCalled()
  })
})
