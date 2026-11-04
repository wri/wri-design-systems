import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import QualitativeAttribute from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('QualitativeAttribute', () => {
  it('renders a line indicator with label, caption and toggle action, with no a11y violations', async () => {
    const { container } = render(
      <QualitativeAttribute
        type='line'
        label='Primary forest'
        caption='Tree cover density'
        color='#006D2C'
        showActionButton
        onActionClick={() => {}}
      />,
    )

    expect(screen.getByText('Primary forest')).toBeInTheDocument()
    expect(screen.getByText('Tree cover density')).toBeInTheDocument()
    // The button's accessible name combines the visibility helper text and
    // the visible label through aria-labelledby.
    expect(
      screen.getByRole('button', {
        name: /Primary forest, Tree cover density/,
      }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('toggles between Hide and Show, flipping aria-pressed each time', () => {
    const onActionClick = jest.fn()
    render(
      <QualitativeAttribute
        type='point'
        label='Monitoring sites'
        color='#2F6F3F'
        showActionButton
        onActionClick={onActionClick}
      />,
    )

    const button = screen.getByRole('button', { name: /Monitoring sites/ })

    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button).toHaveTextContent('Hide')

    fireEvent.click(button)
    expect(onActionClick).toHaveBeenCalledTimes(1)
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button).toHaveTextContent('Show')

    fireEvent.click(button)
    expect(onActionClick).toHaveBeenCalledTimes(2)
    expect(button).toHaveTextContent('Hide')
  })

  it('describes the current visibility state in the hidden helper text', () => {
    const { container } = render(
      <QualitativeAttribute
        type='raster'
        label='Canopy cover'
        caption='Percentage'
        color='#5A7247'
        showActionButton
        onActionClick={() => {}}
      />,
    )

    // The helper paragraph is the only absolutely-positioned element.
    const helper = Array.from(container.querySelectorAll('p')).find((node) =>
      node.textContent?.includes('Currently'),
    )

    expect(helper).toHaveTextContent(
      'Canopy cover, Percentage. Currently visible.',
    )

    fireEvent.click(screen.getByRole('button'))

    expect(helper).toHaveTextContent(
      'Canopy cover, Percentage. Currently hidden.',
    )
  })

  it('omits the action button unless enabled through both props', () => {
    const { rerender } = render(
      <QualitativeAttribute type='line' label='Rivers' color='#3B82F6' />,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    rerender(
      <QualitativeAttribute
        type='line'
        label='Rivers'
        color='#3B82F6'
        showActionButton
        onActionClick={() => {}}
      />,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
