import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CheckboxOptionCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const items = [
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
    disabled: true,
  },
]

describe('CheckboxOptionCard — accessibility', () => {
  it('renders checkbox cards with no violations', async () => {
    const { container } = render(
      <CheckboxOptionCard defaultValue={['daily']} items={items} onValueChange={() => {}} />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the expanded variant with no violations', async () => {
    const { container } = render(
      <CheckboxOptionCard
        defaultValue={['daily']}
        items={[{ ...items[0], variant: 'expanded' as const, children: <div>Extra</div> }]}
        onValueChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('CheckboxOptionCard — structure', () => {
  it('renders labels and captions for every item', () => {
    const { getByText } = render(<CheckboxOptionCard items={items} />)

    expect(getByText('Daily')).toBeInTheDocument()
    expect(getByText('Every day')).toBeInTheDocument()
    expect(getByText('Weekly')).toBeInTheDocument()
  })

  it('renders a checkbox input for each item', () => {
    const { container } = render(<CheckboxOptionCard items={items} />)

    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(2)
  })

  it('renders addon children only in the expanded variant', () => {
    const expandedItems = [
      { ...items[0], variant: 'expanded' as const, children: <div>Extra</div> },
    ]

    const expanded = render(<CheckboxOptionCard items={expandedItems} />)
    expect(expanded.getByText('Extra')).toBeInTheDocument()
  })

  it('omits the caption when absent', () => {
    const { queryByText } = render(
      <CheckboxOptionCard items={[{ label: 'Bare', value: 'bare' }]} />,
    )

    expect(queryByText('Bare')).toBeInTheDocument()
  })
})
