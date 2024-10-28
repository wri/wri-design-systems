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
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three', label: 'Three' },
    ],
  },
}

export const ViewTab: Story = {
  args: {
    variant: 'view',
    tabs: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three', label: 'Three' },
    ],
  },
}

export const PanelTabWithDefaultActive: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three', label: 'Three' },
    ],
    defaultActiveTabId: 'three',
  },
}

export const PanelTabDisabled: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two', isDisabled: true },
      { id: 'three', label: 'Three' },
    ],
  },
}

export const PanelTabWitIcons: Story = {
  args: {
    variant: 'panel',
    tabs: [
      { id: 'one', label: 'Label' },
      { id: 'two', label: 'Label' },
      { id: 'three', label: 'Label', leftIcon: <SettingsIcon /> },
    ],
  },
}
