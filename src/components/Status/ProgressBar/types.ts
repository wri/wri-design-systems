import type { ProgressBarLabels } from '../../../lib/i18n/types'

export type { ProgressBarLabels }

export type ProgressBarProps = {
  /** Percentage of the bar filled, clamped between 0 and 100 */
  progress: number
  /** Custom fill color of the bar. Defaults to `getThemedColor('primary', 500)` */
  color?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ProgressBarLabels>
}
