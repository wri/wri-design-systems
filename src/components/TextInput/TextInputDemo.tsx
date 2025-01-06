import { TextInput } from '..'

const TextInputDemo = () => (
  <div>
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
)

export default TextInputDemo
