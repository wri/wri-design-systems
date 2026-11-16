import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Popover from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Popover — accessibility', () => {
  it('renders with a trigger and content and has no violations', async () => {
    const { container } = render(
      <Popover content='Popover content'>
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with form content and has no violations', async () => {
    const { container } = render(
      <Popover
        content={
          <div>
            <input aria-label='URL' placeholder='http://example.org' />
            <button type='button'>Apply</button>
          </div>
        }
      >
        <button type='button' aria-label='Edit link details' />
      </Popover>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders without the arrow and has no violations', async () => {
    const { container } = render(
      <Popover content='Popover content' hideArrow>
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders when disabled and has no violations', async () => {
    const { container } = render(
      <Popover content='Popover content' disabled>
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Popover — rendering', () => {
  it('renders the trigger element as its own trigger', () => {
    const { container } = render(
      <Popover content='Popover content'>
        <button type='button'>Open popover</button>
      </Popover>,
    )

    const button = screen.getByRole('button', { name: 'Open popover' })

    // Trigger merges onto the child via asChild — no wrapper interactive
    // element, so there can be no nested button-in-button structure.
    expect(container.querySelectorAll('button')).toHaveLength(1)
    expect(button.closest('span')).toBeNull()
  })

  it('renders string content', () => {
    render(
      <Popover content='Popover content'>
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('renders custom ReactNode content', () => {
    render(
      <Popover
        content={
          <div>
            <input aria-label='URL' />
            <button type='button'>Apply</button>
          </div>
        }
      >
        <button type='button'>Open popover</button>
      </Popover>,
    )

    expect(screen.getByLabelText('URL')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument()
  })
})
