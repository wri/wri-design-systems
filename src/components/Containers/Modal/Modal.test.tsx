import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { getThemedSpacing } from '../../../lib/theme'
import Modal from '.'

jest.mock('react-draggable', () => ({
  __esModule: true,
  default: ({ children }: any) => children,
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Modal — accessibility', () => {
  it('renders an open modal with no violations', async () => {
    const { container } = render(
      <Modal
        open
        onClose={() => {}}
        header={<p>Modal title</p>}
        content={
          <div style={{ padding: getThemedSpacing(300) }}>
            <p>Modal content</p>
          </div>
        }
        footer={<button type='button'>Save</button>}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
