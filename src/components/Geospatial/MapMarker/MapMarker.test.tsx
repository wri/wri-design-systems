import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapMarker from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('MapMarker — accessibility', () => {
  it('renders marker button with no violations', async () => {
    const { container } = render(
      <MapMarker
        icon={<InfoIcon />}
        variant='icon'
        ariaLabel='Selected location'
        onClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
