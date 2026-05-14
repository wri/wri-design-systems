import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Menu from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

const items = [
  { label: 'Download CSV', value: 'csv', onClick: () => {} },
  { label: 'Download PDF', value: 'pdf', onClick: () => {} },
  { label: 'Print', value: 'print', disabled: true, onClick: () => {} },
]

describe('Menu — accessibility', () => {
  it('renders with a trigger label and items and has no violations', async () => {
    const { container } = render(<Menu label='Export options' items={items} />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with groups and has no violations', async () => {
    const { container } = render(
      <Menu
        label='Actions'
        groups={[
          { title: 'File', items: [{ label: 'Save', value: 'save' }] },
          { title: 'Edit', items: [{ label: 'Copy', value: 'copy' }] },
        ]}
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a custom trigger and has no violations', async () => {
    const { container } = render(
      <Menu
        label='More'
        items={items}
        customTrigger={
          <button type='button' aria-label='Open export menu'>
            Export
          </button>
        }
      />,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
