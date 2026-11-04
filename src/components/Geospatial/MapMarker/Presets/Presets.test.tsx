import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { MapMarkers } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('MapMarker Presets', () => {
  it('renders every preset marker with its accessible name and no a11y violations', async () => {
    const { container } = render(
      <>
        <MapMarkers.Paper />
        <MapMarkers.Drop />
        <MapMarkers.Plant />
        <MapMarkers.Point />
      </>,
    )

    expect(
      screen.getByRole('button', { name: 'paper icon' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'drop icon' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'plant icon' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'point icon' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('lets consumers override the accessible name', () => {
    render(<MapMarkers.Point ariaLabel='Study area centroid' />)

    expect(
      screen.getByRole('button', { name: 'Study area centroid' }),
    ).toBeInTheDocument()
  })
})
