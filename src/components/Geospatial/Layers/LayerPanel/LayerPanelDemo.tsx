// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { LayerPanel } from '../../..'
import {
  LayerGroupDemo,
  LayerGroupDemo2,
  LayerGroupDemo3,
} from '../LayerGroup/LayerGroupDemo'

const defaultTabValue = 'label-1'

const LayerPanelDemo = () => {
  const [tabSelected, setTabSelected] = useState(defaultTabValue)

  return (
    <LayerPanel
      title='Title and more'
      description='Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.'
      tabBarVariant='panel'
      buttonTabs={[
        { label: 'Label 1', value: 'label-1' },
        { label: 'Label 2', value: 'label-2' },
        { label: 'Label 3', value: 'label-3' },
      ]}
      defaultValue={defaultTabValue}
      onTabClick={setTabSelected}
    >
      {tabSelected === 'label-1' ? <LayerGroupDemo /> : null}
      {tabSelected === 'label-2' ? <LayerGroupDemo2 /> : null}
      {tabSelected === 'label-3' ? <LayerGroupDemo3 /> : null}
    </LayerPanel>
  )
}

export default LayerPanelDemo
