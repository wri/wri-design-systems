// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import TabBar from '.'
import { CheckIcon } from '../../icons'

const meta = {
  title: 'Navigation/Tab Bar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabBar>

export default meta
type Story = StoryObj<typeof meta>

export const PanelTab: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
  },
}

export const ViewTab: Story = {
  args: {
    variant: 'view',
    tabs: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
  },
}

export const PanelTabWithDefaultActive: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
    defaultValue: 'two',
  },
}

export const PanelTabDisabled: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three', disabled: true },
    ],
  },
}

export const PanelTabWithIcons: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One', value: 'one', icon: <CheckIcon /> },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
  },
}

export const AutomaticActivationMode: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One', value: 'one', icon: <CheckIcon /> },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
    activationMode: 'automatic',
  },
}
