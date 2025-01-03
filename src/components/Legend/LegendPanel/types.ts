import React from 'react'

export type LegendPanelProps = {
  legendContent: React.ReactNode
  analysisContent: React.ReactNode
  onTabClick?: (tabValue: string) => void
}
