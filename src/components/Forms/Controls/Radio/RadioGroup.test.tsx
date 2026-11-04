import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import RadioGroup from './RadioGroup'
import Radio from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const renderGroup = (
  props: Partial<Parameters<typeof RadioGroup>[0]> & {
    children?: React.ReactNode
  } = {},
) =>
  render(
    <RadioGroup {...props} name='speed'>
      <Radio value='standard'>Standard</Radio>
      <Radio value='express'>Express</Radio>
    </RadioGroup>,
  )

describe('RadioGroup — accessibility', () => {
  it('renders a radiogroup with no violations', async () => {
    const { container } = renderGroup()

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('RadioGroup — structure', () => {
  it('renders its radio items inside the group', () => {
    renderGroup()

    const group = screen.getByRole('radiogroup')
    expect(group.querySelectorAll('input[type="radio"]')).toHaveLength(2)
  })

  it('renders with horizontal layout without errors', () => {
    const { container } = renderGroup({ horizontal: true })

    expect(container.querySelector('[role="radiogroup"]')).not.toBeNull()
  })

  it('renders with a custom gap without errors', () => {
    const { container } = renderGroup({ customGap: '2rem' })

    expect(container.querySelector('[role="radiogroup"]')).not.toBeNull()
  })
})

describe('RadioGroup — controlled value', () => {
  it('passes the controlled value to the group root', () => {
    renderGroup({ value: 'express' })

    expect(screen.getByRole('radiogroup')).toHaveAttribute(
      'value',
      'express',
    )
  })

  it('defaults to an empty value', () => {
    renderGroup()

    expect(screen.getByRole('radiogroup').getAttribute('value') || '').toBe('')
  })
})
