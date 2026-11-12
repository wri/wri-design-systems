import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Button from '../../Forms/Actions/Button'
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

  it('renders action button and calls handler (deprecated path)', () => {
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

  it('renders small-full-width as compact and full width', () => {
    const { getByRole } = render(
      <InlineMessage
        label='Info message'
        variant='info-white'
        actionLabel='Retry'
        size='small-full-width'
      />,
    )

    expect(getByRole('status')).toHaveStyle({ maxWidth: '100%' })
    expect(getByRole('button', { name: 'Retry' })).toHaveStyle({
      height: '1.75rem',
    })
  })

  it('does not indent the action button when there is no icon', () => {
    const { getByRole } = render(
      <InlineMessage label='Info message' variant='info-grey' icon={null}>
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(getByRole('button', { name: 'Retry' }).parentElement).toHaveStyle({
      marginLeft: '0px',
    })
  })

  it('indents the action button under the label text when there is an icon', () => {
    const { getByRole } = render(
      <InlineMessage label='Info message' variant='info-grey'>
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(getByRole('button', { name: 'Retry' }).parentElement).toHaveStyle({
      marginLeft: '1.5rem',
    })
  })

  it('renders children content', () => {
    const { getByTestId } = render(
      <InlineMessage label='Info' variant='info-white'>
        <span data-testid='custom-content' />
      </InlineMessage>,
    )
    expect(getByTestId('custom-content')).toBeInTheDocument()
  })

  it('renders a Button child and calls its own handler', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <InlineMessage label='Alert' variant='warning'>
        <Button label='Retry' onClick={onClick} />
      </InlineMessage>,
    )
    fireEvent.click(getByText('Retry'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('children take precedence over the deprecated action button', () => {
    const onActionClick = jest.fn()
    const { getByRole, queryByRole } = render(
      <InlineMessage
        label='Alert'
        variant='warning'
        actionLabel='Legacy'
        onActionClick={onActionClick}
      >
        <Button label='Modern' />
      </InlineMessage>,
    )
    expect(getByRole('button', { name: 'Modern' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Legacy' })).not.toBeInTheDocument()
  })

  it('aligns content to the right with isContentRight', () => {
    const { getByRole } = render(
      <InlineMessage label='Info message' variant='info-white' isContentRight>
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(getByRole('status')).toHaveStyle({
      flexDirection: 'row',
      justifyContent: 'space-between',
    })
  })

  it('keeps the deprecated isButtonRight layout', () => {
    const { getByRole } = render(
      <InlineMessage
        label='Info message'
        variant='info-white'
        isButtonRight
        actionLabel='Retry'
      />,
    )
    expect(getByRole('status')).toHaveStyle({
      flexDirection: 'row',
      justifyContent: 'space-between',
    })
  })

  it('defaults to left-aligned content', () => {
    const { getByRole } = render(
      <InlineMessage label='Info message' variant='info-white'>
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(getByRole('status')).toHaveStyle({
      flexDirection: 'column',
      justifyContent: 'flex-start',
    })
  })

  it('prefers isContentRight when both align props are set', () => {
    const { getByRole } = render(
      <InlineMessage
        label='Info message'
        variant='info-white'
        isContentRight
        isButtonRight
      >
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(getByRole('status')).toHaveStyle({
      flexDirection: 'row',
      justifyContent: 'space-between',
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InlineMessage label='All good' variant='success' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with a Button child', async () => {
    const { container } = render(
      <InlineMessage label='All good' variant='success'>
        <Button label='Retry' />
      </InlineMessage>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
