import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Password from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const renderPassword = (props = {}) =>
  render(<Password label='Password' {...props} />)

const type = (value: string) => {
  const input = document.querySelector('input') as HTMLInputElement
  fireEvent.change(input, { target: { value } })
}

describe('Password — accessibility', () => {
  it('renders with label and caption and has no violations', async () => {
    const { container } = renderPassword({
      caption: 'Use at least 8 characters',
      minLength: 8,
    })

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the strength panel with no violations', async () => {
    const { container } = renderPassword()
    type('Abc123!!')

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Password — show/hide toggle', () => {
  it('starts hidden and toggles to visible', () => {
    const { getByRole } = renderPassword()

    const input = document.querySelector('input') as HTMLInputElement
    expect(input.getAttribute('type')).toBe('password')

    fireEvent.click(getByRole('button', { name: 'Show password' }))
    expect(input.getAttribute('type')).toBe('text')
  })

  it('toggles back to hidden', () => {
    const { getByRole } = renderPassword()

    const input = document.querySelector('input') as HTMLInputElement
    fireEvent.click(getByRole('button', { name: 'Show password' }))
    fireEvent.click(getByRole('button', { name: 'Hide password' }))

    expect(input.getAttribute('type')).toBe('password')
  })
})

describe('Password — strength validation', () => {
  it('reports very-weak for a short weak value', () => {
    const onChange = jest.fn()
    renderPassword({ onChange })

    type('abc')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ strength: 'very-weak', password: 'abc' }),
    )
  })

  it('reports weak for a short value with two rule types', () => {
    const onChange = jest.fn()
    renderPassword({ onChange })

    type('abc1')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ strength: 'weak' }),
    )
  })

  it('reports medium for a longer value with three rule types', () => {
    const onChange = jest.fn()
    renderPassword({ onChange })

    type('Abcdef1')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ strength: 'medium' }),
    )
  })

  it('reports strong when meeting minLength with four rule types', () => {
    const onChange = jest.fn()
    renderPassword({ onChange, minLength: 8 })

    type('Abcdefg1')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ strength: 'strong' }),
    )
  })

  it('reports very-strong when all five rules pass beyond minLength', () => {
    const onChange = jest.fn()
    renderPassword({ onChange, minLength: 8 })

    type('Abcdefgh1!')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ strength: 'very-strong' }),
    )
  })

  it('tracks individual rule flags', () => {
    const onChange = jest.fn()
    renderPassword({ onChange })

    type('Abc1!')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        length: false,
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialCharacters: true,
      }),
    )
  })
  it('respects a custom minLength for the length rule', () => {
    const onChange = jest.fn()
    renderPassword({ onChange, minLength: 4 })

    type('abcd')

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ length: true }),
    )
  })
})

describe('Password — strength panel', () => {
  it('hides the strength panel until a value is typed', () => {
    const { container } = renderPassword()

    expect(container.textContent).not.toContain('Password Strength:')
  })

  it('shows the strength label after typing', () => {
    const { container } = renderPassword()
    type('abc')

    expect(container.textContent).toContain('Password Strength:')
    expect(container.textContent).toContain('Very Weak')
  })

  it('shows the min-length rule with the configured length', () => {
    const { container } = renderPassword({ minLength: 12 })
    type('abc')

    expect(container.textContent).toContain('Use a minimum of 12 characters')
  })

  it('hides the whole panel with hideValidations', () => {
    const { container } = renderPassword({ hideValidations: true })
    type('abc')

    expect(container.textContent).not.toContain('Password Strength:')
  })

  it('omits disabled rules from the panel', () => {
    const { container } = renderPassword({
      disabledRules: { uppercase: true, specialCharacters: true },
    })
    type('abc')

    expect(container.textContent).not.toContain('Use an uppercase letter')
    expect(container.textContent).not.toContain('Use a special character')
    expect(container.textContent).toContain('Use a lowercase letter')
    expect(container.textContent).toContain('Use a number')
  })
})

describe('Password — optional label', () => {
  it('hides the optional suffix by default', () => {
    const { container } = renderPassword()

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix when showOptionalLabel is true', () => {
    const { container } = renderPassword({ showOptionalLabel: true })

    expect(container.textContent).toContain('(optional)')
  })

  it('never shows the optional suffix for required fields', () => {
    const { container } = renderPassword({
      required: true,
      showOptionalLabel: true,
    })

    expect(container.textContent).not.toContain('(optional)')
  })
})
