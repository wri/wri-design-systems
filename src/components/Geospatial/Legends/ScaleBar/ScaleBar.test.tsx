import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import ScaleBar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('ScaleBar', () => {
  it('renders one segment per color with evenly split value labels and no a11y violations', async () => {
    const { container } = render(
      <ScaleBar
        colors={['#e8f5e9', '#66bb6a', '#1b5e20']}
        values={['0', '50', '100']}
        subLabels={['Low', 'Medium', 'High']}
      />,
    )

    const segments = container.querySelectorAll('[data-test]')

    expect(segments).toHaveLength(3)
    expect(segments[0].getAttribute('data-test')).toBe('#e8f5e9-0')
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Low')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('High')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a single gradient bar instead of discrete segments when isGradient is set', () => {
    const { container } = render(
      <ScaleBar
        colors={['#000000', '#888888', '#ffffff']}
        values={['0', '50', '100']}
        isGradient
      />,
    )

    expect(container.querySelectorAll('[data-test]')).toHaveLength(0)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })
})
