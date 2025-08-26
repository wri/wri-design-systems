/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { Children, cloneElement, ReactElement, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Panel from '.'
import { legendPanelContainerStyles } from '../../Geospatial/Legends/LegendPanel/styled'
import TabBar from '../../Navigation/TabBar'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../../Geospatial/Legends/LegendItem/LegendItemDemo'
import { AnalysisIcon, LegendIcon } from '../../icons'

const meta = {
  title: 'Layout/Panel/Legend Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabValue = 'legend-tab'

export const LegendPanel: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)
    const [legentItems, setLegentItems] = useState([
      <LegendItemDemo />,
      <LegendItemDemo2 />,
      <LegendItemDemo3 />,
    ])

    const handleOnTabClick = (tabValue: string) => {
      setSelectedTabValue(tabValue)
    }

    const reorder = (list: any[], startIndex: number, endIndex: number) => {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    return (
      <Panel
        {...args}
        content={
          <div css={legendPanelContainerStyles}>
            <TabBar
              tabs={[
                { label: 'Legend', value: 'legend-tab' },
                {
                  label: 'Analysis',
                  value: 'analysis-tab',
                },
              ]}
              onTabClick={handleOnTabClick}
            />
            {selectedTabValue === 'legend-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {Children.map(legentItems, (child, idx) =>
                  cloneElement(child as ReactElement, {
                    onUpClick: () => {
                      const items = reorder(legentItems, idx, idx - 1)
                      setLegentItems(items)
                    },
                    onDownClick: () => {
                      const items = reorder(legentItems, idx, idx + 1)
                      setLegentItems(items)
                    },
                  }),
                )}
              </div>
            ) : null}
            {selectedTabValue === 'analysis-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div>analysisContent</div>
              </div>
            ) : null}
          </div>
        }
      />
    )
  },
}
