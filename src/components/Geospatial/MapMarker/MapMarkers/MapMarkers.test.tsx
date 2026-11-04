import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ClusterPoint, SimpleMapPin } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('MapMarkers', () => {
  it('renders both marker presets with their default accessible names and no a11y violations', async () => {
    const { container } = render(
      <>
        <ClusterPoint onClick={() => {}} />
        <SimpleMapPin onClick={() => {}} />
      </>,
    )

    expect(
      screen.getByRole('button', { name: 'Map point' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Map pin location' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a cluster count through ClusterPoint', () => {
    render(<ClusterPoint count={1200} />)

    expect(
      screen.getByRole('button', { name: 'Cluster of 1200 locations' }),
    ).toBeInTheDocument()
    expect(screen.getByText('1200')).toBeInTheDocument()
  })
})
