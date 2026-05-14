import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Slider from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Slider — accessibility', () => {
  it('renders a slider with aria-label and no violations', async () => {
    const { container } = render(
      <Slider
        aria-label={['Opacity'] as string[]}
        min={0}
        max={100}
        value={[50]}
        marks={[0, 50, 100]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a centered range slider and has no violations', async () => {
    const { container } = render(
      <Slider
        aria-label={['Minimum value', 'Maximum value'] as string[]}
        min={0}
        max={10}
        value={[2, 8]}
        isCentred
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
