import { render } from '@testing-library/react'
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
        sliderItem={{
          min: 0,
          max: 100,
          value: [50],
        }}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
