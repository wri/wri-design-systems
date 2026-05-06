// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import CloseButton from '.'

const meta = {
  title: 'Forms/Actions/Close Button',
  component: CloseButton,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Icon button specifically styled for closing dialogs, panels, or banners.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    disabled: {
      description: 'Disables the button and prevents interaction',
      control: 'boolean',
    },
    onClick: { description: 'Click handler', control: false },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
