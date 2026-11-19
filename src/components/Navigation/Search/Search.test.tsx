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

  // Note: keyboard selection (ArrowDown + Enter) is not testable with the
  // Chakra mock — its useDisclosure always reports open: false, so the
  // component's `if (!resultsVisible) return` guard short-circuits Enter.
  // Click selection above covers the same handleSelect path.

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
})
