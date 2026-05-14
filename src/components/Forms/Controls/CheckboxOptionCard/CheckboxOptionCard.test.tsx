import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CheckboxOptionCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('CheckboxOptionCard — accessibility', () => {
  it('renders checkbox cards with no violations', async () => {
    const { container } = render(
      <CheckboxOptionCard
        defaultValue={['daily']}
        items={[
          {
            label: 'Daily',
            value: 'daily',
            caption: 'Every day',
            icon: <span aria-hidden='true'>D</span>,
          },
          {
            label: 'Weekly',
            value: 'weekly',
            caption: 'Once a week',
            icon: <span aria-hidden='true'>W</span>,
          },
        ]}
        onValueChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
