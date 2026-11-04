import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import ExtendableCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ExtendableCard', () => {
  it('renders header, content and footer with no a11y violations', async () => {
    const { container } = render(
      <ExtendableCard
        header={<div>Card header</div>}
        footer={<div>Card footer</div>}
      >
        <div>Card content</div>
      </ExtendableCard>,
    )

    expect(screen.getByText('Card header')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
    expect(screen.getByText('Card footer')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('exposes exactly one toggle trigger carrying the header', () => {
    render(
      <ExtendableCard header={<div>Card header</div>}>
        <div>Card content</div>
      </ExtendableCard>,
    )

    const triggers = screen.getAllByRole('button')

    expect(triggers).toHaveLength(1)
    expect(triggers[0]).toHaveTextContent('Card header')
  })
})
