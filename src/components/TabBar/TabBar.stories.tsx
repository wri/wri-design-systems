import type { Meta, StoryObj } from '@storybook/react'
import { SettingsIcon } from '@chakra-ui/icons'
import TabBar from '.'

const meta = {
  title: 'TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabBar>

export default meta
type Story = StoryObj<typeof meta>

export const PanelTab: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
  },
}

export const ViewTab: Story = {
  args: {
    variant: 'view',
    tabs: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
  },
}

export const PanelTabWithDefaultActive: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
    defaultActiveTabLabel: 'Three',
  },
}

export const PanelTabDisabled: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'One' },
      { label: 'Two', isDisabled: true },
      { label: 'Three' },
    ],
  },
}

export const PanelTabWitIcons: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { label: 'Label' },
      { label: 'Label' },
      { label: 'Label', leftIcon: <SettingsIcon /> },
    ],
  },
}
