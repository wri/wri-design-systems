// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { SSOButtons } from './SSOButtons'

const meta = {
  title: 'Presets/SSO Buttons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
