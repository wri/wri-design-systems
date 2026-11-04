import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapMarker from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('MapMarker', () => {
  it('renders an icon marker button with its accessible name and no a11y violations', async () => {
    const { container } = render(
      <MapMarker
        icon={<InfoIcon />}
        variant='icon'
        ariaLabel='Selected location'
        onClick={() => {}}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Selected location' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('derives accessible names from the variant when no explicit label is given', () => {
    const { rerender } = render(<MapMarker variant='simple-pin' />)

    expect(
      screen.getByRole('button', { name: 'Map pin location' }),
    ).toBeInTheDocument()

    rerender(<MapMarker />)

    expect(
      screen.getByRole('button', { name: 'Map point' }),
    ).toBeInTheDocument()
  })

  it('labels clusters with the location count and shows a formatted value', () => {
    render(<MapMarker variant='cluster' count={150000} />)

    expect(
      screen.getByRole('button', { name: 'Cluster of 150000 locations' }),
    ).toBeInTheDocument()
    expect(screen.getByText('150K')).toBeInTheDocument()
  })

  it('falls back through the count formatting tiers', () => {
    const { rerender } = render(<MapMarker variant='cluster' count={2500000} />)

    expect(screen.getByText('3M')).toBeInTheDocument()

    rerender(<MapMarker variant='cluster' count={200000000} />)

    expect(screen.getByText('99M+')).toBeInTheDocument()

    rerender(<MapMarker variant='cluster' count={42} />)

    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('prefers an explicit aria-label over the generated cluster label', () => {
    render(<MapMarker variant='cluster' count={5} ariaLabel='Forest loss' />)

    expect(
      screen.getByRole('button', { name: 'Forest loss' }),
    ).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('fires the click handler on activation', () => {
    const onClick = jest.fn()
    render(<MapMarker onClick={onClick} />)

    fireEvent.click(screen.getByRole('button', { name: 'Map point' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
