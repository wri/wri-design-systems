import React from 'react'

export type LegendPanelProps = {
  legendContent: React.ReactElement[]
  analysisContent: React.ReactNode
  onTabClick?: (tabValue: string) => void
}
