import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Sheet from '.'

jest.mock('react-spring-bottom-sheet', () => ({
  BottomSheet: ({ header, footer, children }: any) => (
    <div role='dialog' aria-modal='true' aria-label='Bottom sheet'>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  ),
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Sheet — accessibility', () => {
  it('renders open sheet with no violations', async () => {
    const { container } = render(
      <Sheet
        open
        onClose={() => {}}
        header={<p>Sheet title</p>}
        content={<p>Sheet content</p>}
        footer={<p>Sheet footer</p>}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
