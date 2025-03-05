import { LayerItem, RadioGroup } from '../../..'

const LayerItemDemo = () => (
  <div>
    <LayerItem label='Layer name 1' caption='caption' name='name' />
    <RadioGroup name='radio-group-2' defaultValue='5'>
      <LayerItem
        label='Layer name 2'
        caption='caption'
        name='radio'
        variant='radio'
      />
    </RadioGroup>
  </div>
)

export default LayerItemDemo
