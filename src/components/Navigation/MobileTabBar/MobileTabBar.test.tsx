import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import MobileTabBar from '.'
import { PlaceholderIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('MobileTabBar — accessibility', () => {
  it('renders tabs and has no violations', async () => {
    const { container } = render(
      <MobileTabBar
        tabs={[
          { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
          {
            label: 'Two',
            value: 'two',
            icon: <PlaceholderIcon />,
            bagdeCount: 2,
          },
          { label: 'Three', value: 'three', icon: <PlaceholderIcon /> },
        ]}
        defaultValue='one'
        onTabClick={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
