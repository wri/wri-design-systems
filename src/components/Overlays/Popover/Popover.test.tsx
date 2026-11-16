import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Popover as ChakraPopover, Portal } from '@chakra-ui/react'
import * as React from 'react'

import Popover from '.'
import { POPOVER_ARROW_GUTTER, popoverContentStyles } from './styled'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

// The Chakra mock renders Popover.Root as a plain <div> and Portal as a
// Fragment without managing open state, so dismissal/positioning props never
// reach the DOM. Wrap the mocked Root and Portal to capture what the Popover
// forwards so we can assert the props reach them.
const popoverRootCalls: Array<Record<string, unknown>> = []
const popoverArrowCalls: Array<Record<string, unknown>> = []
const portalCalls: Array<Record<string, unknown>> = []

beforeAll(() => {
  const originalRoot = (ChakraPopover as any).Root
  ;(ChakraPopover as any).Root = (props: any) => {
    popoverRootCalls.push(props)
    return originalRoot(props)
  }

  const originalArrow = (ChakraPopover as any).Arrow
  ;(ChakraPopover as any).Arrow = (props: any) => {
    popoverArrowCalls.push(props)
    return originalArrow(props)
  }

  const chakraModule = jest.requireMock('@chakra-ui/react')
  const originalPortal = chakraModule.Portal
  chakraModule.Portal = (props: any) => {
    portalCalls.push(props)
    return originalPortal(props)
  }
})

beforeEach(() => {
  popoverRootCalls.length = 0
  popoverArrowCalls.length = 0
  portalCalls.length = 0
})

const lastRootCall = () => popoverRootCalls[popoverRootCalls.length - 1]

const renderPopover = (props: Record<string, unknown> = {}) =>
  render(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Popover content='Popover content' {...(props as any)}>
      <button type='button'>Open popover</button>
    </Popover>,
  )

describe('Popover — accessibility', () => {
  it('renders with a trigger and content and has no violations', async () => {
    const { container } = renderPopover()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with form content and has no violations', async () => {
    const { container } = render(
      <Popover
        content={
          <div>
            <input aria-label='URL' placeholder='http://example.org' />
            <button type='button'>Apply</button>
          </div>
        }
      >
        <button type='button' aria-label='Edit link details' />
      </Popover>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders without the arrow and has no violations', async () => {
    const { container } = renderPopover({ hideArrow: true })

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders when disabled and has no violations', async () => {
    const { container } = renderPopover({ disabled: true })

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Popover — rendering', () => {
  it('renders the trigger element as its own trigger', () => {
    const { container } = renderPopover()

    const button = screen.getByRole('button', { name: 'Open popover' })

    // Trigger merges onto the child via asChild — no wrapper interactive
    // element, so there can be no nested button-in-button structure.
    expect(container.querySelectorAll('button')).toHaveLength(1)
    expect(button.closest('span')).toBeNull()
  })

  it('renders string content', () => {
    renderPopover()

    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('renders custom ReactNode content', () => {
    render(
      <Popover
        content={
          <div>
            <input aria-label='URL' />
            <button type='button'>Apply</button>
          </div>
        }
      >
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(screen.getByLabelText('URL')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument()
  })

  it('renders multiple popovers simultaneously', () => {
    render(
      <>
        <Popover content='First popover'>
          <button type='button'>First trigger</button>
        </Popover>
        <Popover content='Second popover'>
          <button type='button'>Second trigger</button>
        </Popover>
      </>,
    )

    expect(screen.getByText('First popover')).toBeInTheDocument()
    expect(screen.getByText('Second popover')).toBeInTheDocument()
  })
})

describe('Popover — props forwarded to Popover.Root', () => {
  it('forwards the default dismissal props and placement with the arrow gutter', () => {
    renderPopover()

    expect(lastRootCall()).toMatchObject({
      closeOnEscape: true,
      closeOnInteractOutside: true,
      positioning: {
        placement: 'bottom-start',
        gutter: POPOVER_ARROW_GUTTER,
      },
    })
  })

  it('forwards overridden dismissal props and placement', () => {
    renderPopover({
      closeOnEscape: false,
      closeOnInteractOutside: false,
      placement: 'right-end',
    })

    expect(lastRootCall()).toMatchObject({
      closeOnEscape: false,
      closeOnInteractOutside: false,
      positioning: {
        placement: 'right-end',
      },
    })
  })

  it('omits the gutter compensation when the arrow is hidden', () => {
    renderPopover({ hideArrow: true })

    expect(lastRootCall().positioning).toEqual({
      placement: 'bottom-start',
    })
  })

  it('passes the controlled open state through', () => {
    const { rerender } = renderPopover({ open: false })
    expect(lastRootCall().open).toBe(false)

    rerender(
      <Popover open content='Popover content'>
        <button type='button'>Open popover</button>
      </Popover>,
    )
    expect(lastRootCall().open).toBe(true)
  })

  it('forces open false when disabled', () => {
    renderPopover({ open: true, disabled: true })

    expect(lastRootCall().open).toBe(false)
  })
})

describe('Popover — arrow', () => {
  it('renders the arrow by default', () => {
    renderPopover()

    expect(popoverArrowCalls).toHaveLength(1)
  })

  it('omits the arrow when hideArrow is set', () => {
    renderPopover({ hideArrow: true })

    expect(popoverArrowCalls).toHaveLength(0)
  })
})

describe('Popover — portal', () => {
  it('renders into the default portal when no container is given', () => {
    renderPopover()

    expect(portalCalls).toHaveLength(1)
    expect(portalCalls[0].container).toBeUndefined()
  })

  it('forwards portalRef as the portal container', () => {
    const portalRef = React.createRef<HTMLElement>() as React.RefObject<HTMLElement>

    renderPopover({ portalRef })

    expect(portalCalls[0].container).toBe(portalRef)
  })
})

describe('Popover — styles', () => {
  it('applies the 366px Figma default width', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'left',
      'bottom-start',
    )

    expect(styles).toContain('--popover-size: 22.875rem')
  })

  it('applies a custom width override', () => {
    const { styles } = popoverContentStyles('31.25rem', 'left', 'bottom-start')

    expect(styles).toContain('--popover-size: 31.25rem')
  })

  it('sizes the rotated-square tip to produce the 18×9 Figma arrow', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'left',
      'bottom-start',
    )

    expect(styles).toContain('--arrow-size: calc(1.125rem / 1.4142)')
  })

  it('aligns the arrow left by default without overriding the end side', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'left',
      'bottom-start',
    )

    expect(styles).toContain('left: 1.25rem !important')
    expect(styles).not.toContain('left: auto')
  })

  it('aligns the arrow right on the end side of the edge', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'right',
      'bottom-start',
    )

    expect(styles).toContain('left: auto !important')
    expect(styles).toContain('right: 1.25rem !important')
  })

  it('uses the trigger-centered arrow for center alignment', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'center',
      'bottom-start',
    )

    expect(styles).not.toContain('left: 1.25rem')
    expect(styles).not.toContain('right: 1.25rem')
  })

  it('aligns along the vertical edge for side placements', () => {
    const { styles } = popoverContentStyles('22.875rem', 'left', 'left-start')

    expect(styles).toContain('top: 1.25rem !important')
    expect(styles).not.toContain('left: 1.25rem')
  })

  it('rounds the tip apex and softens the base junctions', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'left',
      'bottom-start',
    )

    expect(styles).toContain('border-color: #A1A1A1')
    expect(styles).toContain('border-top-left-radius: 0.125rem')
    expect(styles).toContain('border-top-right-radius: 0.0625rem')
    expect(styles).toContain('border-bottom-left-radius: 0.0625rem')
  })

  it('compensates the tip offset against the popover edge', () => {
    const { styles } = popoverContentStyles(
      '22.875rem',
      'left',
      'bottom-start',
    )

    expect(styles).toContain('top: -0.0313rem !important')
  })
})
