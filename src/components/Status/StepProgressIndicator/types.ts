import type { StepProgressIndicatorLabels } from '../../../lib/i18n/types'

export type { StepProgressIndicatorLabels }

export type StepProgressIndicatorProps = {
  steps: {
    label?: string
    onClick?: () => void
  }[]
  currentStep: number
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<StepProgressIndicatorLabels>
}
