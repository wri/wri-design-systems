import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import LayerPanel from '.'
import LayerGroupDemo1 from '../../../Demo/Layers/LayerGroupDemo1'
import LayerGroupDemo2 from '../../../Demo/Layers/LayerGroupDemo2'
import LayerGroupDemo3 from '../../../Demo/Layers/LayerGroupDemo3'

const meta = {
  title: 'Layers/LayerPanel',
  component: LayerPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayerPanel>

export default meta
type Story = StoryObj<typeof meta>

export const LayerGroupOpen: Story = {
  args: {
    title: 'Title and more',
    description: 'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.',
    tabBarVariant: 'panel',
    buttonTabs: [
      { label: 'Label 1' },
      { label: 'Label 2' },
      { label: 'Label 3' },
    ],
    defaultActiveTabLabel: 'Label 1',
    children: (
      <>
        {/* */}
        {/* */}
      </>
    ),
  },
  render: function Render(args) {
    const [tabSelected, setTabSelected] = useState('Label 1')

    return (
      <LayerPanel {...args}
        onTabClick={setTabSelected}
      >
        {tabSelected === 'Label 1' ? <LayerGroupDemo1 /> : null}
        {tabSelected === 'Label 2' ? <LayerGroupDemo2 /> : null}
        {tabSelected === 'Label 3' ? <LayerGroupDemo3 /> : null}
      </LayerPanel>
    )
  }
}

export const LayerGroupNoTabs: Story = {
  args: {
    title: 'Title and more',
    description: 'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.',
    tabBarVariant: 'panel',
    children: <LayerGroupDemo3 />,
  },
}
