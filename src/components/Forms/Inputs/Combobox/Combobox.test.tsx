import { fireEvent, render, screen } from '@testing-library/react'
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
  it('renders selected items as tags when showSelectedItems is true', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems
      />,
    )

    // The label appears once in the dropdown item and once in the tag.
    expect(screen.getAllByText('Colombia').length).toBe(2)
  })

  it('hides tags by default', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
      />,
    )

    // Only the dropdown item renders the label — no tag duplicate.
    expect(screen.getAllByText('Colombia').length).toBe(1)
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
        showSelectedItems
      />,
    )

    expect(screen.getAllByText('Colombia').length).toBe(2)

    rerender(
      <Combobox
        label='Country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        value={['co', 'br']}
        showSelectedItems
      />,
    )

    expect(screen.getAllByText('Brazil').length).toBe(2)
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

  it('calls onChange with the remaining values when a tag is closed (uncontrolled)', () => {
    const handleChange = jest.fn()
    render(
      <Combobox
        label='Country'
        initialItems={[
          { label: 'Colombia', value: 'co' },
          { label: 'Brazil', value: 'br' },
        ]}
        defaultValue={['co', 'br']}
        onChange={handleChange}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    expect(handleChange).toHaveBeenCalledWith(['br'])
  })

  it('calls onChange with [] when the only tag is closed (controlled)', () => {
    const handleChange = jest.fn()
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        value={['co']}
        onChange={handleChange}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    expect(handleChange).toHaveBeenCalledWith([])
  })

  it('removes the tag after closing it (uncontrolled)', () => {
    render(
      <Combobox
        label='Country'
        initialItems={[{ label: 'Colombia', value: 'co' }]}
        defaultValue={['co']}
        showSelectedItems
      />,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Colombia tag close button' }),
    )

    // Only the dropdown item remains.
    expect(screen.getAllByText('Colombia').length).toBe(1)
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
