import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import ToolbarButton from './ToolbarButton'
import { PlusIcon } from '../../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('ToolbarButton', () => {
  it('renders an accessible button with its label when expanded, with no a11y violations', async () => {
    const { container } = render(
      <ToolbarButton
        ariaLabel='Zoom in'
        label='Zoom in'
        icon={<PlusIcon />}
        isExpanded
        onClick={() => {}}
      />,
    )

    const button = screen.getByRole('button', { name: 'Zoom in' })

    expect(button).toBeInTheDocument()
    expect(button.querySelector('.toolbar-item-label-text')).toHaveTextContent(
      'Zoom in',
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('hides the visible label from assistive tech when collapsed', () => {
    render(<ToolbarButton ariaLabel='Zoom in' label='Zoom in' isExpanded={false} />)

    const label = document.querySelector(
      '.toolbar-item-label',
    ) as HTMLElement

    expect(label).toHaveAttribute('aria-hidden', 'true')
  })

  it('exposes the active state through aria-pressed', () => {
    const { rerender } = render(
      <ToolbarButton ariaLabel='Bold' isExpanded active />,
    )

    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    rerender(<ToolbarButton ariaLabel='Bold' isExpanded />)

    expect(
      screen.getByRole('button', { name: 'Bold' }),
    ).not.toHaveAttribute('aria-pressed')
  })

  it('fires the click handler on activation', () => {
    const onClick = jest.fn()
    render(<ToolbarButton ariaLabel='Zoom in' isExpanded onClick={onClick} />)

    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a disabled button that swallows clicks', () => {
    const onClick = jest.fn()
    render(
      <ToolbarButton ariaLabel='Zoom in' isExpanded disabled onClick={onClick} />,
    )

    const button = screen.getByRole('button', { name: 'Zoom in' })

    expect(button).toBeDisabled()

    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
