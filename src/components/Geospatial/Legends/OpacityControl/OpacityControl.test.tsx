import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import OpacityControl from '.'
import {
  opacityControlTextInputContainerStyles,
  opacityControlTriggerStyles,
} from './styled'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('OpacityControl — accessibility', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(
      <OpacityControl defaultValue={50} onOpacityChanged={() => {}} />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('OpacityControl — DS-363 style contract', () => {
  it('sizes the opacity field to the Figma spec (28px, 4px/8px padding, 8px gap)', () => {
    expect(opacityControlTextInputContainerStyles.styles).toMatch(
      /\.chakra-input\s*\{[\s\S]*?height:\s*1\.75rem/, // spacing/700 = 28px
    )
    expect(opacityControlTextInputContainerStyles.styles).toMatch(
      /\.chakra-input\s*\{[\s\S]*?padding:\s*0\.25rem\s+0\.5rem/, // spacing/100 200 = 4px 8px
    )
    expect(opacityControlTextInputContainerStyles.styles).toMatch(
      /\.chakra-input\s*\{[\s\S]*?gap:\s*0\.5rem/, // spacing/200 = 8px
    )
  })

  it('styles the trigger button grey while the popover is open', () => {
    expect(opacityControlTriggerStyles.styles).toMatch(
      /\.ds-opacity-control-trigger\[data-state=['"]open['"]\]:not\(:disabled\)/,
    )
    expect(opacityControlTriggerStyles.styles).toMatch(
      /background-color:\s*#F6F6F6/, // neutral-200
    )
    expect(opacityControlTriggerStyles.styles).toMatch(
      /border:\s*0\.0625rem\s+solid\s+\n?\s*#A1A1A1/, // 1px solid neutral-600
    )
    // Shadows/300
    expect(opacityControlTriggerStyles.styles).toMatch(
      /box-shadow:[\s\S]*?rgba\(0,\s*0,\s*0,\s*0\.1\)/,
    )
  })

  it('keeps the open-state style while the trigger is hovered', () => {
    // The secondary Button hover rule is (0,4,0); the open-state selector
    // with :not() guards + :hover must be at least as specific.
    expect(opacityControlTriggerStyles.styles).toMatch(
      /\.ds-opacity-control-trigger\[data-state=['"]open['"]\]:hover:not\(:disabled\):not\(\[data-disabled\]\)/,
    )
  })

  it('renders the trigger with the DS-363 class hook', () => {
    const { container } = render(
      <OpacityControl defaultValue={50} onOpacityChanged={() => {}} />,
    )

    expect(
      container.querySelector('.ds-opacity-control-trigger'),
    ).not.toBeNull()
  })
})
