import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import OpacityControl from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('OpacityControl — accessibility', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<OpacityControl defaultValue={50} onOpacityChanged={() => {}} />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
