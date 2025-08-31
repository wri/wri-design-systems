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
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ height: '450px' }}>
        <Story />
      </div>
    ),
  ],
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
