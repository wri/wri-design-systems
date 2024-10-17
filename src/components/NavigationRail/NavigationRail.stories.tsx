import type { Meta, StoryObj } from '@storybook/react'
import { AddIcon, PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'
import { fn } from '@storybook/test'
import NavigationRail from '.'

const meta = {
  title: 'Navigation Rail',
  component: NavigationRail,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  args: { onTabClick: fn() },
} satisfies Meta<typeof NavigationRail>

export default meta
type Story = StoryObj<typeof meta>

export const NavigationRailActive: Story = {
  args: {
    tabs: [
      { id: 'label-1', label: 'Label 1', icon: <PlusSquareIcon /> },
      { id: 'label-2', label: 'Label 2', icon: <SettingsIcon /> },
      { id: 'label-3', label: 'Label 3', icon: <AddIcon /> },
    ],
    defaultActiveTabId: 'label-1',
  },
}
