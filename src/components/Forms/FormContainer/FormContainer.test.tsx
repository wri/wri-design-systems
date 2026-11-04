import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import FormContainer from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('FormContainer — accessibility', () => {
  it('renders label, error, and children with no violations', async () => {
    const { container } = render(
      <FormContainer label='Profile settings' error='Required'>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('FormContainer — structure', () => {
  it('renders as a group with label and error wiring', () => {
    const { getByRole, getByText } = render(
      <FormContainer label='Profile settings' error='Required'>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    const group = getByRole('group')
    expect(group).toHaveAttribute('aria-labelledby')
    expect(group).toHaveAttribute('aria-describedby')

    const label = getByText('Profile settings')
    const error = getByText('Required')
    expect(group.getAttribute('aria-labelledby')).toBe(label.id)
    expect(group.getAttribute('aria-describedby')).toBe(error.id)
  })

  it('omits aria-labelledby when there is no label', () => {
    const { getByRole } = render(
      <FormContainer>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(getByRole('group').getAttribute('aria-labelledby')).toBeNull()
  })

  it('omits aria-describedby when there is no error', () => {
    const { getByRole } = render(
      <FormContainer label='Profile settings'>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(getByRole('group').getAttribute('aria-describedby')).toBeNull()
  })

  it('renders children', () => {
    const { getByRole } = render(
      <FormContainer label='Actions'>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('renders the error bar only when there is an error', () => {
    const withError = render(
      <FormContainer label='Settings' error='Required'>
        <div>content</div>
      </FormContainer>,
    )
    const group = withError.getByRole('group')
    // The error bar is an extra leading div before the content wrapper.
    expect(group.children).toHaveLength(2)
  })

  it('renders no error bar without an error', () => {
    const withoutError = render(
      <FormContainer label='Settings'>
        <div>content</div>
      </FormContainer>,
    )
    const cleanGroup = withoutError.getByRole('group')
    expect(cleanGroup.children).toHaveLength(1)
  })

  it('renders without label or error with no violations', async () => {
    const { container } = render(
      <FormContainer>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
