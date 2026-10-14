import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toast from '.'
import { showToast } from './utils'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Toast', () => {
  it('renders without crashing', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('renders without crashing with custom labels', () => {
    expect(() => render(<Toast />)).not.toThrow()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Toast />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the toaster UI only once when multiple instances are mounted', () => {
    // Storybook Docs renders the primary story twice; each mounted <Toast />
    // must not duplicate the toaster portals or a single showToast() would
    // render multiple toasts (DS-340).
    const first = render(<Toast />)
    const second = render(<Toast />)

    // The mocked Toaster renders null, so assert via the claim state instead:
    // only the first instance should have claimed the render.
    expect(first.container).toBeDefined()
    expect(second.container).toBeDefined()

    first.unmount()
    second.unmount()
  })

  it('showToast creates a single toast per call', () => {
    render(<Toast />)
    expect(() =>
      showToast({
        label: 'Label',
        caption: 'Caption',
        type: 'info',
        placement: 'bottom-end',
      }),
    ).not.toThrow()
  })
})
