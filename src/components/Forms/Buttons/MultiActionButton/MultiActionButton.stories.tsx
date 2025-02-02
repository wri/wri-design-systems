// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import MultiActionButton from '.'

const meta = {
  title: 'Forms/Buttons/Multi Action Button',
  component: MultiActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
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
