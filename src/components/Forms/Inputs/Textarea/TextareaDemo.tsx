import { Textarea } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const TextareaDemo = () => (
  <DemoWrapper title='Textarea'>
    <div style={{ width: '290px' }}>
      <Textarea
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
        defaultValue='Default Value'
        minLength={5}
        maxLength={200}
        required
      />
      <Textarea
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
        size='small'
      />
      <Textarea
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
        errorMessage='Error Message'
        required
      />
      <Textarea
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
        required
        disabled
      />
    </div>
  </DemoWrapper>
)

export default TextareaDemo
