/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import OptionCard from '.'
import { InfoIcon } from '../../../icons'

const meta = {
  title: 'Forms/Controls/Option Card',
  component: OptionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OptionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-2',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-3',
      },
    ],
  },
}

export const Centered: Story = {
  args: {
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'centered',
        value: 'value-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'centered',
        value: 'value-2',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'centered',
        value: 'value-3',
      },
    ],
  },
}

export const Expanded: Story = {
  args: {
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'expanded',
        value: 'value-1',
        children: (
          <>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
          </>
        ),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'expanded',
        value: 'value-2',
        children: (
          <>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
          </>
        ),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'expanded',
        value: 'value-3',
        children: (
          <>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
          </>
        ),
      },
    ],
  },
}

export const DefaultChecked: Story = {
  args: {
    defaultValue: 'value-2',
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-2',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-3',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'value-2',
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-2',
        disabled: true,
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-3',
      },
    ],
  },
}
