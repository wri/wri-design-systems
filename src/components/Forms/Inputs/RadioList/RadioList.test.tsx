import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import RadioList from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const radios = [
  { value: 'standard', children: 'Standard' },
  { value: 'express', children: 'Express' },
  { value: 'priority', disabled: true, children: 'Priority' },
]

describe('RadioList — accessibility', () => {
  it('renders a radio group and has no violations', async () => {
    const { container } = render(
      <RadioList
        label='Delivery speed'
        caption='Choose one'
        name='speed'
        required
        radios={radios}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('RadioList — structure', () => {
  it('renders every radio inside the group', () => {
    const { getByRole } = render(
      <RadioList label='Delivery speed' name='speed' radios={radios} />,
    )

    const group = getByRole('radiogroup')
    expect(group.querySelectorAll('input[type="radio"]')).toHaveLength(3)
  })

  it('composes the group aria-label from label, caption and required text', () => {
    const { getByLabelText } = render(
      <RadioList
        label='Delivery speed'
        caption='Choose one'
        name='speed'
        required
        radios={radios}
      />,
    )

    expect(
      getByLabelText(/Delivery speed\. Choose one\. Required\./),
    ).toBeInTheDocument()
  })

  it('marks the group as optional when not required', () => {
    const { getByLabelText } = render(
      <RadioList label='Delivery speed' name='speed' radios={radios} />,
    )

    expect(getByLabelText(/Optional\./)).toBeInTheDocument()
  })

  it('includes the error message in the group aria-label and renders it', () => {
    const { getByLabelText, getByText } = render(
      <RadioList
        label='Delivery speed'
        name='speed'
        errorMessage='Choose a speed'
        radios={radios}
      />,
    )

    expect(getByLabelText(/Error: Choose a speed\./)).toBeInTheDocument()
    expect(getByText('Choose a speed')).toBeInTheDocument()
  })

  it('passes defaultValue as the controlled group value', () => {
    const { getByRole } = render(
      <RadioList
        label='Delivery speed'
        name='speed'
        defaultValue='express'
        radios={radios}
      />,
    )

    expect(getByRole('radiogroup')).toHaveAttribute('value', 'express')
  })

  it('renders the card variant without errors', () => {
    const { getByRole } = render(
      <RadioList
        label='Delivery speed'
        name='speed'
        variant='card'
        horizontal
        radios={radios}
      />,
    )

    expect(getByRole('radiogroup')).toBeInTheDocument()
  })
})

describe('RadioList — optional label', () => {
  it('hides the optional suffix by default', () => {
    const { container } = render(
      <RadioList label='Delivery speed' name='speed' radios={radios} />,
    )

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix when showOptionalLabel is true', () => {
    const { container } = render(
      <RadioList
        label='Delivery speed'
        name='speed'
        radios={radios}
        showOptionalLabel
      />,
    )

    expect(container.textContent).toContain('(optional)')
  })

  it('never shows the optional suffix for required fields', () => {
    const { container } = render(
      <RadioList
        label='Delivery speed'
        name='speed'
        required
        showOptionalLabel
        radios={radios}
      />,
    )

    expect(container.textContent).not.toContain('(optional)')
  })
})
