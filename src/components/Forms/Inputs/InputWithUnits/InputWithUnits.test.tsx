import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import InputWithUnits from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('InputWithUnits — accessibility', () => {
  it('renders with unit selector and has no violations', async () => {
    const { container } = render(
      <InputWithUnits
        label='Distance'
        caption='Enter a value'
        units={[
          { label: 'km', value: 'km' },
          { label: 'mi', value: 'mi' },
        ]}
        defaultValue='10'
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
