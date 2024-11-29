import { Textarea } from '..'

const TextareaDemo = () => (
  <div>
    <Textarea
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      defaultValue='Default Value'
      helperText='You have 200 characters remaining'
      required
    />
    <Textarea
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      size='small'
    />
    <Textarea
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      errorMessage='Error Message'
      required
    />
    <Textarea
      label='Label'
      caption='Caption'
      placeholder='placeholder'
      required
      disabled
    />
  </div>
)

export default TextareaDemo
