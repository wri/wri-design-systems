import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ProgressBar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('ProgressBar', () => {
  it('renders a progressbar role with correct aria attributes', () => {
    const { getByRole } = render(<ProgressBar progress={40} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '40')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
  })

  it('clamps progress to 100 when value exceeds 100', () => {
    const { getByRole } = render(<ProgressBar progress={150} />)
    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('clamps progress to 0 when value is negative', () => {
    const { getByRole } = render(<ProgressBar progress={-10} />)
    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('sets an accessible label with the progress percentage', () => {
    const { getByRole } = render(<ProgressBar progress={75} />)
    expect(getByRole('progressbar')).toHaveAttribute(
      'aria-label',
      'Progress: 75%',
    )
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<ProgressBar progress={50} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
