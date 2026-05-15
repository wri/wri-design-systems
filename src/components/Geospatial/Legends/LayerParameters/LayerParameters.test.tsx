import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerParameters from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LayerParameters — accessibility', () => {
  it('renders accordion parameters with no violations', async () => {
    const { container } = render(
      <LayerParameters label='Adjust layer parameters' openedByDefault>
        <div>Parameter control</div>
      </LayerParameters>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
