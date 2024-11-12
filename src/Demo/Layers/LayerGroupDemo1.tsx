import { LayerGroupContainer, LayerGroup } from '../../components'

const LayerGroupDemo1 = () => (
  <LayerGroupContainer defaultIndex={[0]} allowMultipleOpen>
    <LayerGroup
      label='Title 1_1'
      caption='Caption 1'
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

export default LayerGroupDemo1
