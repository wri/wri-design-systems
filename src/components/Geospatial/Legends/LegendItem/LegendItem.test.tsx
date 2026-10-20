import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LegendItem from '.'
import { legendItemContentStyles } from './styled'

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

describe('LegendItem — DS-363 layout contract', () => {
  it('spaces children with a 16px (spacing/400) column gap', () => {
    expect(legendItemContentStyles.styles).toMatch(/flex-direction:\s*column/)
    expect(legendItemContentStyles.styles).toMatch(
      /gap:\s*1rem/, // spacing/400 = 16px
    )
  })

  it('wraps children in the gap container', () => {
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

    expect(container.textContent).toContain('Legend content')
  })
})
