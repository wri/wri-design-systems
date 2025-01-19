/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LegendPanelStory from '.'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../LegendItem/LegendItemDemo'

const meta = {
  title: 'Geospatial/Legends/Legend Panel',
  component: LegendPanelStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LegendPanelStory>

export default meta
type Story = StoryObj<typeof meta>

export const LegendPanel: Story = {
  args: {
    legendContent: [
      <LegendItemDemo />,
      <LegendItemDemo2 />,
      <LegendItemDemo3 />,
    ],
    analysisContent: <div />,
  },
}
