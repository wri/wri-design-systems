import { TextInput } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const TextInputDemo = () => (
  <DemoWrapper title='Text Input'>
    <div style={{ width: '290px' }}>
      <TextInput
        label='Label'
        caption='Caption'
        placeholder='placeholder'
        defaultValue='Default Value'
        required
      />
      <TextInput
        label='Label'
        caption='Caption'
        placeholder='placeholder'
        size='small'
      />
      <TextInput
        label='Label'
        caption='Caption'
        placeholder='placeholder'
        errorMessage='Error Message'
        required
      />
      <TextInput
        label='Label'
        caption='Caption'
        placeholder='placeholder'
        required
        disabled
      />
    </div>
  </DemoWrapper>
)

export default TextInputDemo
