import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ToastDemo from './ToastDemo'

const mockShowToast = jest.fn()

jest.mock('../..', () => ({
  Button: jest.requireActual('../../Forms/Actions/Button').default,
  showToast: (...args: any[]) => mockShowToast(...args),
}))

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ToastDemo — accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<ToastDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
