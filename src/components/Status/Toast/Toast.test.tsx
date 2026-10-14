import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Toast from '.'
import { showToast } from './utils'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const getToasterCount = () => screen.queryAllByTestId('chakra-toaster').length

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

    // One mounted owner renders the 6 placement toasters; the second
    // instance must not add any more.
    expect(getToasterCount()).toBe(6)

    // When the owner unmounts, the queued instance takes over and the
    // toaster UI keeps rendering.
    first.unmount()
    expect(getToasterCount()).toBe(6)

    second.unmount()
    expect(getToasterCount()).toBe(0)
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
