import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { MapIcon } from '../../icons'
import Blockquote from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Blockquote', () => {
  it('renders the quote inside a semantic blockquote element with no a11y violations', async () => {
    const { container } = render(<Blockquote>Quoted content</Blockquote>)

    expect(container.querySelector('figure > blockquote')).toBeInTheDocument()
    expect(screen.getByText('Quoted content')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an optional citation', () => {
    const { container } = render(
      <Blockquote cite='Author Name'>Quoted content</Blockquote>,
    )

    expect(screen.getByText('Author Name')).toBeInTheDocument()
    expect(container.querySelector('figcaption > cite')).toBeInTheDocument()
  })

  it('does not render a citation when none is provided', () => {
    const { container } = render(<Blockquote>Quoted content</Blockquote>)

    expect(container.querySelector('figcaption')).not.toBeInTheDocument()
  })

  it('renders the provided icon instead of the quote bar', () => {
    const { container } = render(
      <Blockquote icon={<MapIcon />}>Quoted content</Blockquote>,
    )

    expect(container.querySelector('figure svg')).toBeInTheDocument()
  })

  it('does not render an icon when none is provided', () => {
    const { container } = render(<Blockquote>Quoted content</Blockquote>)

    expect(container.querySelector('figure svg')).not.toBeInTheDocument()
  })
})
