/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { Children, cloneElement, ReactElement, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Panel from '..'
import { legendPanelContainerStyles } from '../../../Geospatial/Legends/LegendPanel/styled'
import TabBar from '../../../Navigation/TabBar'
import Button from '../../../Forms/Actions/Button'
import AnalysisWidget from '../../../DataDisplay/AnalysisWidget'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../../../Geospatial/Legends/LegendItem/LegendItemDemo'
import { GraphIcon } from '../../../icons'

const meta = {
  title: 'Containers/Panel/Templates/Analysis Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabValue = 'analysis-tab'

export const FloatingNoInformation: Story = {
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
        variant='floating'
        content={
          <div css={legendPanelContainerStyles}>
            <TabBar
              defaultValue='analysis-tab'
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
              <AnalysisWidget
                footer={
                  <div style={{ padding: '10px' }}>
                    <Button
                      style={{ width: '100%' }}
                      label='Label'
                      variant='primary'
                    />
                  </div>
                }
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    height: '600px',
                  }}
                >
                  <div style={{ padding: '20px' }}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <GraphIcon />
                    </div>
                    <h2 style={{ fontWeight: '700', fontSize: '20px' }}>
                      Select an area on the map to analyse
                    </h2>
                    <p>
                      When you select an area, the result of your analysis will
                      appear here.
                    </p>
                  </div>
                </div>
              </AnalysisWidget>
            ) : null}
          </div>
        }
      />
    )
  },
}
