// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MenuStory from '.'
import { PlaceholderIcon } from '../../../icons'
import Button from '../Button'

const meta = {
  title: 'Forms/Actions/Menu',
  component: MenuStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Dropdown menu with selectable items. Use `items` to define the menu options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      description: 'Visual theme',
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    label: { description: 'Trigger button label', control: 'text' },
    fontSize: { description: 'Font size for menu items', control: 'text' },
    items: { description: 'Flat list of menu items', control: false },
    groups: {
      description: 'Grouped menu items with section titles',
      control: false,
    },
    onSelect: {
      description: 'Callback fired when an item is selected',
      control: false,
    },
    customTrigger: {
      description: 'Custom trigger element instead of the default button',
      control: false,
    },
    selectionMode: {
      description:
        'Selection behaviour. "multiple" (default) allows many items checked at once; "radio" allows only one.',
      control: { type: 'select' },
      options: ['multiple', 'radio'],
    },
    defaultSelectedValues: {
      description: 'Values checked by default on first render',
      control: false,
    },
  },
} satisfies Meta<typeof MenuStory>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {
    label: 'Open Menu',
    items: [
      {
        label: 'Label',
        value: 'value-1-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        value: 'value-1-2',
      },
    ],
  },
}

export const Commands: Story = {
  args: {
    label: 'Open Menu',
    items: [
      {
        label: 'Label',
        command: '⌘E',
        value: 'value-2-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        command: '⌘E',
        value: 'value-2-2',
      },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    label: 'Open Menu',
    items: [
      {
        label: 'Label',
        startIcon: <PlaceholderIcon />,
        value: 'value-3-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        startIcon: <PlaceholderIcon />,
        value: 'value-3-2',
      },
      {
        label: 'Label',
        caption: 'Caption',
        endIcon: <PlaceholderIcon />,
        value: 'value-3-3',
      },
    ],
  },
}

export const WithGroups: Story = {
  args: {
    label: 'Open Menu',
    groups: [
      {
        title: 'Group 1',
        items: [
          {
            label: 'Label',
            value: 'value-4-1',
          },
          {
            label: 'Label',
            value: 'value-4-2',
          },
        ],
      },
      {
        title: 'Group 2',
        items: [
          {
            label: 'Label',
            value: 'value-4-3',
          },
          {
            label: 'Label',
            value: 'value-4-4',
          },
          {
            label: 'Label',
            value: 'value-4-5',
          },
        ],
      },
    ],
  },
}

export const WithSubmenu: Story = {
  args: {
    label: 'Open Menu',
    items: [
      {
        label: 'Label',
        value: 'label-5-1',
      },
      {
        label: 'Label',
        value: 'value-5-2',
        submenu: [
          {
            label: 'Label',
            value: 'value-5-2-1',
          },
          {
            label: 'Label',
            caption: 'Caption',
            value: 'value-5-2-2',
          },
        ],
      },
    ],
  },
}

export const MultipleSelection: Story = {
  args: {
    label: 'Language',
    selectionMode: 'multiple',
    defaultSelectedValues: ['value-sel-2'],
    items: [
      { label: 'English', value: 'value-sel-1' },
      { label: 'Spanish', value: 'value-sel-2' },
      { label: 'French', value: 'value-sel-3' },
      { label: 'German', value: 'value-sel-4' },
    ],
  },
}

export const RadioSelection: Story = {
  args: {
    label: 'View mode',
    selectionMode: 'radio',
    defaultSelectedValues: ['value-radio-1'],
    items: [
      { label: 'Map', value: 'value-radio-1' },
      { label: 'Table', value: 'value-radio-2' },
      { label: 'Chart', value: 'value-radio-3' },
    ],
  },
}

export const CustomTrigger: Story = {
  args: {
    label: 'Open Menu',
    items: [
      {
        label: 'Label',
        value: 'label-6-1',
      },
      {
        label: 'Label',
        value: 'value-6-2',
      },
    ],
    customTrigger: <Button label='Open Menu' variant='secondary' />,
  },
}

export const CustomWidth: Story = {
  args: {
    label: 'Open Menu',
    menuWidth: '20rem',
    items: [
      {
        label: 'Label',
        value: 'label-7-1',
      },
      {
        label: 'Label',
        value: 'value-7-2',
      },
      {
        label: 'Label',
        value: 'value-5-2',
        menuWidth: 'content',
        submenu: [
          {
            label: 'Label',
            caption: 'Caption',
            startIcon: <PlaceholderIcon />,
            value: 'value-3-2',
          },
          {
            label: 'Label',
            caption: 'Caption',
            startIcon: <PlaceholderIcon />,
            value: 'value-3-3',
          },
        ],
      },
    ],
  },
}
