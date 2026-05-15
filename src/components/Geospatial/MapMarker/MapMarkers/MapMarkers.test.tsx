import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ClusterPoint, SimpleMapPin } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('MapMarkers — accessibility', () => {
  it('renders marker presets with no a11y violations', async () => {
    const { container } = render(
      <>
        <ClusterPoint onClick={() => {}} />
        <SimpleMapPin onClick={() => {}} />
      </>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
