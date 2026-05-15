import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Avatar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Avatar', () => {
  it('renders with aria-label from name', () => {
    const { getByRole } = render(<Avatar name='John Doe' />)
    expect(getByRole('img', { name: 'John Doe' })).toBeInTheDocument()
  })

  it('renders with a custom ariaLabel', () => {
    const { getByRole } = render(
      <Avatar name='John Doe' ariaLabel='User avatar' />,
    )
    expect(getByRole('img', { name: 'User avatar' })).toBeInTheDocument()
  })

  it('renders as a button role when onClick is provided and not disabled', () => {
    const { getByRole } = render(
      <Avatar name='Jane' onClick={jest.fn()} disabled={false} />,
    )
    expect(getByRole('button', { name: 'Jane' })).toBeInTheDocument()
  })

  it('calls onClick when clicked and not disabled', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <Avatar name='Jane' onClick={onClick} disabled={false} />,
    )
    fireEvent.click(getByRole('button', { name: 'Jane' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <Avatar name='Jane' onClick={onClick} disabled />,
    )
    fireEvent.click(getByRole('img', { name: 'Jane' }))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Avatar name='Test User' />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
