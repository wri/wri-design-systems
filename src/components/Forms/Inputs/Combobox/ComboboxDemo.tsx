import { useState } from 'react'
import Combobox from '.'
import DemoWrapper from '../../../UI/DemoWrapper'

const items = [
  { label: 'Label 1', value: 'label-1' },
  { label: 'Label 2', value: 'label-2' },
  { label: 'Label 3', value: 'label-3' },
  { label: 'Label 4', value: 'label-4' },
  { label: 'Label 5', value: 'label-5' },
  { label: 'Label 6', value: 'label-6' },
  { label: 'Label 7', value: 'label-7' },
]

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
          initialItems={items}
          label='Label'
          caption='Caption'
          placeholder='placeholder'
          required
          showSelectedItems
        />
        <Combobox
          initialItems={items}
          label='Label'
          caption='Caption'
          placeholder='placeholder'
          size='small'
        />
        <Combobox
          initialItems={items}
          label='Label'
          caption='Caption'
          placeholder='placeholder'
          showOptionalLabel={false}
        />
        <Combobox
          initialItems={items}
          label='Multiple'
          caption='Caption'
          placeholder='placeholder'
          multiple
          required
          showSelectedItems
        />
        <Combobox
          initialItems={items}
          label='Label'
          caption='Caption'
          placeholder='placeholder'
          errorMessage='Error Message'
          required
        />
        <Combobox
          initialItems={items}
          label='Label'
          caption='Caption'
          placeholder='placeholder'
          required
          disabled
        />
        <Combobox
          initialItems={items}
          label='Creatable'
          caption='Type a new option to add it'
          placeholder='Type to add...'
          creatable
          required
        />
        <Combobox
          initialItems={items}
          label='Controlled'
          caption='Value owned by the consumer'
          placeholder='placeholder'
          value={controlledValue}
          onChange={setControlledValue}
          required
        />
      </div>
    </DemoWrapper>
  )
}

export default ComboboxDemo
