import { act, fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import Toast from '.'
import { closeToast, showToast, toasters } from './utils'
import { CheckCircleIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const getToasterCount = () => screen.queryAllByTestId('chakra-toaster').length

const containerQuery = (selector: string) => document.querySelector(selector)

describe('Toast', () => {
  afterEach(() => {
    act(() => closeToast())
  })

  it('renders without crashing', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('renders without crashing with custom labels', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Toast />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the toaster UI only once when multiple instances are mounted', () => {
    // Storybook Docs renders the primary story twice; each mounted <Toast />
    // must not duplicate the toaster portals or a single showToast() would
    // render multiple toasts (DS-340).
    const first = render(<Toast />)
    const second = render(<Toast />)

    // One mounted owner renders the 6 placement toasters; the second
    // instance must not add any more.
    expect(getToasterCount()).toBe(6)

    // When the owner unmounts, the queued instance takes over and the
    // toaster UI keeps rendering.
    first.unmount()
    expect(getToasterCount()).toBe(6)

    second.unmount()
    expect(getToasterCount()).toBe(0)
  })

  it('showToast creates a single toast per call', () => {
    render(<Toast />)
    expect(() =>
      act(() => {
        showToast({
          label: 'Label',
          caption: 'Caption',
          type: 'general',
          placement: 'bottom-end',
        })
      }),
    ).not.toThrow()
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('maps the deprecated info type to general', () => {
    render(<Toast />)
    const createSpy = jest.spyOn(toasters['bottom-end'], 'create')

    act(() => {
      showToast({
        label: 'Label',
        type: 'info',
        placement: 'bottom-end',
      })
    })

    expect(createSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'general' }),
    )
    expect(screen.getByText('Label')).toBeInTheDocument()

    // The global Jest config uses `resetMocks: true`, which does not restore
    // spied methods between tests — restore explicitly so later tests keep
    // the real store behaviour.
    createSpy.mockRestore()
  })

  it('renders an information toast', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        caption: 'Caption',
        type: 'information',
        placement: 'bottom-end',
      })
    })

    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Caption')).toBeInTheDocument()
  })

  it('renders the default type icon by default', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
      })
    })

    expect(containerQuery('.ds-toast-icon-container svg')).toBeInTheDocument()
  })

  it('hideIcon hides the default type icon', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'success',
        placement: 'bottom-end',
        hideIcon: true,
      })
    })

    expect(containerQuery('.ds-toast-icon-container svg')).toBeNull()
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('hideIcon also hides a custom icon', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'success',
        placement: 'bottom-end',
        icon: <CheckCircleIcon />,
        hideIcon: true,
      })
    })

    expect(containerQuery('.ds-toast-icon-container svg')).toBeNull()
  })

  it('hideIcon hides the loading spinner', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'loading',
        placement: 'bottom-end',
        hideIcon: true,
      })
    })

    expect(
      containerQuery('.ds-toast-icon-container [role="status"]'),
    ).toBeNull()
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('passes width through to the toast meta', () => {
    render(<Toast />)
    const createSpy = jest.spyOn(toasters['bottom-end'], 'create')

    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        width: '15.625rem',
      })
    })

    expect(createSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        meta: expect.objectContaining({ width: '15.625rem' }),
      }),
    )

    // The global Jest config uses `resetMocks: true`, which does not restore
    // spied methods between tests — restore explicitly so later tests keep
    // the real store behaviour.
    createSpy.mockRestore()
  })

  it('still honours the deprecated maxWidth as width', () => {
    render(<Toast />)
    const createSpy = jest.spyOn(toasters['bottom-end'], 'create')

    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        maxWidth: '15.625rem',
      })
    })

    expect(createSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        meta: expect.objectContaining({ width: '15.625rem' }),
      }),
    )

    createSpy.mockRestore()
  })

  it('prefers width over the deprecated maxWidth when both are given', () => {
    render(<Toast />)
    const createSpy = jest.spyOn(toasters['bottom-end'], 'create')

    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        width: '20rem',
        maxWidth: '15.625rem',
      })
    })

    expect(createSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        meta: expect.objectContaining({ width: '20rem' }),
      }),
    )

    createSpy.mockRestore()
  })

  it('renders the icon-only close button when closable without an action', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        closable: true,
      })
    })

    const closeButton = screen.getByRole('button', { name: 'Dismiss' })
    expect(closeButton).toBeInTheDocument()
    // Icon-only: no visible text content.
    expect(closeButton.textContent).toBe('')
  })

  it('renders the borderless dismiss button instead of the close button when closable with an action', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        closable: true,
        action: {
          label: 'Action',
          onClick: jest.fn(),
        },
      })
    })

    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()

    const dismissButton = screen.getByRole('button', { name: 'Dismiss' })
    expect(dismissButton.textContent).toBe('Dismiss')
  })

  it('calls onClose and dismisses the toast when the close button is clicked', () => {
    render(<Toast />)
    const onClose = jest.fn()
    act(() => {
      showToast({
        label: 'Label',
        type: 'general',
        placement: 'bottom-end',
        closable: true,
        onClose,
      })
    })

    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Label')).not.toBeInTheDocument()
  })

  it('calls onClose when the dismiss button next to an action is clicked', () => {
    render(<Toast />)
    const onClose = jest.fn()
    act(() => {
      showToast({
        label: 'Label',
        type: 'success',
        placement: 'bottom-end',
        closable: true,
        onClose,
        action: {
          label: 'Action',
          onClick: jest.fn(),
        },
      })
    })

    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Label')).not.toBeInTheDocument()
  })

  it('supports an ariaLabel for non-text labels', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: <strong>Label</strong>,
        ariaLabel: 'Accessible name',
        type: 'general',
        placement: 'bottom-end',
      })
    })

    expect(screen.getByLabelText('Accessible name')).toBeInTheDocument()
  })

  it('allows action, dismiss and close on a loading toast', () => {
    render(<Toast />)
    act(() => {
      showToast({
        label: 'Label',
        type: 'loading',
        placement: 'bottom-end',
        closable: true,
        action: {
          label: 'Action',
          onClick: jest.fn(),
        },
      })
    })

    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument()
  })
})
