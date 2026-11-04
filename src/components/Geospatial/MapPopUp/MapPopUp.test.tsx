import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapPopUp from '.'

jest.mock('@floating-ui/react', () => {
  const actual = jest.requireActual('@floating-ui/react')
  return {
    ...actual,
    autoUpdate: () => () => {},
  }
})

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const renderPopUp = (
  props: Record<string, any> = {},
  onOpenChange = jest.fn(),
) => {
  const anchorRef = createRef<HTMLButtonElement>()

  const view = render(
    <div>
      <button ref={anchorRef} type='button'>
        Anchor
      </button>
      <MapPopUp
        open
        onOpenChange={onOpenChange}
        anchorRef={anchorRef}
        header={<div>Popup title</div>}
        content={<div>Popup content</div>}
        footer={<button type='button'>Action</button>}
        {...props}
      />
    </div>,
  )

  return { ...view, onOpenChange }
}

describe('MapPopUp', () => {
  it('renders an open dialog with header, content, footer and close button, with no a11y violations', async () => {
    const { container } = renderPopUp()

    expect(screen.getByText('Popup title')).toBeInTheDocument()
    expect(screen.getByText('Popup content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('closes through the close button via onOpenChange(false)', () => {
    const { onOpenChange } = renderPopUp()

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))

    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders nothing while closed', () => {
    renderPopUp({ open: false })

    expect(screen.queryByText('Popup content')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument()
  })

  it('supports a localized close button label', () => {
    renderPopUp({ labels: { closeLabel: 'Cerrar' } })

    expect(screen.getByRole('button', { name: 'Cerrar' })).toBeInTheDocument()
  })

  it('renders the dark variant with a close button and no a11y violations', async () => {
    const { container } = renderPopUp({ variant: 'dark' })

    expect(
      container.querySelector('.ds-map-pop-up-close-button'),
    ).not.toBeNull()
    expect(await axe(container)).toHaveNoViolations()
  })
})
