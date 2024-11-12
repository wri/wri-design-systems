import { LayerGroupContainer, LayerGroup } from '../../components'

const LayerGroupDemo2 = () => (
  <LayerGroupContainer defaultIndex={[0]} allowMultipleOpen>
    <LayerGroup
      label='Title 1_2'
      caption='Caption 1'
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
          isDefaultSelected: true,
        },
      ]}
    />
    <LayerGroup
      label='Title 2'
      caption='Caption 2'
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

export default LayerGroupDemo2
