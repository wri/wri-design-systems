import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Combobox from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Combobox — accessibility', () => {
  it('renders with label and caption and has no violations', async () => {
    const { container } = render(
      <Combobox
        label='Country'
        caption='Choose one option'
        placeholder='Select a country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
