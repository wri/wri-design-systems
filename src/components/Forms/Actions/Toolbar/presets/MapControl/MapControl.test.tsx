/* eslint-disable class-methods-use-this */

import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapControlsToolbar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../../testUtils').createChakraMock(),
)

global.ResizeObserver = class ResizeObserver
  implements globalThis.ResizeObserver
{
  observe(_target: Element, _options?: ResizeObserverOptions): void {}

  unobserve(_target: Element): void {}

  disconnect(): void {}
}

describe('MapControlsToolbar — accessibility', () => {
  it('renders map controls and has no violations', async () => {
    const { container } = render(<MapControlsToolbar />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
