import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Tooltip from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Tooltip — accessibility', () => {
  it('wraps a button trigger and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Save to your library'>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with pill variant and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Required field' variant='pill'>
        <button type='button' aria-label='More info'>
          ?
        </button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('when disabled, renders children directly and has no violations', async () => {
    const { container } = render(
      <Tooltip content='Save' disabled>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  // Regression tests for button-in-button hydration errors in consumers that
  // wrap a real <IconButton> in a Tooltip (e.g. RTE toolbar controls).
  it('wraps a button trigger in its own span element by default', () => {
    const { container } = render(
      <Tooltip content='Save to your library'>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    const button = container.querySelector('button')

    // Default mode renders a separate wrapper element around the trigger,
    // which means a wrapped <IconButton> would nest a button inside a button.
    expect(button?.closest('span')).not.toBeNull()
  })

  it('renders the child element as its own trigger when preserveFocusOnChild is set', () => {
    const { container } = render(
      <Tooltip content='Save to your library' preserveFocusOnChild>
        <button type='button'>Save</button>
      </Tooltip>,
    )
    const button = container.querySelector('button')

    // Trigger merges onto the child via asChild — no wrapper interactive
    // element, so there can be no nested button-in-button structure.
    expect(container.querySelectorAll('button')).toHaveLength(1)
    expect(button?.closest('span')).toBeNull()
  })
})
