// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import PasswordStory from '.'

const meta = {
  title: 'Forms/Inputs/Password',
  component: PasswordStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PasswordStory>

export default meta
type Story = StoryObj<typeof meta>

export const Password: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    required: true,
  },
}

export const RulesDisabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    disabledRules: {
      uppercase: true,
      lowercase: true,
      numbers: true,
      specialCharacters: true,
    },
    required: true,
  },
}

export const CustomMinCharacters: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    minLength: 10,
    required: true,
  },
}

export const NoValidations: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    hideValidations: true,
    required: true,
  },
}
