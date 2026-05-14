import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ExtendableCard from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ExtendableCard — accessibility', () => {
  it('renders header, content, and footer with no violations', async () => {
    const { container } = render(
      <ExtendableCard
        header={<div>Card header</div>}
        footer={<div>Card footer</div>}
      >
        <div>Card content</div>
      </ExtendableCard>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
