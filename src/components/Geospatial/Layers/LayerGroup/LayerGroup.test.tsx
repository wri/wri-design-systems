import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerGroup from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const radioLayerItems = [
  {
    name: 'roads',
    label: 'Roads',
    caption: 'Road network',
    variant: 'radio' as const,
  },
  {
    name: 'labels',
    label: 'Labels',
    caption: 'Place names',
    variant: 'radio' as const,
    isDefaultSelected: true,
  },
]

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

describe('LayerGroup — radio selection (DS-363)', () => {
  it('passes the default-selected radio item as the controlled group value', () => {
    render(
      <LayerGroup
        label='Basemaps'
        caption='Available layers'
        value='basemaps'
        layerItems={radioLayerItems}
      />,
    )

    const group = screen.getByRole('radiogroup')
    expect(group).toHaveAttribute('value', 'labels')
  })

  it('renders every radio layer item inside the group', () => {
    render(
      <LayerGroup
        label='Basemaps'
        caption='Available layers'
        value='basemaps'
        layerItems={radioLayerItems}
      />,
    )

    const group = screen.getByRole('radiogroup')
    const radioInputs = group.querySelectorAll('input[type="radio"]')
    expect(radioInputs).toHaveLength(2)
    const items = group.querySelectorAll('label')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveAttribute('value', 'roads')
    expect(items[1]).toHaveAttribute('value', 'labels')
  })

  it('starts with no radio selected when no item is marked as default', () => {
    render(
      <LayerGroup
        label='Basemaps'
        caption='Available layers'
        value='basemaps'
        layerItems={radioLayerItems.map(
          ({ isDefaultSelected, ...item }) => item,
        )}
      />,
    )

    const group = screen.getByRole('radiogroup')
    expect(group.getAttribute('value') || '').toBe('')
  })
})
