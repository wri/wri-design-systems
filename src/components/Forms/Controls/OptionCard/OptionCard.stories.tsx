/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import OptionCard from '.'
import {
  InfoIcon,
  CheckCircleIcon,
  IndeterminateIcon,
  DisallowedIcon,
  NotApplicableIcon,
} from '../../../icons'
import { getThemedColor } from '../../..'

const meta = {
  title: 'Forms/Controls/Option Card',
  component: OptionCard,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: 'Selectable card used as a radio-style option.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { description: 'Initially selected value', control: false },
    items: { description: 'List of option card items', control: false },
    onValueChange: {
      description: 'Callback fired when selection changes',
      control: false,
    },
  },
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
    variant: 'centered',
  },
}

export const Expanded: Story = {
  args: {
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
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
    variant: 'expanded',
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

export const HideControl: Story = {
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
    hideControl: true,
  },
}

export const CustomItemWidth: Story = {
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
    itemWidth: '8.875rem',
    hideControl: true,
  },
}

export const CustomColors: Story = {
  args: {
    items: [
      {
        label: 'Label',
        caption: 'Caption',
        icon: <CheckCircleIcon />,
        value: 'value-1',
        selectedColor: getThemedColor('success', 500),
        selectedBackgroundColor: getThemedColor('success', 100),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <IndeterminateIcon />,
        value: 'value-2',
        selectedColor: getThemedColor('warning', 500),
        selectedBackgroundColor: getThemedColor('warning', 100),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <DisallowedIcon />,
        value: 'value-3',
        selectedColor: getThemedColor('error', 500),
        selectedBackgroundColor: getThemedColor('error', 100),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <NotApplicableIcon />,
        value: 'value-4',
        selectedColor: getThemedColor('neutral', 800),
        selectedBackgroundColor: getThemedColor('neutral', 100),
      },
    ],
    variant: 'centered',
    itemWidth: '8.875rem',
    hideControl: true,
  },
}
