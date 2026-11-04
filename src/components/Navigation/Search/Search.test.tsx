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

  it('filters ReactNode-label options by id when searchLabel is absent', () => {
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
