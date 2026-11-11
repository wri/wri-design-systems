import React from 'react'
import type { AnalysisWidgetLabels } from '../../../lib/i18n/types'

export type { AnalysisWidgetLabels }

export interface AnalysisWidgetProps {
  /** Widget content shown when the section is expanded */
  children: React.ReactNode
  /** Clickable header rendered as the accordion trigger */
  header?: React.ReactNode
  /** Footer content rendered below the widget body */
  footer?: React.ReactNode
  /** Whether the widget starts expanded. Defaults to `true` */
  expanded?: boolean
  /** Whether the header can toggle the widget open and closed. Defaults to `true` */
  collapsible?: boolean
  /** Action buttons rendered in the header */
  actions?: AnalysisWidgetActionsProps[]
  /** Whether the footer stays visible while the widget is collapsed. Defaults to `false` */
  showFooterOnCollapsed?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AnalysisWidgetLabels>
}

export interface AnalysisWidgetActionsProps {
  /** Label of the action button */
  label: string
  /** Called when the action button is clicked */
  onClick: () => void
  /** Optional icon rendered before the label */
  icon?: React.ReactNode
}
