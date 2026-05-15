import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LegendItem from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LegendItem — accessibility', () => {
  it('renders legend controls with no violations', async () => {
    const { container } = render(
      <LegendItem
        layerName='Tree cover loss'
        dataUnit='ha'
        onUpClick={() => {}}
        onDownClick={() => {}}
        onRemoveClick={() => {}}
        onInfoClick={() => {}}
        onOpacityChanged={() => {}}
      >
        <div>Legend content</div>
      </LegendItem>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
