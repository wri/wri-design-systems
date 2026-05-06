// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { SSOButtons } from '.'

const meta = {
  title: 'Forms/Actions/Button/Preset/SSO Buttons',
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Pre-composed SSO login buttons for Google, Microsoft, and Facebook. Use in authentication screens to provide one-click social login.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      description: 'Accessible label for the SSO button',
      control: 'text',
    },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    onClick: { description: 'Click handler', control: false },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Google: Story = {
  render: () => <SSOButtons.Google />,
}

export const Facebook: Story = {
  render: () => <SSOButtons.Facebook />,
}

export const X: Story = {
  render: () => <SSOButtons.X />,
}

export const Microsoft: Story = {
  render: () => <SSOButtons.Microsoft />,
}
