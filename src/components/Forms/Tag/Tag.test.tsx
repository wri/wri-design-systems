import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Tag from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Tag — accessibility', () => {
  it('renders a closable tag and has no violations', async () => {
    const { container } = render(
      <Tag label='Selected item' variant='info-white' closable />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
