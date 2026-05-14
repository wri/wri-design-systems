import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Tooltip from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
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
})
