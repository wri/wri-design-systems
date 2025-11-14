import { CheckboxList } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const CheckboxListDemo = () => (
  <DemoWrapper title='Checkbox List'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '366px',
      }}
    >
      <CheckboxList
        label='Label'
        caption='Caption'
        defaultValue='checkbox-2'
        checkboxes={[
          {
            children: 'Checkbox 1',
            name: 'checkbox-1',
            value: 'checkbox-1',
          },
          {
            children: 'Checkbox 2',
            name: 'checkbox-2',
            value: 'checkbox-2',
          },
          {
            children: 'Checkbox 3',
            name: 'checkbox-3',
            value: 'checkbox-3',
          },
        ]}
        required
      />
      <CheckboxList
        label='Label'
        caption='Caption'
        defaultValue='checkbox-2'
        errorMessage='Error Message'
        checkboxes={[
          {
            children: 'Checkbox 1',
            name: 'checkbox-1',
            value: 'checkbox-1',
          },
          {
            children: 'Checkbox 2',
            name: 'checkbox-2',
            value: 'checkbox-2',
          },
          {
            children: 'Checkbox 3',
            name: 'checkbox-3',
            value: 'checkbox-3',
          },
        ]}
        required
      />
      <CheckboxList
        label='Label'
        caption='Caption'
        checkboxes={[
          {
            children: 'Checkbox 1',
            name: 'checkbox-1',
            value: 'checkbox-1',
          },
          {
            children: 'Checkbox 2',
            name: 'checkbox-2',
            value: 'checkbox-2',
          },
          {
            children: 'Checkbox 3',
            name: 'checkbox-3',
            value: 'checkbox-3',
          },
        ]}
        horizontal
        required
      />
    </div>
  </DemoWrapper>
)

export default CheckboxListDemo
