import React from 'react'

export interface AnalysisWidgetProps {
  children: React.ReactNode
  header: React.ReactNode
  footer?: React.ReactNode
  expanded?: boolean
  collapsible?: boolean
  actions?: AnalysisWidgetActionsProps[]
}

export interface AnalysisWidgetActionsProps {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}
