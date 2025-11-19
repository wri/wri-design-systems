/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Text } from '@chakra-ui/react'
import Tag from '../../../Forms/Tag'
import QualitativeAttribute from '../../../Geospatial/Legends/QualitativeAttribute'
import {
  InfoIcon,
  SettingsIcon,
  DownloadIcon,
  ShareIcon,
  PieChartPinkIcon,
} from '../../../icons'
import AnalysisWidget from '..'
import InlineMessage from '../../../Status/InlineMessage'

const meta = {
  title: 'Data Display/Analysis Widget/Templates/Donut Chart',
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
      <Text style={{ fontWeight: '700' }}>Deforesation alerts in Belize</Text>
    </div>
  </div>
)

const BaseChildren = (
  <div style={{ padding: '1rem' }}>
    <Text>
      There were <b>4,308,579</b> deforestation alerts reported in <b>Brazil</b>{' '}
      between <b>13th of September 2023</b> and <b>20th of September 2023</b>,
      cover a total of <b>52.2 kha</b> of which <b>66%</b> were high confidence
      alerts detected by a single system and <b>3.0%</b>
      were alerts detected by multiple systems.
    </Text>
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <PieChartPinkIcon />
    </div>
    <div style={{ padding: '1rem 0px 0px 0px' }}>
      <QualitativeAttribute
        type='raster'
        label='Highest confidence detection by multiple alert systems'
        color='#C92A6D;
'
      />
      <b>82,026</b>
    </div>
    <div style={{ padding: '1rem 0px 0px 0px' }}>
      <QualitativeAttribute
        type='raster'
        label='High confidence detection by a single alert system'
        color='#DC6699;
'
      />
      <b>41,114</b>
    </div>
    <div style={{ padding: '1rem 0px' }}>
      <QualitativeAttribute
        type='raster'
        label='Detection by a single alert system'
        color='#EDA4C3;
'
      />

      <b>41,114</b>
    </div>
    <InlineMessage
      label='Area does not necessarily correspond to area of tree cover loss. '
      variant='warning'
    />
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
