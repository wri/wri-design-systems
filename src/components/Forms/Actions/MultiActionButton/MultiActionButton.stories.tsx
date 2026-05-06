// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import MultiActionButton from '.'

const meta = {
  title: 'Forms/Actions/Multi Action Button',
  component: MultiActionButton,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Button that reveals a dropdown of additional actions on click.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      description: 'Visual style of the button',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    mainActionLabel: {
      description: 'Label for the primary action',
      control: 'text',
    },
    mainActionLeftIcon: {
      description: 'Icon to the left of the main action label',
      control: false,
    },
    mainActionRightIcon: {
      description: 'Icon to the right of the main action label',
      control: false,
    },
    mainActionOnClick: {
      description: 'Handler for the primary action click',
      control: false,
    },
    otherActions: {
      description: 'List of secondary action items',
      control: false,
    },
    disabled: { description: 'Disables the button', control: 'boolean' },
  },
} satisfies Meta<typeof MultiActionButton>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
    disabled: true,
  },
}
