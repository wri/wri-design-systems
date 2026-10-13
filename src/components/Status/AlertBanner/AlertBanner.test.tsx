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

  it('renders inline when requested', () => {
    const { container } = render(
      <AlertBanner title='Inline alert' width='inline' />,
    )
    expect(container.firstChild).toHaveStyle({
      display: 'inline-flex',
      width: 'fit-content',
    })
  })

  it('renders a 4px border radius on the inline variant (Figma)', () => {
    const { container } = render(
      <AlertBanner title='Inline alert' variant='information' width='inline' />,
    )
    expect(container.firstChild).toHaveStyle({
      'border-radius': '0.25rem',
    })
  })

  it('renders a 0 border radius on the full-width variant (Figma)', () => {
    const { container } = render(
      <AlertBanner title='Full width alert' variant='success' />,
    )
    expect(container.firstChild).toHaveStyle({
      'border-radius': '0rem',
    })
  })

  it('renders a full border on the inline variant (DS-329 QA)', () => {
    const { container } = render(
      <AlertBanner title='Inline alert' variant='information' width='inline' />,
    )
    expect(container.firstChild).toHaveStyle({
      border: '0.0625rem solid #CAE6F8',
    })
  })

  it('renders only a bottom border on the full-width variant', () => {
    const { container } = render(
      <AlertBanner title='Full width alert' variant='success' />,
    )
    expect(container.firstChild).toHaveStyle({
      'border-bottom': '0.0625rem solid #C2E5DC',
    })
  })

  it('uses information palette colors for the information variant (DS-329)', () => {
    const { container } = render(
      <AlertBanner title='Info alert' variant='information' />,
    )
    expect(container.firstChild).toHaveStyle({
      'background-color': '#EDF7FD',
      color: '#045992',
    })
  })

  it('centers its content when requested', () => {
    const { container } = render(
      <AlertBanner title='Centered alert' isCentered />,
    )
    expect(container.firstChild).toHaveStyle({
      justifyContent: 'center',
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AlertBanner title='Accessible alert' variant='success' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
