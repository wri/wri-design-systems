import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import InlineMessage from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('InlineMessage', () => {
  it('renders the label', () => {
    const { getByText } = render(
      <InlineMessage label='Something went wrong' variant='error' />,
    )
    expect(getByText('Something went wrong')).toBeInTheDocument()
  })

  it('renders a string caption', () => {
    const { getByText } = render(
      <InlineMessage
        label='Info'
        caption='Please check your input'
        variant='info-white'
      />,
    )
    expect(getByText('Please check your input')).toBeInTheDocument()
  })

  it('renders a node caption', () => {
    const { getByTestId } = render(
      <InlineMessage
        label='Info'
        caption={<span data-testid='rich-caption' />}
        variant='info-grey'
      />,
    )
    expect(getByTestId('rich-caption')).toBeInTheDocument()
  })

  it('uses role="alert" for error variant', () => {
    const { getByRole } = render(
      <InlineMessage label='Error occurred' variant='error' />,
    )
    expect(getByRole('alert')).toBeInTheDocument()
  })

  it('uses role="status" for info-white variant', () => {
    const { getByRole } = render(
      <InlineMessage label='Info message' variant='info-white' />,
    )
    expect(getByRole('status')).toBeInTheDocument()
  })

  it('renders action button and calls handler', () => {
    const onActionClick = jest.fn()
    const { getByText } = render(
      <InlineMessage
        label='Alert'
        variant='warning'
        actionLabel='Retry'
        onActionClick={onActionClick}
      />,
    )
    fireEvent.click(getByText('Retry'))
    expect(onActionClick).toHaveBeenCalledTimes(1)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InlineMessage label='All good' variant='success' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
