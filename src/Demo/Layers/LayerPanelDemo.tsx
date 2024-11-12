import { useState } from 'react'
import { LayerPanel } from '../../components'
import LayerGroupDemo1 from './LayerGroupDemo1'
import LayerGroupDemo2 from './LayerGroupDemo2'
import LayerGroupDemo3 from './LayerGroupDemo3'

const defaultActiveTabLabel = 'Label 1'

const LayerPanelDemo = () => {
  const [tabSelected, setTabSelected] = useState(defaultActiveTabLabel)

  return (
    <LayerPanel
      title='Title and more'
      description='Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.'
      tabBarVariant='panel'
      buttonTabs={[
        { label: 'Label 1' },
        { label: 'Label 2' },
        { label: 'Label 3' },
      ]}
      defaultActiveTabLabel={defaultActiveTabLabel}
      onTabClick={setTabSelected}
    >
      {tabSelected === 'Label 1' ? <LayerGroupDemo1 /> : null}
      {tabSelected === 'Label 2' ? <LayerGroupDemo2 /> : null}
      {tabSelected === 'Label 3' ? <LayerGroupDemo3 /> : null}
    </LayerPanel>
  )
}

export default LayerPanelDemo
