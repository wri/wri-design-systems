import type { ProgressBarLabels } from '../../../lib/i18n/types'

export type { ProgressBarLabels }

export type ProgressBarProps = {
  progress: number
  color?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ProgressBarLabels>
}
