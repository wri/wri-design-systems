/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { Children, cloneElement, ReactElement, useState } from 'react'

import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../LegendItem/LegendItemDemo'
import Panel from '../../../Containers/Panel'
import { legendPanelContainerStyles } from './styled'
import TabBar from '../../../Navigation/TabBar'
import { AnalysisIcon, LegendIcon } from '../../../icons'

const defaultTabValue = 'legend-tab'

const LegendPanelDemo = () => {
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
      content={
        <div css={legendPanelContainerStyles}>
          <TabBar
            tabs={[
              { label: 'Legend', value: 'legend-tab', icon: <LegendIcon /> },
              {
                label: 'Analysis',
                value: 'analysis-tab',
                icon: <AnalysisIcon />,
              },
            ]}
            onTabClick={handleOnTabClick}
          />
          {selectedTabValue === 'legend-tab' ? (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
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
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div>analysisContent</div>
            </div>
          ) : null}
        </div>
      }
    />
  )
}

export default LegendPanelDemo
