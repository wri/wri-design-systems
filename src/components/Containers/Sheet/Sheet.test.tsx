import { render, screen, act, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { BottomSheet } from 'react-spring-bottom-sheet'

import Sheet from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

/**
 * The mocked sheet resolves its snap points on mount (like the real one) and
 * exposes the latest props so tests can drive `onSpringEnd` manually — the
 * component only reacts to snap changes through that callback plus the ref.
 */
jest.mock('react-spring-bottom-sheet', () => {
  const React = require('react')
  const { useEffect } = require('react')

  let lastProps: any = null

  const MockBottomSheet = React.forwardRef((props: any, ref: any) => {
    lastProps = props

    useEffect(() => {
      props.snapPoints?.({ headerHeight: 0, maxHeight: 400, footerHeight: 0 })
    }, [])

    return (
      <div ref={ref} role='dialog' aria-modal='true' aria-label='Bottom sheet'>
        <div>{props.header}</div>
        <div>{props.children}</div>
        <div>{props.footer}</div>
      </div>
    )
  })
  ;(MockBottomSheet as any).getLastProps = () => lastProps

  return { BottomSheet: MockBottomSheet }
})

const getLastProps = () =>
  (BottomSheet as any).getLastProps() as Record<string, any>

const setSheetHeight = (height: number) => {
  const dialog = screen.getByRole('dialog')
  Object.defineProperty(dialog, 'height', { value: height, configurable: true })
  act(() => {
    getLastProps().onSpringEnd()
  })
}

const renderSheet = (props: Record<string, any> = {}) =>
  render(
    <Sheet
      open
      onClose={() => {}}
      minimizedHeight={50}
      midHeight={200}
      maxFullHeight={400}
      header={<p>Sheet title</p>}
      content={<p>Sheet content</p>}
      footer={<p>Sheet footer</p>}
      {...props}
    />,
  )

describe('Sheet', () => {
  it('renders an open sheet with header, content and footer and no a11y violations', async () => {
    const { container } = renderSheet()

    expect(
      screen.getByRole('dialog', { name: 'Bottom sheet' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Sheet title')).toBeInTheDocument()
    expect(screen.getByText('Sheet content')).toBeInTheDocument()
    expect(screen.getByText('Sheet footer')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the grabber with the collapsed label while content stays hidden when closed', () => {
    renderSheet({ open: false })

    expect(
      screen.getByRole('button', { name: 'Expand sheet' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Expand sheet')).toBeInTheDocument()
    expect(screen.queryByText('Sheet content')).not.toBeInTheDocument()
  })

  it('advances the grabber label through the snap points', () => {
    const { unmount } = renderSheet()
    const grabber = screen.getByRole('button', { name: 'Expand sheet' })

    setSheetHeight(200)
    expect(grabber).toHaveAttribute('aria-label', 'Make full screen')
    expect(screen.getByText('Make full screen')).toBeInTheDocument()

    setSheetHeight(400)
    expect(grabber).toHaveAttribute('aria-label', 'Expanded sheet')
    // The grabber is disabled once the sheet is fully expanded.
    expect(grabber).toBeDisabled()

    unmount()

    renderSheet()
    setSheetHeight(20)
    expect(
      screen.getByRole('button', { name: 'Expand sheet' }),
    ).toBeInTheDocument()
  })

  it('snaps to the full height with grabber keyboard activation on desktop', () => {
    renderSheet()

    // The component re-reads the resolved snap points after a spring settles,
    // so settle once at the collapsed height before activating the grabber.
    setSheetHeight(20)

    const grabber = screen.getByRole('button', { name: 'Expand sheet' })
    const dialog = screen.getByRole('dialog') as any
    const snapTo = jest.fn()
    dialog.snapTo = snapTo

    fireEvent.keyDown(grabber, { key: 'Enter' })

    expect(snapTo).toHaveBeenCalledTimes(1)
    expect(snapTo.mock.calls[0][0]()).toBe(400)
  })

  it('supports localized grabber labels', () => {
    renderSheet({
      labels: { makeFullScreenLabel: 'Pantalla completa' },
    })

    setSheetHeight(200)
    expect(
      screen.getByRole('button', { name: 'Pantalla completa' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Pantalla completa')).toBeInTheDocument()
  })
})
