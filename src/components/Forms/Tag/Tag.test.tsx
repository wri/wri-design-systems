import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import Tag from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Tag — accessibility', () => {
  it('renders a closable tag and has no violations', async () => {
    const { container } = render(
      <Tag label='Selected item' variant='info-white' closable />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled tag with no violations', async () => {
    const { container } = render(
      <Tag label='Locked' variant='error' disabled closable />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a node-label tag with ariaLabel, custom colors and close button with no violations', async () => {
    const { container } = render(
      <Tag
        ariaLabel='Status: active'
        label={<strong>Status</strong>}
        variant='info-grey'
        backgroundColor='#7B61FF'
        borderColor='#FF5C00'
        closeIconColor='#FF5C00'
        icon={<InfoIcon />}
        iconPosition='end'
        closable
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Tag — variants', () => {
  const variants = [
    'info-white',
    'info-grey',
    'success',
    'warning',
    'error',
  ] as const

  it.each(variants)('renders the %s variant', (variant) => {
    const { getByText } = render(<Tag label='Status' variant={variant} />)

    expect(getByText('Status')).toBeInTheDocument()
  })

  it('renders an icon in the start element', () => {
    const { container } = render(
      <Tag
        label='With icon'
        variant='info-grey'
        icon={<span data-testid='tag-icon' />}
      />,
    )

    expect(container.querySelector('[data-testid="tag-icon"]')).not.toBeNull()
  })
})

describe('Tag — sizes', () => {
  it('renders the default size', () => {
    const { getByText } = render(
      <Tag label='Default size' variant='info-grey' />,
    )

    expect(getByText('Default size')).toBeInTheDocument()
  })

  it('renders the small size', () => {
    const { getByText } = render(
      <Tag label='Small size' variant='info-grey' size='small' />,
    )

    expect(getByText('Small size')).toBeInTheDocument()
  })

  it('renders the large size', () => {
    const { getByText } = render(
      <Tag label='Large size' variant='info-grey' size='large' />,
    )

    expect(getByText('Large size')).toBeInTheDocument()
  })
})

describe('Tag — icon position', () => {
  it('renders the icon in the end element when iconPosition is end', () => {
    const { container } = render(
      <Tag
        label='Icon end'
        variant='info-grey'
        icon={<span data-testid='tag-icon-end' />}
        iconPosition='end'
      />,
    )

    expect(
      container.querySelector('[data-testid="tag-icon-end"]'),
    ).not.toBeNull()
  })

  it('keeps the icon in the start element by default', () => {
    const { container } = render(
      <Tag
        label='Icon start'
        variant='info-grey'
        icon={<span data-testid='tag-icon-start' />}
      />,
    )

    expect(
      container.querySelector('[data-testid="tag-icon-start"]'),
    ).not.toBeNull()
  })
})

describe('Tag — label types', () => {
  it('renders a ReactNode label', () => {
    const { getByText } = render(
      <Tag
        ariaLabel='Status: active'
        label={<strong>Status</strong>}
        variant='success'
      />,
    )

    expect(getByText('Status')).toBeInTheDocument()
  })

  it('exposes the ariaLabel as visually hidden text for a node label', () => {
    const { getByText } = render(
      <Tag
        ariaLabel='Status: active'
        label={<strong>Status</strong>}
        variant='success'
      />,
    )

    expect(getByText('Status: active')).toBeInTheDocument()
  })

  it('hides the visible label from assistive tech when ariaLabel is provided', () => {
    const { getByText, container } = render(
      <Tag
        ariaLabel='Status: active'
        label={<strong>Status</strong>}
        variant='success'
      />,
    )

    expect(getByText('Status')).toBeInTheDocument()
    expect(container.querySelector('span[aria-hidden="true"]')).not.toBeNull()
  })

  it('renders a string label as its own accessible text', () => {
    const { getByText } = render(
      <Tag label='Plain label' variant='info-grey' />,
    )

    expect(getByText('Plain label')).toBeInTheDocument()
  })
})

describe('Tag — custom colors', () => {
  it('renders with a custom close icon color', () => {
    const { getByText } = render(
      <Tag label='Custom' variant='info-grey' closeIconColor='#FF0000' />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('renders with a custom backgroundColor', () => {
    const { getByText } = render(
      <Tag label='Custom' variant='info-grey' backgroundColor='#7B61FF' />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('renders with a custom border color', () => {
    const { getByText } = render(
      <Tag label='Custom' variant='info-grey' borderColor='#FF0000' />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('renders the custom border on a small tag', () => {
    const { getByText } = render(
      <Tag
        label='Custom'
        variant='info-grey'
        size='small'
        borderColor='#FF0000'
      />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('accepts css color function values', () => {
    const { getByText } = render(
      <Tag
        label='Custom'
        variant='info-grey'
        backgroundColor='rgb(255, 0, 0)'
        borderColor='rgba(0, 0, 0, 0.5)'
      />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('accepts named color values', () => {
    const { getByText } = render(
      <Tag
        label='Custom'
        variant='info-grey'
        backgroundColor='rebeccapurple'
        borderColor='black'
      />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })

  it('ignores malicious css injection attempts in color props', () => {
    const { getByText } = render(
      <Tag
        label='Custom'
        variant='info-grey'
        backgroundColor="red; } .evil { background: url('http://evil.com')"
        borderColor='expression(alert(1))'
        closeIconColor='url(javascript:alert(1))'
      />,
    )

    expect(getByText('Custom')).toBeInTheDocument()
  })
})

describe('Tag — close button', () => {
  it('renders a close trigger when closable', () => {
    const { getByRole } = render(
      <Tag label='Removable' variant='info-grey' closable />,
    )

    expect(
      getByRole('button', { name: 'Removable tag close button' }),
    ).toBeInTheDocument()
  })

  it('renders the close trigger when closeIconColor is set', () => {
    const { getByRole } = render(
      <Tag
        label='Removable'
        variant='info-grey'
        closable
        closeIconColor='#FF0000'
      />,
    )

    expect(
      getByRole('button', { name: 'Removable tag close button' }),
    ).toBeInTheDocument()
  })

  it('renders an end icon together with the close trigger', () => {
    const { getByRole, container } = render(
      <Tag
        label='Icon end'
        variant='info-grey'
        icon={<span data-testid='tag-icon-end' />}
        iconPosition='end'
        closable
      />,
    )

    expect(
      container.querySelector('[data-testid="tag-icon-end"]'),
    ).not.toBeNull()
    expect(
      getByRole('button', { name: 'Icon end tag close button' }),
    ).toBeInTheDocument()
  })

  it('calls onClose when the close trigger is clicked', () => {
    const onClose = jest.fn()
    const { getByRole } = render(
      <Tag label='Removable' variant='info-grey' closable onClose={onClose} />,
    )

    fireEvent.click(getByRole('button', { name: 'Removable tag close button' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Enter and Space keydown', () => {
    const onClose = jest.fn()
    const { getByRole } = render(
      <Tag label='Removable' variant='info-grey' closable onClose={onClose} />,
    )
    const trigger = getByRole('button', { name: 'Removable tag close button' })

    fireEvent.keyDown(trigger, { key: 'Enter' })
    fireEvent.keyDown(trigger, { key: ' ' })

    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('ignores other keys', () => {
    const onClose = jest.fn()
    const { getByRole } = render(
      <Tag label='Removable' variant='info-grey' closable onClose={onClose} />,
    )
    const trigger = getByRole('button', { name: 'Removable tag close button' })

    fireEvent.keyDown(trigger, { key: 'Escape' })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not render the close trigger when not closable', () => {
    const { queryByRole } = render(<Tag label='Static' variant='info-grey' />)

    expect(
      queryByRole('button', { name: 'Static tag close button' }),
    ).toBeNull()
  })

  it('does not render the close trigger when disabled', () => {
    const { queryByRole } = render(
      <Tag label='Locked' variant='info-grey' closable disabled />,
    )

    expect(
      queryByRole('button', { name: 'Locked tag close button' }),
    ).toBeNull()
  })

  it('does not render the close trigger at small size', () => {
    const { queryByRole } = render(
      <Tag label='Compact' variant='info-grey' closable size='small' />,
    )

    expect(
      queryByRole('button', { name: 'Compact tag close button' }),
    ).toBeNull()
  })

  it('supports a custom close aria-label via labels', () => {
    const { getByRole } = render(
      <Tag
        label='Filtro'
        variant='info-grey'
        closable
        labels={{ closeButtonAriaLabel: (label) => `Quitar ${label}` }}
      />,
    )

    expect(getByRole('button', { name: 'Quitar Filtro' })).toBeInTheDocument()
  })
})
