/** @jsxImportSource @emotion/react */
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { InfoIcon } from '../../icons'
import Blockquote from '.'

const demoQuote =
  'Lorem ipsum dolor sit amet consectetur. Duis egestas ac fermentum urna mauris malesuada at. Augue vel erat vitae habitasse turpis at. Molestie ut arcu risus non enim vel in fermentum. Eget convallis fames arcu pretium malesuada vestibulum. Consectetur ac maecenas semper ac donec.'

const meta = {
  title: 'Data Display/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Semantic blockquote with a start bar. Use for quoted content and citations. Supports a custom bar color, an icon instead of the bar, and content justification.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '35rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: { description: '`children` content', control: false },
    cite: { description: '`cite` content', control: 'text' },
    color: { description: 'Quote bar color', control: 'text' },
    icon: {
      description: 'Icon rendered instead of the quote bar',
      control: false,
    },
    justify: {
      description: '`justify` alignment',
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    className: { description: '`className` value', control: false },
  },
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: demoQuote,
  },
}

export const WithCitation: Story = {
  args: {
    children: demoQuote,
    cite: 'Author Name',
  },
}

export const CustomColor: Story = {
  args: {
    children: demoQuote,
    color: 'red',
  },
}

export const WithIcon: Story = {
  args: {
    children: demoQuote,
    icon: <InfoIcon />,
  },
}

export const Centered: Story = {
  args: {
    children: demoQuote,
    justify: 'center',
  },
}

export const EndAligned: Story = {
  args: {
    children: demoQuote,
    justify: 'end',
  },
}
