import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import AlertBanner from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('AlertBanner', () => {
  it('renders its children content', () => {
    const { getByText } = render(<AlertBanner>Test alert</AlertBanner>)
    expect(getByText('Test alert')).toBeInTheDocument()
  })

  it('hides when close button is clicked', () => {
    const { getByLabelText, queryByText } = render(
      <AlertBanner>Closable alert</AlertBanner>,
    )
    fireEvent.click(getByLabelText('Close alert'))
    expect(queryByText('Closable alert')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn()
    const { getByLabelText } = render(
      <AlertBanner onClose={onClose}>Alert</AlertBanner>,
    )
    fireEvent.click(getByLabelText('Close alert'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders a custom icon', () => {
    const { getByTestId } = render(
      <AlertBanner icon={<span data-testid='custom-icon' />}>
        Alert
      </AlertBanner>,
    )
    expect(getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('renders inline when requested', () => {
    const { container } = render(
      <AlertBanner width='inline'>Inline alert</AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      display: 'inline-flex',
      width: 'fit-content',
    })
  })

  it('renders a 4px border radius on the inline variant (Figma)', () => {
    const { container } = render(
      <AlertBanner variant='information' width='inline'>
        Inline alert
      </AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      'border-radius': '0.25rem',
    })
  })

  it('renders a 0 border radius on the full-width variant (Figma)', () => {
    const { container } = render(
      <AlertBanner variant='success'>Full width alert</AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      'border-radius': '0rem',
    })
  })

  it('renders a full border on the inline variant (DS-329 QA)', () => {
    const { container } = render(
      <AlertBanner variant='information' width='inline'>
        Inline alert
      </AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      border: '0.0625rem solid #CAE6F8',
    })
  })

  it('renders only a bottom border on the full-width variant', () => {
    const { container } = render(
      <AlertBanner variant='success'>Full width alert</AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      'border-bottom': '0.0625rem solid #C2E5DC',
    })
  })

  it('uses information palette colors for the information variant (DS-329)', () => {
    const { container } = render(
      <AlertBanner variant='information'>Info alert</AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      'background-color': '#EDF7FD',
      color: '#045992',
    })
  })

  it('centers its content when requested', () => {
    const { container } = render(
      <AlertBanner isCentered>Centered alert</AlertBanner>,
    )
    expect(container.firstChild).toHaveStyle({
      justifyContent: 'center',
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AlertBanner variant='success'>Accessible alert</AlertBanner>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
