import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import List from '.'
import { InfoIcon } from '../../icons'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('List — accessibility', () => {
  it('renders data and navigation rows with no violations', async () => {
    const { container } = render(
      <List
        items={[
          {
            id: 'data-1',
            label: 'Status',
            value: 'Active',
            variant: 'data',
            icon: <InfoIcon />,
          },
          {
            id: 'nav-1',
            label: 'Settings',
            caption: 'Configure options',
            variant: 'navigation',
            onItemClick: () => {},
          },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
