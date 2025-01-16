// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Tag from '.'
import { InfoIcon } from '../../icons'

const meta = {
  title: 'Forms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const InfoWhite: Story = {
  args: {
    label: 'Info White',
    variant: 'info-white',
  },
}

export const InfoGrey: Story = {
  args: {
    label: 'Info Grey',
    variant: 'info-grey',
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    variant: 'info-grey',
    icon: <InfoIcon />,
  },
}

export const Closable: Story = {
  args: {
    label: 'Closable',
    variant: 'info-grey',
    icon: <InfoIcon />,
    closable: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'info-grey',
    disabled: true,
  },
}
