import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MobileSearch from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const items = [
  { id: '1', label: 'Forest loss', caption: 'Alerts' },
  { id: '2', label: 'Land cover', caption: 'Baseline' },
  { id: '3', label: 'Glad alerts', caption: 'Recent' },
]

const renderSearch = (props: Record<string, any> = {}) =>
  render(<MobileSearch items={items} {...props} />)

describe('MobileSearch', () => {
  it('renders the search input with cancel and recent results with no a11y violations', async () => {
    const { container } = renderSearch()

    expect(
      screen.getByRole('searchbox', { name: 'Search' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByText('Recent searches')).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Recent searches' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('filters items against label, id and caption as the user types', () => {
    const onQueryChange = jest.fn()
    renderSearch({ onQueryChange })

    const input = screen.getByRole('searchbox', { name: 'Search' })

    fireEvent.change(input, { target: { value: 'glad' } })

    expect(onQueryChange).toHaveBeenCalledWith('glad')
    expect(screen.getByText('Showing 1 matching results')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Glad alerts, Recent' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Forest loss/ })).toBeNull()
  })

  it('renders the clear affordance through the InputGroup endElement', () => {
    renderSearch()

    const input = screen.getByRole('searchbox', { name: 'Search' })

    fireEvent.change(input, { target: { value: 'land' } })

    // The clear affordance is passed as `endElement` to Chakra's InputGroup;
    // the shared mock renders the startElement/child/endElement slots like
    // real Chakra, so the X is present while a query is held.
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('reports the clicked item through onItemClick', () => {
    const onItemClick = jest.fn()
    renderSearch({ onItemClick })

    fireEvent.click(screen.getByRole('button', { name: 'Forest loss, Alerts' }))

    expect(onItemClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1' }),
    )
  })

  it('cancels the search, hiding results and clearing the input', () => {
    const onCancel = jest.fn()
    renderSearch({ onCancel })

    const input = screen.getByRole('searchbox', { name: 'Search' })

    fireEvent.change(input, { target: { value: 'forest' } })
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('list')).toBeNull()
    expect(input).toHaveValue('')
  })

  it('respects showInfoMessage and localized labels', () => {
    renderSearch({
      showInfoMessage: false,
      labels: {
        cancelLabel: 'Cancelar',
        recentSearchesTitle: 'Búsquedas recientes',
      },
    })

    expect(screen.getByText('Búsquedas recientes')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument()
    expect(screen.queryByText('Label')).toBeNull()
  })
})
