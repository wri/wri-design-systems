import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'

import InputWithUnits from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const units = [
  { label: 'km', value: 'km' },
  { label: 'mi', value: 'mi' },
]

describe('InputWithUnits — accessibility', () => {
  it('renders with unit selector and has no violations', async () => {
    const { container } = render(
      <InputWithUnits label='Distance' caption='Enter a value' units={units} defaultValue='10' />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('InputWithUnits — structure', () => {
  it('renders the value input and unit select with distinct labels', () => {
    const { getAllByLabelText } = render(
      <InputWithUnits label='Distance' units={units} />,
    )

    // The Select mock renders the aria-label on both the wrapper and the
    // trigger, so expect two matches for the unit label.
    expect(getAllByLabelText('Distance value').length).toBeGreaterThan(0)
    expect(getAllByLabelText('Distance unit').length).toBeGreaterThan(0)
  })

  it('places the unit select after the input by default', () => {
    const { getAllByLabelText } = render(
      <InputWithUnits label='Distance' units={units} />,
    )

    const value = getAllByLabelText('Distance value')[0]
    const unit = getAllByLabelText('Distance unit')[0]

    expect(value.compareDocumentPosition(unit) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('places the unit select before the input with unitsPosition="start"', () => {
    const { getAllByLabelText } = render(
      <InputWithUnits label='Distance' units={units} unitsPosition='start' />,
    )

    const value = getAllByLabelText('Distance value')[0]
    const unit = getAllByLabelText('Distance unit')[0]

    expect(unit.compareDocumentPosition(value) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('defaults the unit to the first unit when defaultUnit is omitted', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <InputWithUnits label='Distance' units={units} defaultValue='10' onChange={onChange} />,
    )

    fireEvent.change(getByLabelText('Distance value'), { target: { value: '42' } })

    expect(onChange).toHaveBeenLastCalledWith('42 km')
  })

  it('uses defaultUnit when provided', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <InputWithUnits
        label='Distance'
        units={units}
        defaultValue='10'
        defaultUnit='mi'
        onChange={onChange}
      />,
    )

    fireEvent.change(getByLabelText('Distance value'), { target: { value: '42' } })

    expect(onChange).toHaveBeenLastCalledWith('42 mi')
  })

  it('composes value before unit with unitsPosition="end"', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <InputWithUnits
        label='Distance'
        units={units}
        unitsPosition='end'
        defaultValue='10'
        onChange={onChange}
      />,
    )

    fireEvent.change(getByLabelText('Distance value'), { target: { value: '42' } })

    expect(onChange).toHaveBeenLastCalledWith('42 km')
  })

  it('composes unit before value with unitsPosition="start"', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <InputWithUnits
        label='Distance'
        units={units}
        unitsPosition='start'
        defaultValue='10'
        onChange={onChange}
      />,
    )

    fireEvent.change(getByLabelText('Distance value'), { target: { value: '42' } })

    expect(onChange).toHaveBeenLastCalledWith('km 42')
  })

  it('renders the error message', () => {
    const { getByText } = render(
      <InputWithUnits label='Distance' units={units} errorMessage='Enter a number' />,
    )

    expect(getByText('Enter a number')).toBeInTheDocument()
  })
})
