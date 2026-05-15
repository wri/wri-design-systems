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
