// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '../../Forms/Actions/Button'
import InlineMessage from '.'
import { CheckIcon } from '../../icons'

const meta = {
  title: 'Status/Inline Message',
  component: InlineMessage,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Inline feedback message for form fields or section-level feedback. Use `variant` to set severity.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '31.25rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { description: '`label` text', control: 'text' },
    caption: { description: '`caption` content', control: false },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['info-white', 'info-grey', 'success', 'warning', 'error'],
    },
    size: {
      description: '`size` variant',
      control: { type: 'select' },
      options: ['small', 'large', 'full-width', 'small-full-width'],
    },
    icon: { description: '`icon` content', control: false },
    children: { description: '`children` content', control: false },
    isContentRight: {
      description: '`isContentRight` flag',
      control: 'boolean',
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof InlineMessage>

export default meta
type Story = StoryObj<typeof meta>

export const InfoWhite: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
  },
}

export const InfoGrey: Story = {
  args: {
    label: 'Info Grey',
    caption: 'caption',
    variant: 'info-grey',
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, nisi vel congue imperdiet, risus felis iaculis metus, sit amet accumsan justo nibh eu odio. Fusce velit augue, bibendum vestibulum elit vel, placerat iaculis dolor. Aliquam tincidunt nunc blandit, consequat magna ut, mollis mi. Morbi ac dictum nisi. Quisque leo neque, vehicula eu lorem ac, convallis pellentesque sem. Proin commodo libero quis nulla tristique, a vehicula sem consectetur. Donec id luctus orci.',
    variant: 'info-grey',
    size: 'full-width',
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    caption: 'caption',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    caption: 'caption',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    caption: 'caption',
    variant: 'error',
  },
}

export const WithChildrenAction: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    children: <Button label='Label' onClick={fn()} />,
  },
}

export const ContentRight: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    isContentRight: true,
    children: <Button label='Label' onClick={fn()} />,
  },
}

export const Small: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    size: 'small',
  },
}

export const SmallFullWidth: Story = {
  args: {
    label: 'Small Full Width',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, nisi vel congue imperdiet, risus felis iaculis metus, sit amet accumsan justo nibh eu odio.',
    variant: 'info-white',
    size: 'small-full-width',
  },
}

export const SmallContentRight: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    size: 'small',
    isContentRight: true,
    children: <Button label='Label' size='small' onClick={fn()} />,
  },
}

export const NoIconWithChildrenAction: Story = {
  args: {
    label: 'Ready to finish this factor?',
    caption:
      "Mark this factor as complete when you've finished reviewing the response, rationale, and strategies.",
    variant: 'info-grey',
    size: 'full-width',
    icon: null,
    children: (
      <Button
        label='Mark complete'
        leftIcon={<CheckIcon height='1rem' width='1rem' />}
        onClick={fn()}
      />
    ),
  },
}
