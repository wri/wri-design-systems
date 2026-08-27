import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Radio from '.'
import { radioGroupItemStyles } from './styled'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Radio — accessibility', () => {
  it('renders a labeled radio option and has no violations', async () => {
    const { container } = render(
      <Radio aria-label='Monthly billing' value='monthly'>
        Monthly billing
      </Radio>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled radio option and has no violations', async () => {
    const { container } = render(
      <Radio aria-label='Yearly billing' value='yearly' disabled>
        Yearly billing
      </Radio>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('keeps the parent background visible in default and focus states', () => {
    expect(radioGroupItemStyles.styles).toMatch(
      /background-color:\s*transparent !important/,
    )
    expect(radioGroupItemStyles.styles).toMatch(
      /(?:&:focus-visible|\[data-focus-visible\])[\s\S]*box-shadow:\s*none/,
    )
  })
})
