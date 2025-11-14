import { InputWithUnits } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const InputWithUnitsDemo = () => (
  <DemoWrapper title='Input With Units'>
    <div
      style={{
        width: '100%',
        maxWidth: '370px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <InputWithUnits
        label='Label'
        caption='Caption'
        units={[
          {
            label: 'Unit 1',
            value: 'unit-1',
          },
          {
            label: 'Unit 2',
            value: 'unit-2',
          },
          {
            label: 'Unit 3',
            value: 'unit-3',
          },
        ]}
        required
      />
      <InputWithUnits
        label='Label'
        caption='Caption'
        units={[
          {
            label: 'Unit 1',
            value: 'unit-1',
          },
          {
            label: 'Unit 2',
            value: 'unit-2',
          },
          {
            label: 'Unit 3',
            value: 'unit-3',
          },
        ]}
        unitsPosition='start'
        defaultUnit='unit-2'
        required
      />
      <InputWithUnits
        label='Label'
        caption='Caption'
        units={[
          {
            label: 'Unit 1',
            value: 'unit-1',
          },
          {
            label: 'Unit 2',
            value: 'unit-2',
          },
          {
            label: 'Unit 3',
            value: 'unit-3',
          },
        ]}
        defaultValue='123'
        defaultUnit='unit-2'
        errorMessage='Error Message'
        required
      />
      <InputWithUnits
        label='Label'
        caption='Caption'
        units={[
          {
            label: 'Unit 1',
            value: 'unit-1',
          },
          {
            label: 'Unit 2',
            value: 'unit-2',
          },
          {
            label: 'Unit 3',
            value: 'unit-3',
          },
        ]}
        unitsPosition='start'
        defaultValue='123'
        defaultUnit='unit-2'
        errorMessage='Error Message'
        required
      />
      <InputWithUnits
        label='Label'
        caption='Caption'
        units={[
          {
            label: 'Unit 1',
            value: 'unit-1',
          },
          {
            label: 'Unit 2',
            value: 'unit-2',
          },
          {
            label: 'Unit 3',
            value: 'unit-3',
          },
        ]}
        defaultValue='123'
        defaultUnit='unit-2'
        disabled
        required
      />
    </div>
  </DemoWrapper>
)

export default InputWithUnitsDemo
