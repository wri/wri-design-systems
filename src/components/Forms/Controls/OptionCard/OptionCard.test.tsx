import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import OptionCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const items = [
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
    disabled: true,
  },
]

describe('OptionCard — accessibility', () => {
  it('renders radio cards with no violations', async () => {
    const { container } = render(
      <OptionCard defaultValue='standard' items={items} onValueChange={() => {}} />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the expanded variant with no violations', async () => {
    const { container } = render(
      <OptionCard
        defaultValue='standard'
        variant='expanded'
        items={[{ ...items[0], children: <div>Extra content</div> }]}
        onValueChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('OptionCard — structure', () => {
  it('renders labels and captions for every item', () => {
    const { getByText } = render(
      <OptionCard defaultValue='standard' items={items} />,
    )

    expect(getByText('Standard')).toBeInTheDocument()
    expect(getByText('Best for most users')).toBeInTheDocument()
    expect(getByText('Advanced')).toBeInTheDocument()
  })

  it('marks disabled items with aria-disabled', () => {
    const { getByLabelText } = render(
      <OptionCard defaultValue='standard' items={items} />,
    )

    expect(getByLabelText('Advanced')).toHaveAttribute('aria-disabled', 'true')
    expect(getByLabelText('Standard')).not.toHaveAttribute('aria-disabled')
  })

  it('renders radio inputs for each item', () => {
    const { container } = render(<OptionCard defaultValue='standard' items={items} />)

    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(2)
  })

  it('hides the indicator with hideControl', () => {
    const { container } = render(
      <OptionCard defaultValue='standard' items={items} hideControl />,
    )

    expect(
      container.querySelectorAll('[aria-hidden="true"]').length,
    ).toBeGreaterThanOrEqual(0)
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(2)
  })

  it('renders addon children in the expanded variant', () => {
    const expandedItems = [{ ...items[0], children: <div>Extra content</div> }]

    const expanded = render(
      <OptionCard defaultValue='standard' variant='expanded' items={expandedItems} />,
    )
    expect(expanded.getByText('Extra content')).toBeInTheDocument()
  })
})
