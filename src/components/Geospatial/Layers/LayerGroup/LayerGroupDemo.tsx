// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { LayerGroupContainer, LayerGroup } from '../../..'

export const LayerGroupDemo = () => (
  <LayerGroupContainer defaultValue={['1']}>
    <LayerGroup
      label='Title 1_1'
      caption='Caption 1'
      value='1'
      layerItems={[
        {
          name: 'layer-10',
          label: 'Layer name 1',
          caption: 'Caption 1',
          isDefaultSelected: true,
        },
        {
          name: 'layer-11',
          label: 'Layer name 2',
          caption: 'Caption 1',
        },
      ]}
    />
    <LayerGroup
      label='Title 2'
      caption='Caption 2'
      value='2'
      layerItems={[
        {
          name: 'layer-20',
          label: 'Layer name 3',
          caption: 'Caption 1',
          variant: 'radio',
        },
        {
          name: 'layer-21',
          label: 'Layer name 4',
          caption: 'Caption 4',
          variant: 'radio',
        },
      ]}
    />
  </LayerGroupContainer>
)

export const LayerGroupDemo2 = () => (
  <LayerGroupContainer defaultValue={['3']}>
    <LayerGroup
      label='Title 1_2'
      caption='Caption 1'
      value='3'
      layerItems={[
        {
          name: 'layer-12',
          label: 'Layer name 1',
          caption: 'Caption 1',
        },
        {
          name: 'layer-13',
          label: 'Layer name 2',
          caption: 'Caption 1',
        },
      ]}
    />
    <LayerGroup
      label='Title 2'
      caption='Caption 2'
      value='4'
      layerItems={[
        {
          name: 'layer-22',
          label: 'Layer name 3',
          caption: 'Caption 1',
          variant: 'radio',
        },
        {
          name: 'layer-23',
          label: 'Layer name 4',
          caption: 'Caption 4',
          variant: 'radio',
        },
      ]}
    />
  </LayerGroupContainer>
)

export const LayerGroupDemo3 = () => (
  <LayerGroupContainer defaultValue={['5']}>
    <LayerGroup
      label='Title 1_3'
      caption='Caption 1'
      value='5'
      layerItems={[
        {
          name: 'layer-14',
          label: 'Layer name 1',
          caption: 'Caption 1',
        },
        {
          name: 'layer-15',
          label: 'Layer name 2',
          caption: 'Caption 1',
        },
      ]}
    />
    <LayerGroup
      label='Title 2'
      caption='Caption 2'
      value='6'
      layerItems={[
        {
          name: 'layer-24',
          label: 'Layer name 3',
          caption: 'Caption 1',
          variant: 'radio',
          isDefaultSelected: true,
        },
        {
          name: 'layer-25',
          label: 'Layer name 4',
          caption: 'Caption 4',
          variant: 'radio',
        },
      ]}
    />
  </LayerGroupContainer>
)
