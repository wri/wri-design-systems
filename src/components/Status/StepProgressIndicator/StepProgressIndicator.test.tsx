import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import StepProgressIndicator from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const steps = [
  { label: 'Step One', onClick: jest.fn() },
  { label: 'Step Two', onClick: jest.fn() },
  { label: 'Step Three', onClick: jest.fn() },
]

describe('StepProgressIndicator', () => {
  it('renders all step buttons', () => {
    const { getAllByRole } = render(
      <StepProgressIndicator steps={steps} currentStep={1} />,
    )
    expect(getAllByRole('button')).toHaveLength(3)
  })

  it('renders step labels', () => {
    const { getByText } = render(
      <StepProgressIndicator steps={steps} currentStep={1} />,
    )
    expect(getByText('Step One')).toBeInTheDocument()
    expect(getByText('Step Two')).toBeInTheDocument()
    expect(getByText('Step Three')).toBeInTheDocument()
  })

  it('marks the current step with aria-current', () => {
    const { getAllByRole } = render(
      <StepProgressIndicator steps={steps} currentStep={2} />,
    )
    const buttons = getAllByRole('button')
    expect(buttons[1]).toHaveAttribute('aria-current', 'true')
    expect(buttons[0]).not.toHaveAttribute('aria-current', 'true')
    expect(buttons[2]).not.toHaveAttribute('aria-current', 'true')
  })

  it('disables future steps', () => {
    const { getAllByRole } = render(
      <StepProgressIndicator steps={steps} currentStep={1} />,
    )
    const buttons = getAllByRole('button')
    expect(buttons[1]).toBeDisabled()
    expect(buttons[2]).toBeDisabled()
  })

  it('calls onClick on an accessible (completed/current) step', () => {
    const onClick = jest.fn()
    const stepsWithClick = [{ label: 'Step One', onClick }]
    const { getAllByRole } = render(
      <StepProgressIndicator steps={stepsWithClick} currentStep={1} />,
    )
    fireEvent.click(getAllByRole('button')[0])
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <StepProgressIndicator steps={steps} currentStep={1} />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
