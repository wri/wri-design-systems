// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LayerPanel from '.'
import {
  LayerGroupDemo,
  LayerGroupDemo2,
  LayerGroupDemo3,
} from '../LayerGroup/LayerGroupDemo'

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
    description:
      'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.',
    tabBarVariant: 'panel',
    buttonTabs: [
      { label: 'Label 1', value: 'label-1' },
      { label: 'Label 2', value: 'label-2' },
      { label: 'Label 3', value: 'label-3' },
    ],
    defaultValue: 'label-1',
    children: (
      <>
        {/* */}
        {/* */}
      </>
    ),
  },
  render: function Render(args) {
    const [tabSelected, setTabSelected] = useState('label-1')

    return (
      <LayerPanel {...args} onTabClick={setTabSelected}>
        {tabSelected === 'label-1' ? <LayerGroupDemo /> : null}
        {tabSelected === 'label-2' ? <LayerGroupDemo2 /> : null}
        {tabSelected === 'label-3' ? <LayerGroupDemo3 /> : null}
      </LayerPanel>
    )
  },
}

export const LayerGroupNoTabs: Story = {
  args: {
    title: 'Title and more',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.',
    tabBarVariant: 'panel',
    children: <LayerGroupDemo3 />,
  },
}
