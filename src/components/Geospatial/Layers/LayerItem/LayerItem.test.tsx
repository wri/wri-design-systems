import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerItem from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LayerItem', () => {
  it('renders switch variant with a labelled toggle and info button, with no a11y violations', async () => {
    const { container } = render(
      <LayerItem
        name='roads'
        label='Roads'
        caption='Road network'
        onChange={() => {}}
        onInfoClick={() => {}}
      />,
    )

    expect(
      screen.getByRole('checkbox', { name: 'Roads, Road network' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'About data' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the radio variant with a caption below the option', () => {
    render(
      <LayerItem
        name='satellite'
        label='Satellite'
        caption='Imagery layer'
        variant='radio'
      />,
    )

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('Satellite')).toBeInTheDocument()
    expect(screen.getByText('Imagery layer')).toBeInTheDocument()
    // The info button still renders (default on) — assert no toggle exists.
    expect(screen.queryByRole('checkbox')).toBeNull()
  })

  it('hides the info button when showInfoButton is false or a custom label is given', () => {
    const { rerender } = render(
      <LayerItem name='a' label='A' showInfoButton={false} />,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    rerender(
      <LayerItem
        name='a'
        label='A'
        infoButtonLabel='Layer details'
        onInfoClick={() => {}}
      />,
    )

    expect(screen.getByRole('button', { name: 'Layer details' })).toBeInTheDocument()
  })

  it('disables the toggle and info button together', () => {
    const onChange = jest.fn()
    render(
      <LayerItem name='a' label='A' caption='C' disabled onChange={onChange} />,
    )

    const toggle = screen.getByRole('checkbox', { name: 'A, C' })

    expect(screen.getByRole('button', { name: 'About data' })).toBeDisabled()

    fireEvent.click(toggle)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('supports a localized info button label', () => {
    render(
      <LayerItem
        name='a'
        label='A'
        labels={{ aboutDataLabel: 'Sobre los datos' }}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Sobre los datos' }),
    ).toBeInTheDocument()
  })
})
