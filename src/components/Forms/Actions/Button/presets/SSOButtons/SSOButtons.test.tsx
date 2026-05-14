import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { SSOButtons } from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../../testUtils').createChakraMock(),
)

describe('SSOButtons — accessibility', () => {
  it('renders all preset buttons and has no violations', async () => {
    const { container } = render(
      <div>
        <SSOButtons.Google />
        <SSOButtons.Facebook />
        <SSOButtons.X />
        <SSOButtons.Microsoft />
      </div>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
