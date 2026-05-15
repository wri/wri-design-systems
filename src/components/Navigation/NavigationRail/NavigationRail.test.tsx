import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import NavigationRail from '.'
import { CheckIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('NavigationRail — accessibility', () => {
  it('renders tabs and panel content with no violations', async () => {
    const { container } = render(
      <NavigationRail
        tabs={[
          { label: 'Layers', value: 'layers', icon: <CheckIcon /> },
          { label: 'Legend', value: 'legend', icon: <CheckIcon /> },
        ]}
        defaultValue='layers'
        onTabClick={() => {}}
      >
        <div>Sidebar content</div>
      </NavigationRail>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
