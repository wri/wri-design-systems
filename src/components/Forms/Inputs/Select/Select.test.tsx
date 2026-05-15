import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Select from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Select — accessibility', () => {
  it('renders a single-select with label and no violations', async () => {
    const { container } = render(
      <Select
        label='Country'
        caption='Choose your country'
        placeholder='Select one'
        aria-label='Country'
        items={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
