import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import QualitativeAttribute from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('QualitativeAttribute — accessibility', () => {
  it('renders legend attribute with toggle action and no violations', async () => {
    const { container } = render(
      <QualitativeAttribute
        type='line'
        label='Primary forest'
        caption='Tree cover density'
        color='#006D2C'
        showActionButton
        onActionClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
