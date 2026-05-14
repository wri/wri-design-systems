import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MultiActionButton from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const extraActions = [
  { label: 'Export as PDF', value: 'pdf', onClick: () => {} },
  { label: 'Export as CSV', value: 'csv', onClick: () => {} },
]

describe('MultiActionButton — accessibility', () => {
  it('renders with main label and extra actions and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='primary'
        mainActionLabel='Download'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(
      <MultiActionButton
        variant='secondary'
        mainActionLabel='Export'
        mainActionOnClick={() => {}}
        otherActions={extraActions}
        disabled
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
