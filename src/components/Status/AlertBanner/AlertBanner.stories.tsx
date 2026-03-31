// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import AlertBanner from '.'
import Tag from '../../Forms/Tag'

const meta = {
  title: 'Status/Alert Banner',
  component: AlertBanner,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AlertBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
}

export const WithLabel: Story = {
  args: {
    title: 'Success',
    variant: 'success',
    children: 'Text label',
  },
}

export const WithChildren: Story = {
  args: {
    title: 'General white',
    variant: 'general-grey',
    children: <Tag label='Label' variant='info-white' />,
  },
}
