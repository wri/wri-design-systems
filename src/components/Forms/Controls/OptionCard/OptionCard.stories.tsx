/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import OptionCard from '.'
import OptionCardGroup from './OptionCardGroup'
import { InfoIcon } from '../../../icons'

const meta = {
  title: 'Forms/Controls/Option Card',
  component: OptionCardGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OptionCardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onValueChange: ({ value }: { value: string }) => console.log(value),
  },
  render: (args) => (
    <OptionCardGroup {...args}>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-1'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-2'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-3'
      />
    </OptionCardGroup>
  ),
}

export const Centered: Story = {
  args: {
    onValueChange: ({ value }: { value: string }) => console.log(value),
  },
  render: (args) => (
    <OptionCardGroup {...args}>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='centered'
        value='value-1'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='centered'
        value='value-2'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='centered'
        value='value-3'
      />
    </OptionCardGroup>
  ),
}

export const Expanded: Story = {
  args: {
    onValueChange: ({ value }: { value: string }) => console.log(value),
  },
  render: (args) => (
    <OptionCardGroup {...args}>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='expanded'
        value='value-1'
      >
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </OptionCard>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='expanded'
        value='value-2'
      >
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </OptionCard>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        variant='expanded'
        value='value-3'
      >
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </OptionCard>
    </OptionCardGroup>
  ),
}

export const DefaultChecked: Story = {
  args: {
    defaultValue: 'value-2',
    onValueChange: ({ value }: { value: string }) => console.log(value),
  },
  render: (args) => (
    <OptionCardGroup {...args}>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-1'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-2'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-3'
      />
    </OptionCardGroup>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: 'value-2',
    onValueChange: ({ value }: { value: string }) => console.log(value),
  },
  render: (args) => (
    <OptionCardGroup {...args}>
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-1'
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-2'
        disabled
      />
      <OptionCard
        label='Label'
        caption='Caption'
        icon={<InfoIcon />}
        value='value-3'
      />
    </OptionCardGroup>
  ),
}
