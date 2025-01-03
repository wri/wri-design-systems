// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Children, useState } from 'react'

import { LegendPanelProps } from './types'
import { LegendPanelContainer } from './styled'
import { AnalysisIcon, LegendIcon } from '../../icons'
import TabBar from '../../TabBar'

const defaultTabValue = 'legend-tab'

const LegendPanel = ({ legendContent, analysisContent, onTabClick }: LegendPanelProps) => {
  const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)
  const [legentItems] = useState(Children.map(legendContent, (child, index) => ({
    id: index,
    child,
    sequence: index,
  })) || [])

  const handleOnTabClick = (tabValue: string) => {
    setSelectedTabValue(tabValue)

    if (onTabClick) {
      onTabClick(tabValue)
    }
  }

  return (
    <LegendPanelContainer>
      <TabBar
        tabs={[
          { label: 'Legend', value: 'legend-tab', icon: <LegendIcon /> },
          { label: 'Analysis', value: 'analysis-tab', icon: <AnalysisIcon /> },
        ]}
        onTabClick={handleOnTabClick}
      />
      {selectedTabValue === 'legend-tab' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {legentItems.map((item) => item.child)}
        </div>
      ) : null}
      {selectedTabValue === 'analysis-tab' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {analysisContent}
        </div>
      ) : null}
    </LegendPanelContainer>
  )
}

export default LegendPanel
