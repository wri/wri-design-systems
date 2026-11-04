import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerGroupContainer from './LayerGroupContainer'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const renderContainer = (
  props: Parameters<typeof LayerGroupContainer>[0] = {},
) =>
  render(
    <LayerGroupContainer {...props}>
      <div>Group A</div>
      <div>Group B</div>
    </LayerGroupContainer>,
  )

describe('LayerGroupContainer — accessibility', () => {
  it('renders an accordion container with no violations', async () => {
    const { container } = renderContainer()

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('LayerGroupContainer — structure', () => {
  it('renders its children inside the accordion root', () => {
    renderContainer()

    expect(screen.getByText('Group A')).toBeInTheDocument()
    expect(screen.getByText('Group B')).toBeInTheDocument()
  })

  it('forwards defaultValue to the accordion root', () => {
    renderContainer({ defaultValue: ['group-a'] })

    const root = screen.getByText('Group A').closest('div')
    expect(root).not.toBeNull()
  })

  it('stretches to the full width of its parent', () => {
    const { container } = renderContainer()
    const wrapper = container.firstElementChild as HTMLElement

    expect(wrapper.style.width).toBe('100%')
  })
})
