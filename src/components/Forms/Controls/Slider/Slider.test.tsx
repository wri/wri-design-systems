import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Slider from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Slider', () => {
  it('renders thumbs with value previews, marks and labels, and has no a11y violations', async () => {
    const { container } = render(
      <Slider
        aria-label={['Opacity'] as string[]}
        min={0}
        max={100}
        value={[50]}
        marks={[0, 50, { value: 100, label: 'Max' }]}
      />,
    )

    const group = screen.getByRole('group')
    const inputs = group.querySelectorAll('input[type="range"]')
    const previews = container.querySelectorAll('.ds-slider-value-preview')

    expect(inputs).toHaveLength(1)
    expect(previews).toHaveLength(1)
    expect(previews[0]).toHaveTextContent('50')
    expect(screen.getByText('Max')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders one thumb per value in range mode', () => {
    const { container } = render(
      <Slider
        aria-label={['Minimum', 'Maximum'] as string[]}
        min={0}
        max={10}
        value={[2, 8]}
      />,
    )

    const inputs = screen
      .getByRole('group')
      .querySelectorAll('input[type="range"]')
    const previews = container.querySelectorAll('.ds-slider-value-preview')

    expect(inputs).toHaveLength(2)
    expect(previews[0]).toHaveTextContent('2')
    expect(previews[1]).toHaveTextContent('8')
  })

  it('renders centred marks at min, midpoint and max when isCentred is set', () => {
    const { container } = render(
      <Slider
        aria-label={['Range'] as unknown as string[]}
        min={0}
        max={10}
        value={[3, 7]}
        isCentred
      />,
    )

    // The mocked Marker renders one div per value inside the marker group.
    const markers = container.querySelectorAll(
      '[value="0"], [value="5"], [value="10"]',
    )

    expect(markers).toHaveLength(3)
  })

  it('reflects an updated controlled value in the thumb preview', () => {
    const { rerender } = render(
      <Slider
        aria-label={['Opacity'] as string[]}
        min={0}
        max={100}
        value={[25]}
        onValueChange={() => {}}
      />,
    )

    expect(
      screen.getByRole('group').querySelector('.ds-slider-value-preview'),
    ).toHaveTextContent('25')

    rerender(
      <Slider
        aria-label={['Opacity'] as string[]}
        min={0}
        max={100}
        value={[75]}
        onValueChange={() => {}}
      />,
    )

    expect(
      screen.getByRole('group').querySelector('.ds-slider-value-preview'),
    ).toHaveTextContent('75')
  })

  it('does not report changes through the mocked hidden input', () => {
    const onValueChange = jest.fn()
    render(
      <Slider
        aria-label={['Opacity'] as string[]}
        min={0}
        max={100}
        value={[0]}
        onValueChange={onValueChange}
      />,
    )

    const root = screen.getByRole('group')

    // The mocked Root surfaces the current value as an attribute.
    expect(root).toHaveAttribute('value', '0')

    const input = root.querySelector('input[type="range"]') as HTMLInputElement

    // The mock's hidden input is not wired to the Root's onValueChange, so
    // typing into it must stay silent (interaction is covered at ark-ui level).
    fireEvent.change(input, { target: { value: '40' } })
    expect(onValueChange).not.toHaveBeenCalled()
  })
})
