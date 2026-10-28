/* eslint-disable class-methods-use-this */
import { serialize, deserialize } from 'v8'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Combobox from '.'
import { ComboboxProps } from './types'

const items = [
  { label: 'Colombia', value: 'co' },
  { label: 'Brazil', value: 'br' },
]

const view = (props: Partial<ComboboxProps>) => (
  <ChakraProvider value={defaultSystem}>
    <Combobox label='Country' items={items} {...props} />
  </ChakraProvider>
)
const renderCombobox = (props: Partial<ComboboxProps> = {}) =>
  render(view(props))

// Ark schedules focus and highlighting in animation frames. Flush those inside
// act so each interaction finishes before the next one starts.
const interact = async (action: () => void) => {
  act(action)
  await act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 50)
    })
  })
}
const open = async () => {
  await interact(() =>
    fireEvent.click(screen.getByRole('button', { name: 'Toggle options' })),
  )
  await waitFor(() =>
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-expanded',
      'true',
    ),
  )
}
const select = async (name: string) => {
  await open()
  await interact(() => fireEvent.click(screen.getByRole('option', { name })))
}
const type = async (value: string) => {
  await interact(() => screen.getByRole('combobox').focus())
  await interact(() =>
    fireEvent.change(screen.getByRole('combobox'), { target: { value } }),
  )
}

const originalResizeObserver = window.ResizeObserver
const originalClone = global.structuredClone
const originalScroll = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollIntoView',
)
beforeAll(() => {
  // JSDOM lacks these browser APIs; use Node's clone implementation for recipes.
  global.structuredClone = (value) => deserialize(serialize(value))
  window.ResizeObserver = class {
    observe() {}

    unobserve() {}

    disconnect() {}
  }
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
    configurable: true,
    value: jest.fn(),
  })
})
afterAll(() => {
  window.ResizeObserver = originalResizeObserver
  global.structuredClone = originalClone
  if (originalScroll) {
    Object.defineProperty(
      HTMLElement.prototype,
      'scrollIntoView',
      originalScroll,
    )
  } else {
    delete (HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView
  }
})

it('selects an option and replaces the previous single selection', async () => {
  const onChange = jest.fn()
  renderCombobox({ onChange, showSelectedItems: true })
  await select('Colombia')
  expect(onChange).toHaveBeenLastCalledWith(['co'])
  expect(
    screen.getByRole('button', { name: 'Colombia tag close button' }),
  ).toBeInTheDocument()
  await select('Brazil')
  expect(onChange).toHaveBeenLastCalledWith(['br'])
  expect(
    screen.queryByRole('button', { name: 'Colombia tag close button' }),
  ).not.toBeInTheDocument()
})

it('accumulates selections in multiple mode', async () => {
  const onChange = jest.fn()
  renderCombobox({ multiple: true, showSelectedItems: true, onChange })
  await select('Colombia')
  await select('Brazil')
  expect(onChange).toHaveBeenLastCalledWith(['co', 'br'])
  expect(
    screen.getByRole('button', { name: 'Colombia tag close button' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Brazil tag close button' }),
  ).toBeInTheDocument()
})

it('keeps controlled selection until the parent updates value', async () => {
  const onChange = jest.fn()
  const { rerender } = renderCombobox({
    value: ['co'],
    showSelectedItems: true,
    onChange,
  })
  await select('Brazil')
  expect(onChange).toHaveBeenLastCalledWith(['br'])
  expect(
    screen.getByRole('button', { name: 'Colombia tag close button' }),
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('button', { name: 'Brazil tag close button' }),
  ).not.toBeInTheDocument()
  await interact(() =>
    rerender(view({ value: ['br'], showSelectedItems: true, onChange })),
  )
  expect(
    screen.getByRole('button', { name: 'Brazil tag close button' }),
  ).toBeInTheDocument()
})

it('clears selected values and resets the async query', async () => {
  const onChange = jest.fn()
  const onQueryChange = jest.fn()
  renderCombobox({
    defaultValue: ['co'],
    showSelectedItems: true,
    onChange,
    onQueryChange,
  })
  await type('col')
  await interact(() =>
    fireEvent.click(screen.getByRole('button', { name: 'Clear selection' })),
  )
  expect(onChange).toHaveBeenLastCalledWith([])
  expect(onQueryChange).toHaveBeenLastCalledWith('')
  expect(screen.getByRole('combobox')).toHaveValue('')
  expect(
    screen.queryByRole('button', { name: 'Colombia tag close button' }),
  ).not.toBeInTheDocument()
})

it('creates a trimmed option and preserves its label after items change', async () => {
  const onChange = jest.fn()
  const { rerender } = renderCombobox({
    creatable: true,
    showSelectedItems: true,
    onChange,
  })
  await type('  Chile  ')
  await interact(() =>
    fireEvent.click(screen.getByRole('option', { name: 'Create “Chile”' })),
  )
  expect(onChange).toHaveBeenLastCalledWith(['Chile'])
  expect(screen.getByRole('combobox')).toHaveValue('')
  await interact(() =>
    rerender(
      view({ items: [], creatable: true, showSelectedItems: true, onChange }),
    ),
  )
  expect(
    screen.getByRole('button', { name: 'Chile tag close button' }),
  ).toBeInTheDocument()
  await type('Chile')
  expect(
    screen.queryByRole('option', { name: /Create/ }),
  ).not.toBeInTheDocument()
})

it('does not offer creation for whitespace or an existing label', async () => {
  renderCombobox({ creatable: true })
  await type('   ')
  expect(
    screen.queryByRole('option', { name: /Create/ }),
  ).not.toBeInTheDocument()
  await type('  COLOMBIA  ')
  expect(
    screen.queryByRole('option', { name: /Create/ }),
  ).not.toBeInTheDocument()
})

it('opens and selects with ArrowDown and Enter, and closes with Escape', async () => {
  const onChange = jest.fn()
  renderCombobox({ onChange })
  const input = screen.getByRole('combobox')
  await interact(() => {
    input.focus()
    fireEvent.keyDown(input, { key: 'ArrowDown' })
  })
  expect(input).toHaveAttribute('aria-expanded', 'true')
  await interact(() => fireEvent.keyDown(input, { key: 'ArrowDown' }))
  await interact(() => fireEvent.keyDown(input, { key: 'Enter' }))
  expect(onChange).toHaveBeenLastCalledWith(['br'])
  await open()
  await interact(() => fireEvent.keyDown(input, { key: 'Escape' }))
  expect(input).toHaveAttribute('aria-expanded', 'false')
})

it('does not open or select when disabled', async () => {
  const onChange = jest.fn()
  renderCombobox({ disabled: true, onChange })
  expect(screen.getByRole('combobox')).toBeDisabled()
  expect(screen.getByRole('button', { name: 'Toggle options' })).toBeDisabled()
  await interact(() =>
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' }),
  )
  expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  expect(onChange).not.toHaveBeenCalled()
})

it('exposes invalid state and associates the error with the input', async () => {
  await interact(() => {
    renderCombobox({ errorMessage: 'Choose a country', required: true })
  })
  const input = screen.getByRole('combobox')
  expect(input).toHaveAttribute('aria-invalid', 'true')
  const errorId = screen.getByText('Choose a country').id
  expect(errorId).not.toBe('')
  expect(input.getAttribute('aria-describedby')?.split(' ')).toContain(errorId)
  expect(screen.queryByText('(Optional)')).not.toBeInTheDocument()
})
