import { Select } from '../../..'

const SelectDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '290px',
    }}
  >
    <Select
      label='Label'
      caption='Caption'
      placeholder='Please select'
      defaultValue={['value-2']}
      items={[
        {
          label: 'Label 1',
          caption: 'Caption 1',
          value: 'value-1',
        },
        {
          label: 'Label 2',
          caption: 'Caption 2',
          value: 'value-2',
        },
        {
          label: 'Label 3',
          caption: 'Caption 3',
          value: 'value-3',
        },
      ]}
      required
    />
    <Select
      label='Label'
      caption='Caption'
      placeholder='Please select'
      size='small'
      items={[
        {
          label: 'Label 1',
          caption: 'Caption 1',
          value: 'value-1',
        },
        {
          label: 'Label 2',
          caption: 'Caption 2',
          value: 'value-2',
        },
        {
          label: 'Label 3',
          caption: 'Caption 3',
          value: 'value-3',
        },
      ]}
      required
    />
    <Select
      label='Label'
      caption='Caption'
      placeholder='Please select'
      items={[
        {
          label: 'Label 1',
          caption: 'Caption 1',
          value: 'value-1',
        },
        {
          label: 'Label 2',
          caption: 'Caption 2',
          value: 'value-2',
        },
        {
          label: 'Label 3',
          caption: 'Caption 3',
          value: 'value-3',
        },
      ]}
      errorMessage='Error Message'
      required
    />
    <Select
      label='Label'
      caption='Caption'
      placeholder='Please select'
      defaultValue={['value-2']}
      items={[
        {
          label: 'Label 1',
          caption: 'Caption 1',
          value: 'value-1',
        },
        {
          label: 'Label 2',
          caption: 'Caption 2',
          value: 'value-2',
        },
        {
          label: 'Label 3',
          caption: 'Caption 3',
          value: 'value-3',
        },
      ]}
      required
      disabled
    />
    <Select
      label='Label - multiple'
      caption='Caption'
      placeholder='Please select'
      defaultValue={['value-2', 'value-3']}
      items={[
        {
          label: 'Label 1',
          caption: 'Caption 1',
          value: 'value-1',
        },
        {
          label: 'Label 2',
          caption: 'Caption 2',
          value: 'value-2',
        },
        {
          label: 'Label 3',
          caption: 'Caption 3',
          value: 'value-3',
        },
      ]}
      required
      multiple
    />
  </div>
)

export default SelectDemo
