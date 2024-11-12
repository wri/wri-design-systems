import { LayerGroupContainer, LayerGroup } from '../../components'

const LayerGroupDemo3 = () => (
  <LayerGroupContainer defaultIndex={[0]} allowMultipleOpen>
    <LayerGroup
      label='Title 1_3'
      caption='Caption 1'
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

export default LayerGroupDemo3
