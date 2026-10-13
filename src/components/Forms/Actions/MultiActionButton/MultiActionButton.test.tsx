import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import MultiActionButton from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const extraActions = [
  { label: 'Export as PDF', value: 'pdf', onClick: () => {} },
  { label: 'Export as CSV', value: 'csv', onClick: () => {} },
]

describe('MultiActionButton — accessibility', () => {
  it('renders with main label and extra actions and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='secondary'
        mainActionLabel='Export'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        disabled
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('MultiActionButton — disabled state', () => {
  it('disables both the main action and the dropdown trigger', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        disabled
      />,
    )

    const buttons = screen.getAllByRole('button')
    const disabledButtons = buttons.filter(
      (button) => (button as HTMLButtonElement).disabled,
    )
    expect(disabledButtons).toHaveLength(2)
  })

  it('does not disable buttons when disabled is not set', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
      />,
    )

    const buttons = screen.getAllByRole('button')
    const disabledButtons = buttons.filter(
      (button) => (button as HTMLButtonElement).disabled,
    )
    expect(disabledButtons).toHaveLength(0)
  })

  it('renders disabled menu items as non-interactive', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={[
          ...extraActions,
          {
            label: 'Locked action',
            value: 'locked',
            onClick: () => {},
            disabled: true,
          },
        ]}
      />,
    )

    const lockedItem = screen.getByRole('menuitem', { name: 'Locked action' })
    expect(lockedItem).toHaveAttribute('disabled')
  })

  it('exposes the disabled aria-label on the group', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        disabled
      />,
    )

    expect(screen.getByRole('group')).toHaveAttribute(
      'aria-label',
      'Download action button with menu, disabled',
    )
  })
})

describe('MultiActionButton — i18n labels', () => {
  it('uses the default open-options aria-label', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Open Download options' }),
    ).toBeInTheDocument()
  })

  it('allows overriding the internal labels', () => {
    render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        labels={{
          openOptionsLabel: (label) => `Más opciones de ${label}`,
          disabledAriaLabel: (label) => `${label} deshabilitado`,
        }}
        disabled
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Más opciones de Download' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('group')).toHaveAttribute(
      'aria-label',
      'Download deshabilitado',
    )
  })
})
