/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import PanelStory from '.'

const meta = {
  title: 'Containers/Panel/Panel',
  component: PanelStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          "Side panel container with fixed or floating variants. Use `variant='fixed'` for persistent sidebars and `variant='floating'` for overlays.",
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ height: '28.125rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    header: { description: '`header` content', control: false },
    content: { description: '`content` content', control: false },
    footer: { description: '`footer` content', control: false },
    width: { description: '`width` value', control: false },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['fixed', 'floating'],
    },
  },
} satisfies Meta<typeof PanelStory>

export default meta
type Story = StoryObj<typeof meta>

export const Panel: Story = {
  args: {
    header: <div>Header</div>,
    content: (
      <div>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
    ),
    footer: <div style={{ width: '100%' }}>Footer</div>,
  },
}

export const PanelNoHeader: Story = {
  args: {
    content: (
      <div>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
    ),
    footer: <div style={{ width: '100%' }}>Footer</div>,
  },
}

export const PanelNoFooter: Story = {
  args: {
    header: <div>Header</div>,
    content: (
      <div>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
    ),
  },
}
