import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Menu from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
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

describe('Menu — link items', () => {
  it('renders an anchor with the correct href for a linked item', () => {
    render(
      <Menu
        label='Links'
        items={[
          {
            label: 'Open docs',
            value: 'docs',
            link: 'https://example.com/docs',
          },
        ]}
      />,
    )
    const anchor = screen.getByRole('link', { name: /open docs/i })
    expect(anchor).toHaveAttribute('href', 'https://example.com/docs')
  })

  it('marks a disabled linked item as aria-disabled and keeps the href', () => {
    render(
      <Menu
        label='Links'
        items={[
          {
            label: 'Disabled link',
            value: 'disabled',
            link: 'https://example.com',
            disabled: true,
          },
        ]}
      />,
    )
    const anchor = screen.getByRole('link', { name: /disabled link/i })
    expect(anchor).toHaveAttribute('href', 'https://example.com')
    expect(anchor).toHaveAttribute('aria-disabled', 'true')
  })
})
