// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Link } from 'react-router-dom'
import BreadcrumbStory from '.'
import { DropIcon, PaperIcon, PlantIcon, SettingsIcon } from '../../icons'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbStory>

export default meta
type Story = StoryObj<typeof meta>

export const Breadcrumb: Story = {
  args: {
    links: [
      { label: 'One', link: '#' },
      { label: 'Two', link: '#' },
      { label: 'Three', link: '#' },
    ],
    linkRouter: Link,
  },
}

export const CustomSeparator: Story = {
  args: {
    links: [
      { label: 'One', link: '#' },
      { label: 'Two', link: '#' },
      { label: 'Three', link: '#' },
    ],
    separator: '|',
    linkRouter: Link,
  },
}

export const MaxItems: Story = {
  args: {
    links: [
      { label: 'One', link: '#' },
      { label: 'Two', link: '#' },
      { label: 'Three', link: '#' },
      { label: 'Four', link: '#' },
    ],
    maxItems: 3,
    linkRouter: Link,
  },
}

export const WithIcons: Story = {
  args: {
    links: [
      { label: 'Settings', link: '#', icon: <SettingsIcon /> },
      { label: 'One', link: '#', icon: <DropIcon /> },
      { label: 'Two', link: '#', icon: <PaperIcon /> },
      { label: 'Three', link: '#', icon: <PlantIcon /> },
    ],
    linkRouter: Link,
  },
}

export const SmallSize: Story = {
  args: {
    links: [
      { label: 'Settings', link: '#', icon: <SettingsIcon /> },
      { label: 'One', link: '#', icon: <DropIcon /> },
      { label: 'Two', link: '#', icon: <PaperIcon /> },
      { label: 'Three', link: '#', icon: <PlantIcon /> },
    ],
    linkRouter: Link,
    size: 'small',
  },
}
