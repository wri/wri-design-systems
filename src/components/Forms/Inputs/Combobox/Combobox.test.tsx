import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Combobox from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Combobox — accessibility', () => {
  it('renders with label and caption and has no violations', async () => {
    const { container } = render(
      <Combobox
        label='Country'
        caption='Choose one option'
        placeholder='Select a country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('shows optional label by default for non-required fields', () => {
    const { container } = render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
      />,
    )

    expect(container.textContent).toContain('(Optional)')
  })

  it('hides optional label when showOptionalLabel is false', () => {
    const { container } = render(
      <Combobox
        label='Country'
        showOptionalLabel={false}
        initialItems={[{ label: 'Colombia', value: 'co' }]}
      />,
    )

    expect(container.textContent).not.toContain('(Optional)')
  })
})

describe('Combobox — selection tags', () => {
  it('renders selected items as tags by default', () => {
    const { container } = render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
      />,
    )

    // The label appears once in the dropdown item and once in the tag.
    expect(screen.getAllByText('Colombia').length).toBe(2)
  })

  it('hides tags when showSelectedItems is false', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems={false}
      />,
    )

    // Only the dropdown item renders the label — no tag duplicate.
    expect(screen.getAllByText('Colombia').length).toBe(1)
  })
})

describe('Combobox — controlled API', () => {
  it('renders tags for the controlled value', () => {
    const { rerender } = render(
      <Combobox
        label='Country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        value={['co']}
      />,
    )

    expect(screen.getAllByText('Colombia').length).toBeGreaterThan(1)

    rerender(
      <Combobox
        label='Country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        value={['co', 'br']}
      />,
    )

    expect(screen.getAllByText('Brazil').length).toBeGreaterThan(1)
  })

  it('supports defaultValue for uncontrolled usage', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Clear selection' }),
    ).toBeInTheDocument()
  })
})

describe('Combobox — disabled state', () => {
  it('disables the input', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        disabled
      />,
    )

    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
