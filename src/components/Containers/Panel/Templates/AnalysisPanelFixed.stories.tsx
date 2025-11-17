/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Box, Text } from '@chakra-ui/react'
import Panel from '..'
import AnalysisWidget from '../../../DataDisplay/AnalysisWidget'
import List from '../../../DataDisplay/List'
import TabBar from '../../../Navigation/TabBar'
import Tag from '../../../Forms/Tag'
import { ShareIcon, SaveIcon, DownloadIcon, SettingsIcon } from '../../../icons'
import Button from '../../../Forms/Actions/Button'
import { getThemedColor } from '../../../../lib/theme'
import CloseButton from '../../../Forms/Actions/CloseButton'

const meta = {
  title: 'Containers/Panel/Templates/Analysis Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabValue = 'prioritization-tab'

const NumberIcon = ({ value }: { value: string }) => (
  <div
    style={{
      background: getThemedColor('primary', 300),
      height: '24px',
      width: '24px',
      textAlign: 'center',
    }}
  >
    {value}
  </div>
)

const listItems = [
  {
    id: 'nav-1',
    label: 'Nyando, Kisumu',
    caption: '[34.826, -0.151]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='1' />,
  },
  {
    id: 'nav-2',
    label: 'Kisumu East, Kisumu',
    caption: '[34.826, -0.125]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='2' />,
  },
  {
    id: 'nav-3',
    label: 'Nyando, Kisumu',
    caption: '[34.889, -0.142]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='3' />,
  },
  {
    id: 'nav-4',
    label: 'Kisumu East, Kisumu',
    caption: '[34.835, -0.098]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='4' />,
  },
  {
    id: 'nav-5',
    label: 'Nyando, Kisumu',
    caption: '[34.844, -0.098]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='5' />,
  },
  {
    id: 'nav-6',
    label: 'Nyando, Kisumu',
    caption: '[34.826, -0.16]',
    variant: 'navigation' as const,
    onItemClick: () => fn(),
    icon: <NumberIcon value='6' />,
  },
]

export const Fixed: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)

    const handleOnTabClick = (tabValue: string) => {
      setSelectedTabValue(tabValue)
    }

    return (
      <Panel
        width='380px'
        variant='fixed'
        content={
          <div>
            <Box padding='20px'>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: '700' }}>Analysis results</Text>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <Text
                    style={{
                      color: getThemedColor('neutral', 700),
                      fontWeight: 400,
                    }}
                  >
                    Close
                  </Text>
                  <CloseButton />
                </div>
              </div>
              <Text
                style={{
                  color: getThemedColor('neutral', 700),
                  fontWeight: 400,
                }}
              >
                Click on an area on the map to learn more about that particular
                area.
              </Text>
            </Box>
            <TabBar
              defaultValue='prioritization-tab'
              tabs={[
                { label: 'Prioritization', value: 'prioritization-tab' },
                {
                  label: 'Data',
                  value: 'data-tab',
                },
              ]}
              onTabClick={handleOnTabClick}
            />
            {selectedTabValue === 'data-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  height: '200px',
                }}
              >
                data
              </div>
            ) : null}
            {selectedTabValue === 'prioritization-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '20px',
                  gap: '10px',
                  overflowY: 'auto',
                  maxHeight: '550px',
                  minHeight: '250px',
                }}
              >
                <AnalysisWidget
                  header={
                    <div>
                      <Text style={{ fontWeight: '700' }}>
                        High priority areas
                      </Text>
                      <Text
                        style={{
                          color: getThemedColor('neutral', 700),
                          fontWeight: 400,
                        }}
                      >
                        Showing areas (1km2) with the highest prioritization
                        scores based on your analysis criteria.
                      </Text>
                    </div>
                  }
                  actions={[
                    {
                      label: 'About',
                      onClick: fn(),
                    },
                  ]}
                  footer={
                    <div
                      style={{
                        display: 'flex',
                        padding: '0.5rem',
                        marginBottom: '50px',
                      }}
                    >
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
                  }
                >
                  <List items={listItems} />
                </AnalysisWidget>
              </div>
            ) : null}
          </div>
        }
        footer={
          <Box
            background='white'
            display='flex'
            width='100%'
            gap={3}
            padding={4}
            justifyContent='center'
          >
            <Button label='Save' variant='secondary' leftIcon={<SaveIcon />} />
            <Button
              label='Share'
              variant='secondary'
              leftIcon={<ShareIcon />}
            />
            <Button
              label='Export'
              variant='secondary'
              leftIcon={<DownloadIcon />}
            />
          </Box>
        }
      />
    )
  },
}
