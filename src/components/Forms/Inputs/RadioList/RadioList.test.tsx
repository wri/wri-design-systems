import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import RadioList from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('RadioList — accessibility', () => {
  it('renders a radio group and has no violations', async () => {
    const { container } = render(
      <RadioList
        label='Delivery speed'
        caption='Choose one'
        name='speed'
        required
        radios={[
          { value: 'standard', children: 'Standard' },
          { value: 'express', children: 'Express' },
          { value: 'priority', disabled: true, children: 'Priority' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
