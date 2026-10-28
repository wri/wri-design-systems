import { useEffect, useState } from 'react'
import Combobox from '.'
import DemoWrapper from '../../../UI/DemoWrapper'
import { ComboboxItem } from './types'

const staticItems = [
  { label: 'Label 1', value: 'label-1' },
  { label: 'Label 2', value: 'label-2' },
  { label: 'Label 3', value: 'label-3' },
  { label: 'Label 4', value: 'label-4' },
  { label: 'Label 5', value: 'label-5' },
  { label: 'Label 6', value: 'label-6' },
  { label: 'Label 7', value: 'label-7' },
]

/**
 * Server-side filtering demo backed by the JSONPlaceholder API.
 *
 * The full user list is fetched once; each query "refetches" (simulated by
 * filtering on the consumer side) and the matching users are passed back to
 * the Combobox through the reactive `items` prop — exactly how a real
 * endpoint would return a filtered page.
 */
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users'

const AsyncComboboxDemo = () => {
  const [items, setItems] = useState<ComboboxItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // Consumer-owned debounce — the library never throttles onQueryChange.
    const timeoutId = setTimeout(() => {
      let cancelled = false
      setIsLoading(true)

      fetch(JSON_PLACEHOLDER_URL)
        .then((response) => response.json())
        .then((users: { id: number; name: string }[]) => {
          if (cancelled) return
          const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase()),
          )
          setItems(
            filtered.map((user) => ({
              label: user.name,
              value: String(user.id),
            })),
          )
        })
        .finally(() => {
          if (!cancelled) setIsLoading(false)
        })

      return () => {
        cancelled = true
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  return (
    <Combobox
      items={items}
      isLoading={isLoading}
      onQueryChange={setQuery}
      label='Server-side filtering'
      caption='Users fetched from JSONPlaceholder — type to filter'
      placeholder='Type to search users'
      showSelectedItems
      multiple
    />
  )
}

const ComboboxDemo = () => {
  const [controlledValue, setControlledValue] = useState<string[]>(['label-1'])

  return (
    <DemoWrapper title='Combobox'>
      <div
        style={{
          width: '18.125rem',
          flexDirection: 'column',
          display: 'flex',
          gap: '1.25rem',
        }}
      >
        <Combobox
          initialItems={staticItems}
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          required
          showSelectedItems
        />
        <Combobox
          initialItems={staticItems}
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          size='small'
        />
        <Combobox
          initialItems={staticItems}
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          showOptionalLabel={false}
        />
        <Combobox
          initialItems={staticItems}
          label='Multiple'
          caption='Caption'
          placeholder='Type to search or add new'
          multiple
          required
          showSelectedItems
        />
        <Combobox
          initialItems={staticItems}
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          errorMessage='Error Message'
          required
        />
        <Combobox
          initialItems={staticItems}
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          required
          disabled
        />
        <Combobox
          initialItems={staticItems}
          label='Creatable'
          caption='Type a new option to add it'
          placeholder='Type to search or add new'
          creatable
          required
        />
        <Combobox
          initialItems={staticItems}
          label='Controlled'
          caption='Value owned by the consumer'
          placeholder='Type to search or add new'
          value={controlledValue}
          onChange={setControlledValue}
          required
        />
        <AsyncComboboxDemo />
      </div>
    </DemoWrapper>
  )
}

export default ComboboxDemo
