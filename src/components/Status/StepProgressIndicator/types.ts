export type StepProgressIndicatorProps = {
  steps: {
    label?: string
    onClick?: () => void
  }[]
  currentStep: number
}
