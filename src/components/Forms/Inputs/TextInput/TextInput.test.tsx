import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import TextInput from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('TextInput — accessibility', () => {
  it('renders with a label, caption, and no violations', async () => {
    const { container } = render(
      <TextInput
        label='Email address'
        caption='We will not share your email'
        placeholder='name@example.com'
        aria-label='Email address'
        onChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an error state and has no violations', async () => {
    const { container } = render(
      <TextInput
        label='Email address'
        errorMessage='Enter a valid email'
        aria-label='Email address'
        onChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('shows optional label by default for non-required fields', () => {
    const { container } = render(
      <TextInput label='Email address' aria-label='Email address' />,
    )

    expect(container.textContent).toContain('(Optional)')
  })

  it('hides optional label when showOptionalLabel is false', () => {
    const { container } = render(
      <TextInput
        label='Email address'
        aria-label='Email address'
        showOptionalLabel={false}
      />,
    )

    expect(container.textContent).not.toContain('(Optional)')
  })
})
