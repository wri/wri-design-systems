import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerParameters from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LayerParameters', () => {
  it('renders the accordion trigger with the given label and no a11y violations', async () => {
    const { container } = render(
      <LayerParameters label='Adjust layer parameters' openedByDefault>
        <div>Parameter control</div>
      </LayerParameters>,
    )

    expect(
      screen.getByRole('button', { name: 'Adjust layer parameters' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('wraps each child in its own content row', () => {
    const { container } = render(
      <LayerParameters label='Parameters'>
        <div>Opacity</div>
        <div>Color</div>
      </LayerParameters>,
    )

    const rows = container.querySelectorAll('.ds-layer-parameters-item-child')

    expect(rows).toHaveLength(2)
    expect(rows[0]).toHaveTextContent('Opacity')
    expect(rows[1]).toHaveTextContent('Color')
  })
})
