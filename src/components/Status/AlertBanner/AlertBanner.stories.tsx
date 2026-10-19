// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import AlertBanner from '.'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Status/Alert Banner',
  component: AlertBanner,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Full-width or inline informational banner with optional centered content.',
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
    children: { description: 'Banner content', control: false },
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
    isCentered: {
      description: 'Centers the banner content',
      control: 'boolean',
    },
    width: {
      description:
        'Controls whether the banner fills its container or fits its content',
      control: { type: 'select' },
      options: ['full-width', 'inline'],
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
    variant: 'information',
    children: 'Information',
  },
}

export const WithButton: Story = {
  args: {
    variant: 'general-white',
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        General white
        <Button variant='secondary' size='small' label='Label' />
      </div>
    ),
  },
}

export const Inline: Story = {
  args: {
    variant: 'information',
    width: 'inline',
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        Inline
        <Button variant='secondary' size='small' label='Label' />
      </div>
    ),
  },
}

export const Centered: Story = {
  args: {
    variant: 'success',
    isCentered: true,
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        Centered
        <Button variant='secondary' size='small' label='Label' />
      </div>
    ),
  },
}
