import Combobox from '.'
import DemoWrapper from '../../../UI/DemoWrapper'

const items = [
  { label: 'Label', value: 'label-1' },
  { label: 'Label', value: 'label-2' },
  { label: 'Label', value: 'label-3' },
]

const ComboboxDemo = () => (
  <DemoWrapper title='Combobox'>
    <div style={{ width: '18.125rem', flexDirection: 'column', display: 'flex', gap: '1.25rem' }} >
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
    </div>
  </DemoWrapper>
)

export default ComboboxDemo
