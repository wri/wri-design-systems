import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Dialog as ChakraDialog } from '@chakra-ui/react'

import Dialog from '.'
import { dialogBackdropStyles, dialogContainerStyles } from './styled'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

// The Chakra mock renders Dialog.Root as a plain <div> and strips unknown
// props, so dismissal/focus props never reach the DOM. Wrap the mocked Root
// and Backdrop to capture what the Dialog forwards so we can assert the
// props reach them.
const dialogRootCalls: Array<Record<string, unknown>> = []
const dialogBackdropCalls: Array<Record<string, unknown>> = []

beforeAll(() => {
  const originalRoot = (ChakraDialog as any).Root
  ;(ChakraDialog as any).Root = (props: any) => {
    dialogRootCalls.push(props)
    return originalRoot(props)
  }

  const originalBackdrop = (ChakraDialog as any).Backdrop
  ;(ChakraDialog as any).Backdrop = (props: any) => {
    dialogBackdropCalls.push(props)
    return originalBackdrop(props)
  }
})

beforeEach(() => {
  dialogRootCalls.length = 0
  dialogBackdropCalls.length = 0
})

const renderDialog = (props: Record<string, unknown> = {}) =>
  render(
    <Dialog open onClose={() => {}} title='Dialog title' {...props}>
      <p>Dialog body</p>
    </Dialog>,
  )

describe('Dialog — accessibility', () => {
  it('renders an open dialog with no violations', async () => {
    const { container } = render(
      <Dialog
        open
        onClose={() => {}}
        title='Delete dataset?'
        footer={<button type='button'>Save</button>}
      >
        <p>Dialog body</p>
      </Dialog>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a blocking dialog without a close button with no violations', async () => {
    const { container } = render(
      <Dialog
        open
        onClose={() => {}}
        title='Delete dataset?'
        hideCloseButton
        closeOnEscape={false}
        closeOnInteractOutside={false}
        footer={<button type='button'>Save</button>}
      >
        <p>Dialog body</p>
      </Dialog>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Dialog — backdrop', () => {
  it('renders a backdrop with the Modal treatment color', () => {
    renderDialog()

    expect(dialogBackdropCalls).toHaveLength(1)
    expect(dialogBackdropStyles.styles).toContain('rgba(0, 0, 0, 0.64)')
  })
})

describe('Dialog — width and responsive margins', () => {
  it('defaults to the 440px design width', () => {
    expect(dialogContainerStyles().styles).toContain('width: 27.5rem')
  })

  it('supports a custom width override', () => {
    expect(dialogContainerStyles('31.25rem').styles).toContain(
      'width: 31.25rem',
    )
  })

  it('keeps a 20px margin for the overlay on narrow viewports', () => {
    const { styles } = dialogContainerStyles()

    expect(styles).toContain('max-width: calc(100% - 2.5rem)')
    expect(styles).toContain('max-height: calc(100vh - 2.5rem)')
  })
})

describe('Dialog — visibility', () => {
  it('renders nothing when open is false', () => {
    const { container } = renderDialog({ open: false })

    expect(container).toBeEmptyDOMElement()
  })

  it('renders the dialog when open is true', () => {
    const { getByRole } = renderDialog()

    expect(getByRole('dialog', { name: 'Dialog' })).toBeInTheDocument()
  })
})

describe('Dialog — title', () => {
  it('renders the required title in the header', () => {
    const { getByRole } = renderDialog()

    expect(getByRole('heading', { name: 'Dialog title' })).toBeInTheDocument()
  })
})

describe('Dialog — body and footer', () => {
  it('renders children as the body', () => {
    const { getByText } = renderDialog()

    expect(getByText('Dialog body')).toBeInTheDocument()
  })

  it('omits the body when children is not provided', () => {
    const { queryByText } = render(
      <Dialog open onClose={() => {}} title='Dialog title' />,
    )

    expect(queryByText('Dialog body')).not.toBeInTheDocument()
  })

  it('renders the footer when provided', () => {
    const { getByRole } = renderDialog({
      footer: <button type='button'>Save</button>,
    })

    expect(getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('does not render a footer when not provided', () => {
    const { queryByRole } = renderDialog()

    expect(queryByRole('button', { name: 'Save' })).not.toBeInTheDocument()
  })
})

describe('Dialog — close button', () => {
  it('shows the close button by default', () => {
    const { getByRole } = renderDialog()

    expect(getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('hides the close button when hideCloseButton is true', () => {
    const { queryByRole } = renderDialog({ hideCloseButton: true })

    expect(queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })
})

describe('Dialog — dismissal props forwarded to Dialog.Root', () => {
  it('forwards the default closeOnEscape and closeOnInteractOutside', () => {
    renderDialog()

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({
      closeOnEscape: true,
      closeOnInteractOutside: true,
    })
  })

  it('forwards overridden dismissal props for blocking flows', () => {
    renderDialog({ closeOnEscape: false, closeOnInteractOutside: false })

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({
      closeOnEscape: false,
      closeOnInteractOutside: false,
    })
  })

  it('forwards scrollBehavior and initialFocusEl to Dialog.Root', () => {
    const initialFocusEl = () => document.body

    renderDialog({ scrollBehavior: 'outside', initialFocusEl })

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({
      scrollBehavior: 'outside',
      initialFocusEl,
    })
  })

  it('forwards the default top placement', () => {
    renderDialog()

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({ placement: 'top' })
  })

  it('forwards an overridden placement', () => {
    renderDialog({ placement: 'bottom' })

    const lastCall = dialogRootCalls[dialogRootCalls.length - 1]
    expect(lastCall).toMatchObject({ placement: 'bottom' })
  })
})

describe('Dialog — labels', () => {
  it('applies the localized aria-label on the dialog content', () => {
    const { getByRole } = renderDialog({
      labels: { dialogAriaLabel: 'Custom dialog' },
    })

    expect(getByRole('dialog', { name: 'Custom dialog' })).toBeInTheDocument()
  })

  it('applies the localized close button label', () => {
    const { getByRole } = renderDialog({
      labels: { closeLabel: 'Cerrar' },
    })

    expect(getByRole('button', { name: 'Cerrar' })).toBeInTheDocument()
  })
})

describe('Dialog — nested dialogs', () => {
  it('renders two stacked dialogs simultaneously', () => {
    const { getAllByRole } = render(
      <>
        <Dialog open onClose={() => {}} title='First'>
          <p>First body</p>
        </Dialog>
        <Dialog open onClose={() => {}} title='Second' width='20rem'>
          <p>Second body</p>
        </Dialog>
      </>,
    )

    expect(getAllByRole('dialog')).toHaveLength(2)
  })
})
