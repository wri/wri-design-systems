/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Box, Text, Container, Flex } from '@chakra-ui/react'
import Tag from '../../../Forms/Tag'
import ProgressBar from '../../../Status/ProgressBar'
import { InfoIcon, SettingsIcon, DownloadIcon, ShareIcon } from '../../../icons'
import AnalysisWidget from '..'
import { getThemedColor } from '../../../../lib/theme'

const meta = {
  title: 'Data Display/Analysis Widget/Templates/Bar Chart',
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
    label: 'Electricity',
    value: '24%',
  },
  {
    id: 'nav-2',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-3',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-4',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-5',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-6',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-7',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-8',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-9',
    label: 'Label',
    value: 'Data',
  },
  {
    id: 'nav-10',
    label: 'Label',
    value: 'Data',
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
      <Text style={{ fontWeight: '700' }}>
        Onstove - maximum benefit technology mix
      </Text>
    </div>
  </div>
)

type ItemProps = {
  id: string
  label: string
  value?: React.ReactNode | number | string
}
const Item = ({ id, label, value }: ItemProps) => (
  <div style={{ padding: '0 1rem' }}>
    <Container
      id={id}
      style={{
        padding: '0.7rem 0',
        borderBottom: `1px solid ${getThemedColor('neutral', 300)}`,
      }}
    >
      <Flex gap={3} flex='1' overflow='hidden' alignItems='center'>
        <Box flex='1' minWidth={0}>
          <Text style={{ color: getThemedColor('neutral', 700) }}>{label}</Text>
        </Box>
        <Text
          style={{ color: getThemedColor('neutral', 700) }}
          fontWeight={700}
        >
          {value}
        </Text>
        <div style={{ width: '60px' }}>
          <ProgressBar progress={100} />
        </div>
      </Flex>
    </Container>
  </div>
)
const BaseChildren = (
  <div>
    <Text style={{ padding: '1rem' }}>
      Showing <b>% people</b> that would benefit by each clean cooking
      technology in the selected area in the{' '}
      <span
        style={{
          color: getThemedColor('primary', 700),
          textDecoration: 'underline',
        }}
      >
        Stated Policies
      </span>{' '}
      scenario.
    </Text>
    {listItems.map(({ id, label, value }) => (
      <Item key={id} id={id} label={label} value={value} />
    ))}
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
