import React from 'react'

export interface AnalysisWidgetProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  expanded?: boolean
  collapsible?: boolean
  actions?: AnalysisWidgetActionsProps[]
  showFooterOnCollapsed?: boolean
}

export interface AnalysisWidgetActionsProps {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}
