import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Panel from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Panel', () => {
  it('renders header, content and footer sections with no a11y violations', async () => {
    const { container } = render(
      <Panel
        header={<h2>Panel title</h2>}
        content={<div>Panel content</div>}
        footer={<div>Panel footer</div>}
      />,
    )

    expect(screen.getByRole('region')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Panel title' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Panel content')).toBeInTheDocument()
    expect(screen.getByText('Panel footer')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('labels the region through the header wrapper id', () => {
    render(<Panel header={<h2>Overview</h2>} content={<p>Body</p>} />)

    const region = screen.getByRole('region')
    const heading = screen.getByRole('heading', { name: 'Overview' })
    const labelId = region.getAttribute('aria-labelledby')

    expect(labelId).toBeTruthy()
    expect(heading.parentElement?.getAttribute('id')).toBe(labelId)
  })

  it('renders without header label and footer when they are not provided', () => {
    render(<Panel content={<p>Body only</p>} />)

    const region = screen.getByRole('region')

    expect(region.hasAttribute('aria-labelledby')).toBe(false)
    expect(screen.queryByText('Panel footer')).not.toBeInTheDocument()
    expect(screen.getByText('Body only')).toBeInTheDocument()
  })
})
