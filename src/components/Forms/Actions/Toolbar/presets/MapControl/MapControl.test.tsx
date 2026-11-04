import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapControlsToolbar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../../testUtils').createChakraMock(),
)

global.ResizeObserver = class ResizeObserver
  implements globalThis.ResizeObserver
{
  observe(_target: Element, _options?: ResizeObserverOptions): void {}

  unobserve(_target: Element): void {}

  disconnect(): void {}
}

describe('MapControlsToolbar', () => {
  it('renders every map control with its accessible name and has no a11y violations', async () => {
    const { container } = render(<MapControlsToolbar />)

    for (const name of [
      'Zoom in',
      'Zoom out',
      'Expand',
      'Share',
      'Print',
      'Settings',
      'Help',
    ]) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument()
    }
    expect(
      screen.getByRole('toolbar', { name: 'Map controls toolbar' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('invokes the matching handler for each control', () => {
    const onZoomInClick = jest.fn()
    const onZoomOutClick = jest.fn()
    const onQuestionClick = jest.fn()
    render(
      <MapControlsToolbar
        onZoomInClick={onZoomInClick}
        onZoomOutClick={onZoomOutClick}
        onQuestionClick={onQuestionClick}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))
    fireEvent.click(screen.getByRole('button', { name: 'Zoom out' }))
    fireEvent.click(screen.getByRole('button', { name: 'Help' }))

    expect(onZoomInClick).toHaveBeenCalledTimes(1)
    expect(onZoomOutClick).toHaveBeenCalledTimes(1)
    expect(onQuestionClick).toHaveBeenCalledTimes(1)
  })

  it('supports localized control names and a custom toolbar label', () => {
    render(
      <MapControlsToolbar
        ariaLabel='Controles del mapa'
        labels={{ zoomInAriaLabel: 'Acercar', zoomOutAriaLabel: 'Alejar' }}
      />,
    )

    expect(
      screen.getByRole('toolbar', { name: 'Controles del mapa' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Acercar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Alejar' })).toBeInTheDocument()
  })
})
