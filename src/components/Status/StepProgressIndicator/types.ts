import type { StepProgressIndicatorLabels } from '../../../lib/i18n/types'

export type { StepProgressIndicatorLabels }

export type StepProgressIndicatorProps = {
  /** Step definitions rendered as numbered indicators */
  steps: {
    label?: string
    onClick?: () => void
  }[]
  /** 1-based index of the active step */
  currentStep: number
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<StepProgressIndicatorLabels>
}
