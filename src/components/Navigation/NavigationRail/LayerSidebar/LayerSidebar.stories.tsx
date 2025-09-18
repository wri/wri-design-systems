// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import NavigationRail from '..'
import LayerPanelDemo from '../../../Geospatial/Layers/LayerPanel/LayerPanelDemo'

const meta = {
  title: 'Navigation/Navigation Rail/Templates/Layer Sidebar',
  component: NavigationRail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationRail>

export default meta
type Story = StoryObj<typeof meta>

export const LayerSidebar: Story = {
  args: {
    tabs: [
      {
        label: 'Label 1',
        value: 'label-1',
      },
      {
        label: 'Label 2',
        value: 'label-2',
      },
      {
        label: 'Label 3',
        value: 'label-3',
      },
    ],
  },
  render: function Render(args) {
    const defaultTabValue = 'label-1'
    const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)

    const handleOnTabClick = (selectedValue: string) => {
      setSelectedTabValue(selectedValue)
    }

    return (
      <NavigationRail
        defaultValue={defaultTabValue}
        onTabClick={handleOnTabClick}
        {...args}
      >
        {selectedTabValue === 'label-1' ? <LayerPanelDemo /> : null}
        {selectedTabValue === 'label-2' ? <div>content 2</div> : null}
        {selectedTabValue === 'label-3' ? <div>content 3</div> : null}
      </NavigationRail>
    )
  },
}
