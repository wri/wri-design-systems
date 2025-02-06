// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import OptionCard, { OptionCardGroup } from '.'
import { InfoIcon } from '../../../icons'

const meta = {
  title: 'Forms/Controls/Option Card/Single Item',
  component: OptionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <OptionCardGroup>
        <Story />
      </OptionCardGroup>
    ),
  ],
} satisfies Meta<typeof OptionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    icon: <InfoIcon />,
    value: 'value-1',
  },
}

export const Centered: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    icon: <InfoIcon />,
    value: 'value-2',
    variant: 'centered',
  },
}

export const Expanded: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    icon: <InfoIcon />,
    value: 'value-2',
    variant: 'expanded',
    children: (
      <>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </>
    ),
  },
}
