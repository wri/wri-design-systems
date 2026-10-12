import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Dialog } from '@chakra-ui/react'

import { getThemedSpacing } from '../../../lib/theme'
import Modal from '.'

jest.mock('react-draggable', () => ({
  __esModule: true,
  default: ({ children }: any) => children,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

// The Chakra mock renders Dialog.Root as a plain <div> and strips unknown
// props, so the DS-323 props (lazyMount, unmountOnExit, restoreFocus, modal,
// trapFocus) never reach the DOM. Wrap the mocked parts to capture what the
// Modal forwards so we can assert the props reach Dialog.Root.
const dialogRootCalls: Array<Record<string, unknown>> = []
const dialogBackdropCalls: Array<Record<string, unknown>> = []

beforeAll(() => {
  const originalRoot = (Dialog as any).Root
  ;(Dialog as any).Root = (props: any) => {
    dialogRootCalls.push(props)
    return originalRoot(props)
  }

  const originalBackdrop = (Dialog as any).Backdrop
  ;(Dialog as any).Backdrop = (props: any) => {
    dialogBackdropCalls.push(props)
    return originalBackdrop(props)
  }
})

beforeEach(() => {
  dialogRootCalls.length = 0
  dialogBackdropCalls.length = 0
})

const renderModal = (props: Record<string, unknown> = {}) =>
  render(
    <Modal
      open
      onClose={() => {}}
      header={<p>Modal title</p>}
      content={
        <div style={{ padding: getThemedSpacing(300) }}>
          <p>Modal content</p>
        </div>
      }
      {...props}
    />,
  )

describe('Modal — accessibility', () => {
  it('renders an open modal with no violations', async () => {
    const { container } = render(
      <Modal
        open
        onClose={() => {}}
        header={<p>Modal title</p>}
        content={
          <div style={{ padding: getThemedSpacing(300) }}>
            <p>Modal content</p>
          </div>
        }
        footer={<button type='button'>Save</button>}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Modal — DS-323 Dialog.Root prop forwarding', () => {
  it('forwards the recommended DS-323 config to Dialog.Root', () => {
    renderModal({
      lazyMount: true,
      unmountOnExit: true,
      restoreFocus: false,
      modal: false,
    })

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({
      lazyMount: true,
      unmountOnExit: true,
      restoreFocus: false,
      modal: false,
    })
  })

  it('forwards trapFocus and focus element getters to Dialog.Root', () => {
    const initialFocusEl = () => document.body
    const finalFocusEl = () => document.body

    renderModal({
      trapFocus: false,
      initialFocusEl,
      finalFocusEl,
    })

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({
      trapFocus: false,
      initialFocusEl,
      finalFocusEl,
    })
  })

  it('does not render a backdrop when draggable', () => {
    renderModal({ draggable: true })

    expect(dialogBackdropCalls).toHaveLength(0)
  })

  it('renders a backdrop when not draggable', () => {
    renderModal({ draggable: false })

    expect(dialogBackdropCalls).toHaveLength(1)
  })
})

describe('Modal — visibility', () => {
  it('renders nothing when open is false', () => {
    const { container } = renderModal({ open: false })

    expect(container).toBeEmptyDOMElement()
  })

  it('renders the dialog when open is true', () => {
    const { getByRole } = renderModal()

    expect(getByRole('dialog')).toBeInTheDocument()
  })
})

describe('Modal — blocking', () => {
  it('hides the close button when blocking', () => {
    const { queryByRole } = renderModal({ blocking: true })

    expect(queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })

  it('shows the close button when not blocking', () => {
    const { getByRole } = renderModal()

    expect(getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })
})

describe('Modal — multiple modals (DS-323 scenarios)', () => {
  const ds323Config = {
    lazyMount: true,
    unmountOnExit: true,
    restoreFocus: false,
    modal: false,
  }

  it('renders two stacked modals simultaneously', () => {
    const { getAllByRole } = render(
      <>
        <Modal
          open
          onClose={() => {}}
          header={<p>First</p>}
          content={<p>First content</p>}
          {...ds323Config}
        />
        <Modal
          open
          onClose={() => {}}
          header={<p>Second</p>}
          content={<p>Second content</p>}
          {...ds323Config}
        />
      </>,
    )

    expect(getAllByRole('dialog')).toHaveLength(2)
  })

  it('renders the replacement modal while the first is closing (swap scenario)', () => {
    const { getAllByRole, rerender } = render(
      <Modal
        open
        onClose={() => {}}
        header={<p>Modal A</p>}
        content={<p>Modal A content</p>}
        {...ds323Config}
      />,
    )

    expect(getAllByRole('dialog')).toHaveLength(1)

    // Modal A closes while Modal B opens — the DS-323 swap scenario.
    rerender(
      <>
        <Modal
          open={false}
          onClose={() => {}}
          header={<p>Modal A</p>}
          content={<p>Modal A content</p>}
          {...ds323Config}
        />
        <Modal
          open
          onClose={() => {}}
          header={<p>Modal B</p>}
          content={<p>Modal B content</p>}
          {...ds323Config}
        />
      </>,
    )

    expect(getAllByRole('dialog')).toHaveLength(1)
    expect(getAllByRole('dialog')[0]).toHaveTextContent('Modal B content')
  })
})
