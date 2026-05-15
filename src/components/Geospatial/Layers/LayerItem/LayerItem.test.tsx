import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LayerItem from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('LayerItem — accessibility', () => {
  it('renders switch variant with no violations', async () => {
    const { container } = render(
      <LayerItem
        name='roads'
        label='Roads'
        caption='Road network'
        variant='switch'
        onChange={() => {}}
        onInfoClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
