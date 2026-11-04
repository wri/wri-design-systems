import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import * as icons from './index'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../testUtils').createChakraMock(),
)

// Every icon except NumberIcon is a plain SVG wrapper; NumberIcon renders a
// value badge instead and is covered separately below.
const svgIconNames = Object.keys(icons).filter(
  (name) => name.endsWith('Icon') && name !== 'NumberIcon',
)

describe('icons', () => {
  it('renders every exported SVG icon without crashing', () => {
    const { container } = render(
      <div>
        {svgIconNames.map((name) => {
          const Icon = icons[name as keyof typeof icons] as any

          return (
            <div key={name} data-testid={name}>
              <Icon size='16px' />
            </div>
          )
        })}
      </div>,
    )

    for (const name of svgIconNames) {
      expect(
        container.querySelector(`[data-testid="${name}"] svg`),
      ).not.toBeNull()
    }
  })

  it('renders the numeric badge icon with its value', () => {
    render(<icons.NumberIcon value='3' />)

    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders the full icon set with no a11y violations', async () => {
    const { container } = render(
      <div>
        {svgIconNames.map((name) => {
          const Icon = icons[name as keyof typeof icons] as any

          return (
            <div key={name} data-testid={name}>
              <Icon size='16px' />
            </div>
          )
        })}
        <icons.NumberIcon value='1' />
      </div>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
