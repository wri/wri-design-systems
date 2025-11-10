/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Text } from '@chakra-ui/react'
import Tag from '../../Forms/Tag'
import { InfoIcon, RefreshIcon } from '../../icons'
import AnalysisWidget from '.'
import { getThemedColor } from '../../../lib/theme'

const meta = {
  title: 'Data Display/Analysis Widget',
  component: AnalysisWidget,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AnalysisWidget>

export default meta
type Story = StoryObj<typeof meta>

const BaseHeader = () => (
  <div
    style={{
      display: 'flex',
      gap: '12px',
      flex: '1',
      overflow: 'hidden',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <div
      style={{
        flex: '1',
        minWidth: '0',
      }}
    >
      <Text style={{ fontWeight: '700' }}>Title</Text>
      <Text style={{ color: getThemedColor('neutral', 700), fontWeight: 400 }}>
        caption
      </Text>
    </div>
  </div>
)

const BaseChildren = (
  <div style={{ padding: '1rem', background: getThemedColor('neutral', 200) }}>
    <Text fontWeight='700' fontSize={24}>
      Component Placeholder
    </Text>
    <Text style={{ color: getThemedColor('neutral', 700), fontWeight: 400 }}>
      Substitute for another component
    </Text>
  </div>
)

const BaseFooter = (
  <div style={{ display: 'flex', padding: '0.5rem' }}>
    <Tag
      label='Label'
      variant='info-grey'
      icon={<RefreshIcon />}
      style={{ marginRight: '0.5rem' }}
    />
    <Tag
      label='Label'
      variant='info-grey'
      icon={<RefreshIcon />}
      style={{ marginRight: '0.5rem' }}
    />
    <Tag
      label='Label'
      variant='info-grey'
      icon={<RefreshIcon />}
      style={{ marginRight: '0.5rem' }}
    />
  </div>
)

export const Default: Story = {
  args: {
    header: BaseHeader(),
    children: BaseChildren,
    footer: BaseFooter,
    actions: [
      {
        label: 'About',
        onClick: fn(),
        icon: <InfoIcon />,
      },
    ],
  },
}

export const Collapsed: Story = {
  args: {
    header: BaseHeader(),
    children: BaseChildren,
    footer: BaseFooter,
    actions: [
      {
        label: 'About',
        onClick: fn(),
        icon: <InfoIcon />,
      },
    ],
    expanded: false,
  },
}

export const NonCollapsible: Story = {
  args: {
    header: BaseHeader(),
    children: BaseChildren,
    footer: BaseFooter,
    collapsible: false,
  },
}

export const NoFooter: Story = {
  args: {
    header: BaseHeader(),
    children: BaseChildren,
  },
}
