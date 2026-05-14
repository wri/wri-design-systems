import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import OptionCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('OptionCard — accessibility', () => {
  it('renders radio cards with no violations', async () => {
    const { container } = render(
      <OptionCard
        defaultValue='standard'
        items={[
          {
            label: 'Standard',
            value: 'standard',
            caption: 'Best for most users',
            icon: <span aria-hidden='true'>S</span>,
          },
          {
            label: 'Advanced',
            value: 'advanced',
            caption: 'More control',
            icon: <span aria-hidden='true'>A</span>,
          },
        ]}
        onValueChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
