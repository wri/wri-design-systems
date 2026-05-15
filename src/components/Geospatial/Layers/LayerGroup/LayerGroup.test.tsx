import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerGroup from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LayerGroup — accessibility', () => {
  it('renders grouped layers with no violations', async () => {
    const { container } = render(
      <LayerGroup
        label='Basemaps'
        caption='Available layers'
        value='basemaps'
        layerItems={[
          {
            name: 'roads',
            label: 'Roads',
            caption: 'Road network',
            variant: 'switch',
            onChange: () => {},
          },
          {
            name: 'labels',
            label: 'Labels',
            caption: 'Place names',
            variant: 'radio',
            isDefaultSelected: true,
          },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
