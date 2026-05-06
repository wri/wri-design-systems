// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '.'
import { CheckIcon } from '../../../icons'

const meta = {
  title: 'Forms/Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          "Primary action button. Use `variant='primary'` for the main CTA, `variant='secondary'` for less prominent actions, `variant='borderless'` for inline text actions, and `variant='outline'` for bordered secondary actions. Prefer `IconButton` when no label is needed.",
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    label: { description: 'Button text', control: 'text' },
    variant: {
      description: 'Visual style of the button',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'borderless', 'outline'],
    },
    size: {
      description: "Size variant — use 'small' in compact layouts",
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    loading: {
      description: 'Shows a loading spinner inside the button',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the button and prevents interaction',
      control: 'boolean',
    },
    leftIcon: {
      description: 'Icon rendered to the left of the label',
      control: false,
    },
    rightIcon: {
      description: 'Icon rendered to the right of the label',
      control: false,
    },
    children: {
      description: 'Alternative to label — use for complex button content',
      control: false,
    },
    onClick: { description: 'Click handler', control: false },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
}

export const Borderless: Story = {
  args: {
    label: 'Borderless',
    variant: 'borderless',
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    disabled: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    leftIcon: <CheckIcon />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    rightIcon: <CheckIcon />,
  },
}
