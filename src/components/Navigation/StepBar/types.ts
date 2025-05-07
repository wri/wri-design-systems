export type StepBarProps = {
  steps: {
    label?: string
    onClick?: () => void
  }[]
  currentStep: number
}
