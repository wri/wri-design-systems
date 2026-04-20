import Combobox from '.'
import DemoWrapper from '../../../UI/DemoWrapper'

const items = [
  { label: 'Label', value: 'label-1' },
  { label: 'Label', value: 'label-2' },
  { label: 'Label', value: 'label-3' },
]

const ComboboxDemo = () => (
  <DemoWrapper title='Combobox'>
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
  </DemoWrapper>
)

export default ComboboxDemo
