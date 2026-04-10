import React from 'react'
import type { AnalysisWidgetLabels } from '../../../lib/i18n/types'

export type { AnalysisWidgetLabels }

export interface AnalysisWidgetProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  expanded?: boolean
  collapsible?: boolean
  actions?: AnalysisWidgetActionsProps[]
  showFooterOnCollapsed?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AnalysisWidgetLabels>
}

export interface AnalysisWidgetActionsProps {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}
