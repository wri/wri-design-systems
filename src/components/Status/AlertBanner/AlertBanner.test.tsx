import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import AlertBanner from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('AlertBanner', () => {
  it('renders the title', () => {
    const { getByText } = render(<AlertBanner title='Test alert' />)
    expect(getByText('Test alert')).toBeInTheDocument()
  })

  it('renders children description', () => {
    const { getByText } = render(
      <AlertBanner title='Title'>Details here</AlertBanner>,
    )
    expect(getByText('Details here')).toBeInTheDocument()
  })

  it('hides when close button is clicked', () => {
    const { getByLabelText, queryByText } = render(
      <AlertBanner title='Closable alert' />,
    )
    fireEvent.click(getByLabelText('Close alert'))
    expect(queryByText('Closable alert')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn()
    const { getByLabelText } = render(
      <AlertBanner title='Alert' onClose={onClose} />,
    )
    fireEvent.click(getByLabelText('Close alert'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders a custom icon', () => {
    const { getByTestId } = render(
      <AlertBanner title='Alert' icon={<span data-testid='custom-icon' />} />,
    )
    expect(getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AlertBanner title='Accessible alert' variant='success' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
