import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Select from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const items = [
  { label: 'Colombia', value: 'co' },
  { label: 'Brazil', value: 'br' },
]

describe('Select — accessibility', () => {
  it('renders a single-select with label and no violations', async () => {
    const { container } = render(
      <Select
        label='Country'
        caption='Choose your country'
        placeholder='Select one'
        aria-label='Country'
        items={items}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a multi-select with no violations', async () => {
    const { container } = render(
      <Select
        label='Countries'
        aria-label='Countries'
        items={items}
        multiple
        value={['co']}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an error state with no violations', async () => {
    const { container } = render(
      <Select
        label='Country'
        aria-label='Country'
        items={items}
        errorMessage='Pick a country'
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('Select — trigger and value', () => {
  it('renders the placeholder when nothing is selected', () => {
    const { getByText } = render(
      <Select label='Country' placeholder='Select one' items={items} />,
    )

    expect(getByText('Select one')).toBeInTheDocument()
  })

  it('renders the selected item label', () => {
    const { getByText } = render(
      <Select label='Country' items={items} value={['co']} />,
    )

    expect(getByText('Colombia')).toBeInTheDocument()
  })

  it('renders the selected item caption', () => {
    const { getByText } = render(
      <Select
        label='Country'
        items={[{ label: 'Colombia', value: 'co', caption: 'South America' }]}
        value={['co']}
      />,
    )

    expect(getByText('South America')).toBeInTheDocument()
  })

  it('renders all items in the dropdown content', () => {
    const { getByText } = render(
      <Select label='Country' items={items} value={['co']} />,
    )

    expect(getByText('Brazil')).toBeInTheDocument()
  })

  it('renders selected items as tags in multiple mode', () => {
    const { getByText } = render(
      <Select label='Countries' items={items} multiple value={['co', 'br']} />,
    )

    expect(getByText('Colombia')).toBeInTheDocument()
    expect(getByText('Brazil')).toBeInTheDocument()
  })
})

describe('Select — states', () => {
  it('marks the wrapper as disabled and applies the disabled suffix', () => {
    const { getByLabelText } = render(
      <Select label='Country' items={items} disabled />,
    )

    expect(getByLabelText(/Country Disabled\./)).toBeInTheDocument()
  })

  it('applies the required suffix to the composed aria-label when disabled', () => {
    const { getByLabelText } = render(
      <Select label='Country' items={items} required disabled />,
    )

    // The composed label (label + required + disabled suffixes) is only
    // applied to the wrapper when the select is disabled.
    expect(getByLabelText(/Country required\. Disabled\./)).toBeInTheDocument()
  })

  it('renders the error message', () => {
    const { getByText } = render(
      <Select label='Country' items={items} errorMessage='Pick a country' />,
    )

    expect(getByText('Pick a country')).toBeInTheDocument()
  })

  it('renders the small size without errors', () => {
    const { getByText } = render(
      <Select label='Country' items={items} size='small' value={['co']} />,
    )

    expect(getByText('Colombia')).toBeInTheDocument()
  })
})

describe('Select — optional label', () => {
  it('hides the optional suffix by default', () => {
    const { container } = render(<Select label='Country' items={items} />)

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix when showOptionalLabel is true', () => {
    const { container } = render(
      <Select label='Country' items={items} showOptionalLabel />,
    )

    expect(container.textContent).toContain('(optional)')
  })

  it('never shows the optional suffix for required fields', () => {
    const { container } = render(
      <Select label='Country' items={items} required showOptionalLabel />,
    )

    expect(container.textContent).not.toContain('(optional)')
  })
})
