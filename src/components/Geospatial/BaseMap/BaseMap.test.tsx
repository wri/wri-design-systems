import { render, screen, act, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import BaseMap from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

/**
 * Minimal IntersectionObserver stub so tests can drive the visibility
 * callbacks the component uses to move focus to its heading.
 */
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(private callback: IntersectionObserverCallback) {}

  observe(target: Element): void {
    ;(target as any).__triggerIntersection = (isIntersecting: boolean) =>
      this.callback(
        [{ isIntersecting } as unknown as IntersectionObserverEntry],
        this,
      )
  }

  unobserve(): void {}

  disconnect(): void {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

describe('BaseMap', () => {
  beforeEach(() => {
    ;(globalThis as any).IntersectionObserver = MockIntersectionObserver
  })

  const onOptionSelected = jest.fn()
  const onCheckedChange = jest.fn()

  const renderBaseMap = () =>
    render(
      <BaseMap
        title='Base maps'
        caption='Choose one option'
        additionalSettings={[
          {
            label: 'Show labels',
            checked: true,
            onCheckedChange,
            children: <div>Labels sub-settings</div>,
          },
          {
            label: 'Show legend',
            checked: false,
            onCheckedChange,
            children: <div>Legend sub-settings</div>,
          },
        ]}
        options={[
          {
            id: 'satellite',
            label: 'Satellite',
            caption: 'High resolution',
            imageUrl: 'https://example.com/satellite.jpg',
            active: true,
          },
          {
            id: 'terrain',
            label: 'Terrain',
            caption: 'Topographic',
            imageUrl: 'https://example.com/terrain.jpg',
          },
        ]}
        onOptionSelected={onOptionSelected}
      />,
    )

  it('renders title, caption and selectable map options with no a11y violations', async () => {
    const { container } = renderBaseMap()

    expect(
      screen.getByRole('heading', { name: 'Base maps' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Choose one option')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Satellite, High resolution' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Terrain, Topographic' }),
    ).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('marks only the active option with an Active tag', () => {
    renderBaseMap()

    const satellite = screen.getByRole('button', {
      name: 'Satellite, High resolution',
    })
    const terrain = screen.getByRole('button', {
      name: 'Terrain, Topographic',
    })

    expect(satellite).toHaveTextContent('Active')
    expect(terrain).not.toHaveTextContent('Active')
  })

  it('selects options on click and keyboard activation', () => {
    renderBaseMap()

    const terrain = screen.getByRole('button', {
      name: 'Terrain, Topographic',
    })

    fireEvent.click(terrain)
    expect(onOptionSelected).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'terrain' }),
    )

    fireEvent.keyDown(terrain, { key: 'Enter' })
    expect(onOptionSelected).toHaveBeenCalledTimes(2)

    fireEvent.keyDown(terrain, { key: ' ' })
    expect(onOptionSelected).toHaveBeenCalledTimes(3)
  })

  it('renders additional settings children only for checked entries', () => {
    renderBaseMap()

    expect(screen.getByText('Show labels')).toBeInTheDocument()
    expect(screen.getByText('Labels sub-settings')).toBeInTheDocument()
    expect(screen.getByText('Show legend')).toBeInTheDocument()
    expect(screen.queryByText('Legend sub-settings')).not.toBeInTheDocument()
  })

  it('moves focus to the heading when the map scrolls into view', () => {
    const { container } = renderBaseMap()

    const heading = screen.getByRole('heading', { name: 'Base maps' })
    const root = container.firstElementChild as HTMLElement

    act(() => {
      ;(root as any).__triggerIntersection(true)
    })

    expect(heading).toHaveFocus()
  })
})
