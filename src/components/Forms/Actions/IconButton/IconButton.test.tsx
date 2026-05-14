import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import IconButton from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const MockIcon = () => (
  <svg aria-hidden='true' viewBox='0 0 24 24' focusable='false'>
    <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z' />
  </svg>
)

describe('IconButton — accessibility', () => {
  it('renders with aria-label and has no violations', async () => {
    const { container } = render(
      <IconButton aria-label='Search' icon={<MockIcon />} />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled with aria-label and has no violations', async () => {
    const { container } = render(
      <IconButton aria-label='Add item' icon={<MockIcon />} disabled />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('reports a violation when aria-label is missing (icon-only button has no accessible name)', async () => {
    const { container } = render(<IconButton icon={<MockIcon />} />)
    const results = await axe(container)
    expect(results.violations.length).toBeGreaterThan(0)
  })
})
