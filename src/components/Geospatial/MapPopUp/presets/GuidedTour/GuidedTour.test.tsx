import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import GuidedTour from '.'
import type { GuidedTourStep } from './types'

jest.mock('@floating-ui/react', () => {
  const actual = jest.requireActual('@floating-ui/react')
  return {
    ...actual,
    autoUpdate: () => () => {},
  }
})

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../testUtils').createChakraMock(),
)

const anchorRefs = [
  createRef<HTMLButtonElement>(),
  createRef<HTMLButtonElement>(),
  createRef<HTMLButtonElement>(),
]

const steps: GuidedTourStep[] = [
  {
    id: 'step-1',
    anchorRef: anchorRefs[0],
    title: 'Layers',
    content: <div>Step one body</div>,
  },
  {
    id: 'step-2',
    anchorRef: anchorRefs[1],
    title: 'Legend',
    content: <div>Step two body</div>,
  },
  {
    id: 'step-3',
    anchorRef: anchorRefs[2],
    title: 'Share',
    content: <div>Step three body</div>,
  },
]

const renderTour = (activeStepIndex = 0, extraProps = {}) => {
  const onStepChange = jest.fn()
  const onFinish = jest.fn()
  const onSkip = jest.fn()
  const onOpenChange = jest.fn()

  const utils = render(
    <div>
      <button ref={anchorRefs[0]} type='button'>
        Anchor 0
      </button>
      <button ref={anchorRefs[1]} type='button'>
        Anchor 1
      </button>
      <button ref={anchorRefs[2]} type='button'>
        Anchor 2
      </button>
      <GuidedTour
        open
        onOpenChange={onOpenChange}
        steps={steps}
        activeStepIndex={activeStepIndex}
        onStepChange={onStepChange}
        onFinish={onFinish}
        onSkip={onSkip}
        {...extraProps}
      />
    </div>,
  )

  return { ...utils, onStepChange, onFinish, onSkip, onOpenChange }
}

describe('GuidedTour', () => {
  it('renders the first step with its counter and a disabled previous button', () => {
    renderTour(0)

    expect(screen.getByText('Layers')).toBeInTheDocument()
    expect(screen.getByText('1 of 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Previous step')).toBeDisabled()
    expect(screen.getByLabelText('Next step')).not.toBeDisabled()
    expect(screen.getByLabelText('Skip all')).toBeInTheDocument()
  })

  it('navigates to the next and previous steps', () => {
    const { onStepChange } = renderTour(1)

    expect(screen.getByText('2 of 3')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Next step'))
    expect(onStepChange).toHaveBeenCalledWith(2)

    fireEvent.click(screen.getByLabelText('Previous step'))
    expect(onStepChange).toHaveBeenCalledWith(0)
  })

  it('shows a primary Start exploring button on the last step instead of Skip all', () => {
    const { onFinish, onSkip, onStepChange } = renderTour(2)

    expect(screen.getByText('3 of 3')).toBeInTheDocument()
    expect(screen.queryByLabelText('Skip all')).not.toBeInTheDocument()

    const startExploring = screen.getByRole('button', {
      name: 'Start exploring',
    })
    expect(startExploring).toBeInTheDocument()

    fireEvent.click(startExploring)
    expect(onFinish).toHaveBeenCalledTimes(1)
    expect(onSkip).not.toHaveBeenCalled()
    expect(onStepChange).not.toHaveBeenCalled()
  })

  it('calls onSkip when Skip all is clicked', () => {
    const { onSkip } = renderTour(0)

    fireEvent.click(screen.getByLabelText('Skip all'))
    expect(onSkip).toHaveBeenCalledTimes(1)
  })

  it('calls onOpenChange(false) when no skip/finish handler is provided', () => {
    const onOpenChange = jest.fn()

    render(
      <div>
        <button ref={anchorRefs[0]} type='button'>
          Anchor 0
        </button>
        <GuidedTour
          open
          onOpenChange={onOpenChange}
          steps={[steps[0]]}
          activeStepIndex={0}
          onStepChange={() => {}}
        />
      </div>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Start exploring' }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders nothing when closed or when the active step is out of range', () => {
    const { container: closed } = renderTour(0, { open: false })
    expect(closed.querySelector('[aria-label="Map popup dialog"]')).toBeNull()

    const { container: outOfRange } = renderTour(9)
    expect(
      outOfRange.querySelector('[aria-label="Map popup dialog"]'),
    ).toBeNull()
  })

  it('does not render the backdrop when showOverlay is false', () => {
    const { container } = renderTour(0, { showOverlay: false })

    expect(container.querySelector('.backdrop-blur-\\[1px\\]')).toBeNull()
  })

  it('supports label overrides for i18n', () => {
    renderTour(0, {
      labels: {
        stepCounterLabel: (current: number, total: number) =>
          `Paso ${current} de ${total}`,
        skipAllLabel: 'Omitir todo',
      },
    })

    expect(screen.getByText('Paso 1 de 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Omitir todo')).toBeInTheDocument()
  })

  it('renders with no a11y violations', async () => {
    const { container } = renderTour(0)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('keeps Skip all available and swaps it for Start exploring on the last step', () => {
    const { container: firstStep, unmount } = renderTour(0)

    expect(firstStep.querySelector('[aria-label="Skip all"]')).not.toBeNull()
    expect(firstStep.querySelector('[aria-label="Start exploring"]')).toBeNull()

    unmount()

    const { container: lastStep } = renderTour(2)

    expect(lastStep.querySelector('[aria-label="Skip all"]')).toBeNull()
    expect(
      lastStep.querySelector('[aria-label="Start exploring"]'),
    ).not.toBeNull()
  })
})
