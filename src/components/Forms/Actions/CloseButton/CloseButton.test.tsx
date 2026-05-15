import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CloseButton from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('CloseButton — accessibility', () => {
  it('renders with default i18n aria-label and has no violations', async () => {
    // CloseButton sources its label from defaultLabels when no props override is given
    const { container } = render(<CloseButton />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with explicit aria-label and has no violations', async () => {
    const { container } = render(
      <CloseButton aria-label='Close notification' />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(
      <CloseButton aria-label='Close dialog' disabled />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
