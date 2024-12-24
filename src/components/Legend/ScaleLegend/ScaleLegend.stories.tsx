// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ScaleLegend from '.'

const meta = {
  title: 'Legend/Scale Legend',
  component: ScaleLegend,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '238px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScaleLegend>

export default meta
type Story = StoryObj<typeof meta>

export const GradientScale: Story = {
  args: {
    colors: ['#E5F5F9', '#2CA25F'],
    values: ['Low', 'Medium', 'High'],
    subLabels: ['<100K', '>600K'],
    isGradient: true,
  },
}

export const SequentialScale: Story = {
  args: {
    colors: ['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C'],
    values: ['0%', '25%', '50%', '75%', '100%'],
  },
}

export const DivergingScale: Story = {
  args: {
    colors: ['#A6611A', '#DFC27D', '#F5F5F5', '#80CDC1', '#018571'],
    values: ['0%', '25%', '50%', '75%', '100%'],
  },
}

export const WithSubLabels: Story = {
  args: {
    colors: ['#FFFF99', '#FFE600', '#FF9900', '#FF1900', '#990000'],
    values: ['2', '4', '6', '9', '11'],
    subLabels: ['Low', 'Low-medium', 'Medium-high', 'High', 'Extremely high'],
  },
}
