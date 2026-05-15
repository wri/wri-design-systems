import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import CheckboxList from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('CheckboxList — accessibility', () => {
  it('renders a checkbox group and has no violations', async () => {
    const { container } = render(
      <CheckboxList
        label='Interests'
        caption='Select all that apply'
        required
        checkboxes={[
          { name: 'news', value: 'news', checked: true, children: 'News' },
          { name: 'events', value: 'events', children: 'Events' },
          {
            name: 'alerts',
            value: 'alerts',
            disabled: true,
            children: 'Alerts',
          },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
