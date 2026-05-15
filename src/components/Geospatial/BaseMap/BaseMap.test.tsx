import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import BaseMap from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('BaseMap — accessibility', () => {
  it('renders options and settings with no violations', async () => {
    const { container } = render(
      <BaseMap
        title='Base map'
        caption='Choose one option'
        additionalSettings={[
          {
            label: 'Show labels',
            checked: true,
            onCheckedChange: () => {},
            children: <div>Settings content</div>,
          },
        ]}
        options={[
          {
            id: 'satellite',
            label: 'Satellite',
            caption: 'High resolution',
            imageUrl: 'https://example.com/satellite.jpg',
            active: true,
          },
          {
            id: 'terrain',
            label: 'Terrain',
            caption: 'Topographic',
            imageUrl: 'https://example.com/terrain.jpg',
            active: false,
          },
        ]}
        onOptionSelected={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
