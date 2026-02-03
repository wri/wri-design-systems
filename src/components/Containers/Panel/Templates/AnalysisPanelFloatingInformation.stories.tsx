/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { Children, cloneElement, ReactElement, useState } from 'react'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import Panel from '..'
import AnalysisWidget from '../../../DataDisplay/AnalysisWidget'
import { legendPanelContainerStyles } from '../../../Geospatial/Legends/LegendPanel/styled'
import TabBar from '../../../Navigation/TabBar'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../../../Geospatial/Legends/LegendItem/LegendItemDemo'
import { PieChartIcon } from '../../../icons'
import QualitativeAttribute from '../../../Geospatial/Legends/QualitativeAttribute'
import InlineMessage from '../../../Status/InlineMessage'

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

export const Floating: Story = {
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
                  cloneElement(
                    child as ReactElement,
                    {
                      onUpClick: () => {
                        const items = reorder(legentItems, idx, idx - 1)
                        setLegentItems(items)
                      },
                      onDownClick: () => {
                        const items = reorder(legentItems, idx, idx + 1)
                        setLegentItems(items)
                      },
                    } as any,
                  ),
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
                <AnalysisWidget
                  collapsible={false}
                  header={<div>Title</div>}
                  actions={[
                    {
                      label: 'About',
                      onClick: fn(),
                    },
                  ]}
                >
                  <div style={{ padding: '20px' }}>
                    <p>
                      Lorem ipsum dolor <b>sit amet</b> consectetur. Vitae dolor
                      <b>tellus vel duis</b> viverra. Quisque at <b>quis</b>
                      facilisis ante.
                    </p>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <PieChartIcon />
                    </div>

                    <QualitativeAttribute
                      type='raster'
                      label='Label'
                      caption='Caption'
                      color='#00C694'
                    />
                    <QualitativeAttribute
                      type='raster'
                      label='Label'
                      caption='Caption'
                      color='#FFC506'
                    />
                    <QualitativeAttribute
                      type='raster'
                      label='Label'
                      caption='Caption'
                      color='#7485F7'
                    />
                    <QualitativeAttribute
                      type='raster'
                      label='Label'
                      caption='Caption'
                      color='#C9C9C9'
                    />
                    <QualitativeAttribute
                      type='raster'
                      label='Label'
                      caption='Caption'
                      color='#F25B4E'
                    />
                    <InlineMessage
                      label='Label'
                      caption='caption'
                      variant='info-white'
                      actionLabel='Label'
                      size='small'
                    />
                  </div>
                </AnalysisWidget>
              </div>
            ) : null}
          </div>
        }
      />
    )
  },
}
