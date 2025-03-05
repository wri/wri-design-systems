/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { Children, cloneElement, ReactElement, useState } from 'react'

import { LegendPanelProps } from './types'
import { legendPanelContainerStyles } from './styled'
import { AnalysisIcon, LegendIcon } from '../../../icons'
import TabBar from '../../../Navigation/TabBar'

const defaultTabValue = 'legend-tab'

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const LegendPanel = ({
  legendContent,
  analysisContent,
  onTabClick,
}: LegendPanelProps) => {
  const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)
  const [legentItems, setLegentItems] = useState(legendContent)

  const handleOnTabClick = (tabValue: string) => {
    setSelectedTabValue(tabValue)

    if (onTabClick) {
      onTabClick(tabValue)
    }
  }

  return (
    <div css={legendPanelContainerStyles}>
      <TabBar
        tabs={[
          { label: 'Legend', value: 'legend-tab', icon: <LegendIcon /> },
          { label: 'Analysis', value: 'analysis-tab', icon: <AnalysisIcon /> },
        ]}
        onTabClick={handleOnTabClick}
      />
      {selectedTabValue === 'legend-tab' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Children.map<React.ReactNode, React.ReactNode>(
            legentItems,
            (child, idx) =>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {analysisContent}
        </div>
      ) : null}
    </div>
  )
}

export default LegendPanel
