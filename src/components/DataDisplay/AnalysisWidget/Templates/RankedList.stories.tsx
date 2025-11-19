/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Text } from '@chakra-ui/react'
import Tag from '../../../Forms/Tag'
import List from '../../List'
import {
  InfoIcon,
  SettingsIcon,
  DownloadIcon,
  ShareIcon,
  NumberIcon,
} from '../../../icons'
import AnalysisWidget from '..'

const meta = {
  title: 'Data Display/Analysis Widget/Templates/Ranked List',
  component: AnalysisWidget,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '330px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AnalysisWidget>

export default meta
type Story = StoryObj<typeof meta>

const listItems = [
  {
    id: 'nav-1',
    label: 'Kemeloi Health Centre (1 km)',
    caption: 'Health centre',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='1' />,
  },
  {
    id: 'nav-2',
    label: 'Kobujoi Forest (2 km)',
    caption: 'Dispensary',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='2' />,
  },
  {
    id: 'nav-3',
    label: 'Kapsagawat Dispensary (7 km)',
    caption: 'Dispensary',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='3' />,
  },
  {
    id: 'nav-4',
    label: 'Kibonze Dispensary (8 km)',
    caption: 'Dispensary',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='4' />,
  },
  {
    id: 'nav-5',
    label: 'Upendo Medical Clinic (9 km)',
    caption: 'Medical clinic',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='5' />,
  },
]
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
      <Text style={{ fontWeight: '700' }}>Healthcare facilities</Text>
    </div>
  </div>
)

const BaseChildren = (
  <div>
    <Text style={{ padding: '1rem' }}>
      There are <b>32</b> healthcare facilities within 10km of this area.
    </Text>
    <List items={listItems} />
  </div>
)

const BaseFooter = (
  <div style={{ display: 'flex', padding: '0.5rem' }}>
    <Tag
      label='Filter'
      variant='info-grey'
      icon={<SettingsIcon />}
      style={{ marginRight: '0.5rem' }}
    />
    <Tag
      label='Download'
      variant='info-grey'
      icon={<DownloadIcon />}
      style={{ marginRight: '0.5rem' }}
    />
    <Tag
      label='Share'
      variant='info-grey'
      icon={<ShareIcon />}
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
