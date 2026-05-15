import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ScaleBar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('ScaleBar — accessibility', () => {
  it('renders scale bar values with no violations', async () => {
    const { container } = render(
      <ScaleBar
        colors={['#e8f5e9', '#66bb6a', '#1b5e20']}
        values={['0', '50', '100']}
        subLabels={['Low', 'Medium', 'High']}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
