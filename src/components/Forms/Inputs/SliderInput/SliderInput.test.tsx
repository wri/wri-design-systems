import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import SliderInput from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('SliderInput — accessibility', () => {
  it('renders with numeric input and slider and has no violations', async () => {
    const { container } = render(
      <SliderInput
        label='Opacity'
        caption='Set opacity value'
        sliderItem={{ min: 0, max: 100, value: [50] }}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('SliderInput — numeric input', () => {
  it('renders the initial value in the input', () => {
    const { container } = render(
      <SliderInput
        label='Opacity'
        sliderItem={{ min: 0, max: 100, value: [50] }}
      />,
    )

    const input = container.querySelector(
      'input[type="number"]',
    ) as HTMLInputElement
    expect(input.value).toBe('50')
  })

  it('clamps values below the minimum on blur', () => {
    const onChange = jest.fn()
    const { container } = render(
      <SliderInput
        label='Opacity'
        sliderItem={{ min: 0, max: 100, value: [50] }}
        onChange={onChange}
      />,
    )

    const input = container.querySelector(
      'input[type="number"]',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: '-5' } })
    fireEvent.blur(input)

    expect(onChange).toHaveBeenLastCalledWith([0])
  })

  it('clamps values above the maximum on blur', () => {
    const onChange = jest.fn()
    const { container } = render(
      <SliderInput
        label='Opacity'
        sliderItem={{ min: 0, max: 100, value: [50] }}
        onChange={onChange}
      />,
    )

    const input = container.querySelector(
      'input[type="number"]',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: '150' } })
    fireEvent.blur(input)

    expect(onChange).toHaveBeenLastCalledWith([100])
  })

  it('falls back to the minimum for non-numeric input on blur', () => {
    const onChange = jest.fn()
    const { container } = render(
      <SliderInput
        label='Opacity'
        sliderItem={{ min: 10, max: 100, value: [50] }}
        onChange={onChange}
      />,
    )

    const input = container.querySelector(
      'input[type="number"]',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'abc' } })
    fireEvent.blur(input)

    expect(onChange).toHaveBeenLastCalledWith([10])
  })

  it('clamps the first value to the second in range mode on blur', () => {
    const onChange = jest.fn()
    const { container } = render(
      <SliderInput
        label='Range'
        sliderItem={{ min: 0, max: 100, value: [40, 80] }}
        onChange={onChange}
      />,
    )

    const inputs = container.querySelectorAll('input[type="number"]')
    fireEvent.change(inputs[0], { target: { value: '90' } })
    fireEvent.blur(inputs[0])

    expect(onChange).toHaveBeenLastCalledWith([80, 80])
  })

  it('clamps the second value to the first in range mode on blur', () => {
    const onChange = jest.fn()
    const { container } = render(
      <SliderInput
        label='Range'
        sliderItem={{ min: 0, max: 100, value: [40, 80] }}
        onChange={onChange}
      />,
    )

    const inputs = container.querySelectorAll('input[type="number"]')
    fireEvent.change(inputs[1], { target: { value: '10' } })
    fireEvent.blur(inputs[1])

    expect(onChange).toHaveBeenLastCalledWith([40, 40])
  })

  it('renders two inputs in range mode', () => {
    const { container } = render(
      <SliderInput
        label='Range'
        sliderItem={{ min: 0, max: 100, value: [40, 80] }}
      />,
    )

    expect(container.querySelectorAll('input[type="number"]')).toHaveLength(2)
  })
})
