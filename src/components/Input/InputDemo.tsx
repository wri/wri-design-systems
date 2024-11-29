import { Input } from '..'

const InputDemo = () => (
  <div>
    <Input
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      defaultValue='Default Value'
      required
    />
    <Input
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      size='small'
    />
    <Input
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      errorMessage='Error Message'
      required
    />
    <Input
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      required
      disabled
    />
  </div>
)

export default InputDemo
