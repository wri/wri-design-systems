import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import TabBar from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('TabBar — accessibility', () => {
  it('renders tabs and has no violations', async () => {
    const { container } = render(
      <TabBar
        tabs={[
          { label: 'Overview', value: 'overview' },
          { label: 'Details', value: 'details' },
          { label: 'Stats', value: 'stats' },
        ]}
        defaultValue='overview'
        onTabClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
