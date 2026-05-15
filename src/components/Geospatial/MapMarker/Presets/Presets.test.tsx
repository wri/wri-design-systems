import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { MapMarkers } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('MapMarker Presets — accessibility', () => {
  it('renders preset markers with no a11y violations', async () => {
    const { container } = render(
      <>
        <MapMarkers.Paper />
        <MapMarkers.Drop />
        <MapMarkers.Plant />
        <MapMarkers.Point />
      </>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
