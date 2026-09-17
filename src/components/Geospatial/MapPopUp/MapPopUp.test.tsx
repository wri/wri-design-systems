import { createRef } from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MapPopUp from '.'

jest.mock('@floating-ui/react', () => {
  const actual = jest.requireActual('@floating-ui/react')
  return {
    ...actual,
    autoUpdate: () => () => {},
  }
})

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('MapPopUp — accessibility', () => {
  it('renders open popup with no violations', async () => {
    const anchorRef = createRef<HTMLButtonElement>()

    const { container } = render(
      <div>
        <button ref={anchorRef} type='button'>
          Anchor
        </button>
        <MapPopUp
          open
          onOpenChange={() => {}}
          anchorRef={anchorRef}
          header={<div>Popup title</div>}
          content={<div>Popup content</div>}
          footer={<button type='button'>Action</button>}
        />
      </div>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('MapPopUp — dark variant', () => {
  const renderPopUp = (variant?: 'default' | 'dark') => {
    const anchorRef = createRef<HTMLButtonElement>()

    return render(
      <div>
        <button ref={anchorRef} type='button'>
          Anchor
        </button>
        <MapPopUp
          open
          onOpenChange={() => {}}
          anchorRef={anchorRef}
          variant={variant}
          header={<div>Popup title</div>}
          content={<div>Popup content</div>}
        />
      </div>,
    )
  }

  it('renders the dark variant with a close button and no a11y violations', async () => {
    const { container } = renderPopUp('dark')

    expect(
      container.querySelector('.ds-map-pop-up-close-button'),
    ).not.toBeNull()
    expect(await axe(container)).toHaveNoViolations()
  })
})
