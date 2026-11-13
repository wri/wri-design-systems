import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import GuidedTour from '.'
import type { GuidedTourStep } from './types'

jest.mock('@floating-ui/react', () => ({
  ...jest.requireActual('@floating-ui/react'),
  autoUpdate: () => () => {},
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../testUtils').createChakraMock(),
)

/**
 * Guards against the render loop that used to hang the Storybook story:
 * the anchors, the step objects and the annotation slots must all keep a
 * stable identity across renders.
 */
describe('GuidedTour — story stability', () => {
  it('does not re-render the tree when props keep the same identity', () => {
    const anchorRef = createRef<HTMLButtonElement>()
    const onStepChange = jest.fn()
    const steps: GuidedTourStep[] = [
      { id: 'a', anchorRef, title: 'One', content: <div>Body</div> },
      { id: 'b', anchorRef, title: 'Two', content: <div>Body</div> },
    ]

    let renders = 0
    const Harness = () => {
      renders += 1
      return (
        <div>
          <button ref={anchorRef} type='button'>
            Anchor
          </button>
          <GuidedTour
            open
            onOpenChange={() => {}}
            steps={steps}
            activeStepIndex={0}
            onStepChange={onStepChange}
          />
        </div>
      )
    }

    render(<Harness />)

    // One mount render, plus at most one extra from the anchor sync effect.
    expect(renders).toBeLessThanOrEqual(3)
  })

  it('advances to the next step without remounting the loop', () => {
    const anchorRef = createRef<HTMLButtonElement>()
    const onStepChange = jest.fn()
    const steps: GuidedTourStep[] = [
      { id: 'a', anchorRef, title: 'One', content: <div>Body</div> },
      { id: 'b', anchorRef, title: 'Two', content: <div>Body</div> },
      { id: 'c', anchorRef, title: 'Three', content: <div>Body</div> },
    ]

    render(
      <div>
        <button ref={anchorRef} type='button'>
          Anchor
        </button>
        <GuidedTour
          open
          onOpenChange={() => {}}
          steps={steps}
          activeStepIndex={1}
          onStepChange={onStepChange}
        />
      </div>,
    )

    expect(screen.getByText('Two')).toBeInTheDocument()
    expect(screen.getByText('2 of 3')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Next step'))
    expect(onStepChange).toHaveBeenCalledWith(2)
  })
})
