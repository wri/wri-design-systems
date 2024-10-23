import type { Meta, StoryObj } from '@storybook/react'
import { SettingsIcon } from '@chakra-ui/icons'
import Button from '.'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'default',
    isLoading: false,
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
    isDisabled: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Outline',
    variant: 'primary',
    leftIcon: <SettingsIcon />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Outline',
    variant: 'primary',
    rightIcon: <SettingsIcon />,
  },
}
