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

    docs: {
      description: {
        component:
          'Full-width informational or warning banner. Use `type` to set severity.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '25rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'Banner title content', control: false },
    variant: {
      description: 'Semantic variant — sets color and icon',
      control: { type: 'select' },
      options: [
        'general-white',
        'general-grey',
        'information',
        'success',
        'warning',
        'error',
      ],
    },
    icon: {
      description: 'Custom icon element (overrides variant default)',
      control: false,
    },
    onClose: {
      description: 'Handler for dismiss button — shows button when set',
      control: false,
    },
  },
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
