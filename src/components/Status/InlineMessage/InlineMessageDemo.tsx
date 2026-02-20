import { InlineMessage } from '../..'
import { CheckIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const InlineMessageDemo = () => (
  <DemoWrapper title='Inline Message'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
      />
      <InlineMessage
        label='Full width'
        caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, nisi vel congue imperdiet, risus felis iaculis metus, sit amet accumsan justo nibh eu odio. Fusce velit augue, bibendum vestibulum elit vel, placerat iaculis dolor. Aliquam tincidunt nunc blandit, consequat magna ut, mollis mi. Morbi ac dictum nisi. Quisque leo neque, vehicula eu lorem ac, convallis pellentesque sem. Proin commodo libero quis nulla tristique, a vehicula sem consectetur. Donec id luctus orci.'
        variant='info-white'
        actionLabel='Label'
        size='full-width'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        isButtonRight
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        isButtonRight
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-grey'
        actionLabel='Label'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-grey'
        actionLabel='Label'
        isButtonRight
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-grey'
        actionLabel='Label'
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-grey'
        actionLabel='Label'
        isButtonRight
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='success'
        actionLabel='Label'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='success'
        actionLabel='Label'
        isButtonRight
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='success'
        actionLabel='Label'
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='success'
        actionLabel='Label'
        isButtonRight
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='warning'
        actionLabel='Label'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='warning'
        actionLabel='Label'
        isButtonRight
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='warning'
        actionLabel='Label'
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='warning'
        actionLabel='Label'
        isButtonRight
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='error'
        actionLabel='Label'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='error'
        actionLabel='Label'
        isButtonRight
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='error'
        actionLabel='Label'
        size='small'
      />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='error'
        actionLabel='Label'
        isButtonRight
        size='small'
      />
      <InlineMessage
        label='Ready to finish this factor?'
        caption="Mark this factor as complete when you've finished reviewing the response, rationale, and strategies."
        variant='info-grey'
        size='full-width'
        icon={null}
        actionLabel='Mark complete'
        isButtonRight
        buttonLeftIcon={<CheckIcon height='16px' width='16px' />}
      />
    </div>
  </DemoWrapper>
)

export default InlineMessageDemo
