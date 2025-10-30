/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotificationIcon, UserIcon } from '../../icons'
import List from '../List'
import Tag from '../../Forms/Tag'
import ExtendableCard from '.'

const meta = {
  title: 'Data Display/Extendable Card',
  component: ExtendableCard,
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
} satisfies Meta<typeof ExtendableCard>

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
      <span style={{ fontWeight: '700' }}>Title</span>
    </div>
  </div>
)

const BaseHeaderWithIcon = () => (
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
    <NotificationIcon
      style={{
        width: '16px',
        height: '16px',
      }}
    />

    <div
      style={{
        flex: '1',
        minWidth: '0',
      }}
    >
      <span style={{ fontWeight: '700' }}>Title</span>
    </div>
  </div>
)

const BaseChildren = (
  <List
    items={[
      {
        id: 'data-1',
        label: 'Label',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
      {
        id: 'data-2',
        label: 'Label',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
      {
        id: 'data-3',
        label: 'Label',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
      {
        id: 'data-4',
        label: 'Label',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
      {
        id: 'data-5',
        label: 'Label',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
    ]}
  />
)

const BaseFooter = (
  <div style={{ display: 'flex', padding: '0.5rem' }}>
    <Tag label='Label' variant='info-grey' />
  </div>
)

export const IconAndFooter: Story = {
  args: {
    header: BaseHeaderWithIcon(),
    children: BaseChildren,
    footer: BaseFooter,
  },
}

export const NoIcon: Story = {
  args: {
    header: BaseHeader(),
    children: BaseChildren,
    footer: BaseFooter,
  },
}

export const NoFooter: Story = {
  args: {
    header: BaseHeaderWithIcon(),
    children: BaseChildren,
  },
}
