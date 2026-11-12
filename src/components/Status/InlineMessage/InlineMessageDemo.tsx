import { InlineMessage } from '../..'
import { CheckIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'
import Button from '../../Forms/Actions/Button'

const InlineMessageDemo = () => (
  <DemoWrapper title='Inline Message'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
      }}
    >
      <InlineMessage label='Label' caption='caption' variant='info-white' />
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        size='small'
      />
      <InlineMessage label='Label' caption='caption' variant='info-white'>
        <Button label='Label' />
      </InlineMessage>
      <InlineMessage
        label='Label'
        caption='caption'
        variant='info-white'
        isContentRight
      >
        <Button label='Label' />
      </InlineMessage>
      <InlineMessage
        label='Full width'
        caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, nisi vel congue imperdiet, risus felis iaculis metus, sit amet accumsan justo nibh eu odio. Fusce velit augue, bibendum vestibulum elit vel, placerat iaculis dolor. Aliquam tincidunt nunc blandit, consequat magna ut, mollis mi. Morbi ac dictum nisi. Quisque leo neque, vehicula eu lorem ac, convallis pellentesque sem. Proin commodo libero quis nulla tristique, a vehicula sem consectetur. Donec id luctus orci.'
        variant='info-white'
        size='full-width'
      />
      <InlineMessage
        label='Small full width'
        caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, nisi vel congue imperdiet, risus felis iaculis metus, sit amet accumsan justo nibh eu odio.'
        variant='info-white'
        size='small-full-width'
      />
      <InlineMessage label='Label' caption='caption' variant='info-grey' />
      <InlineMessage label='Label' caption='caption' variant='success' />
      <InlineMessage label='Label' caption='caption' variant='warning' />
      <InlineMessage label='Label' caption='caption' variant='error' />
      <InlineMessage
        label='Ready to finish this factor?'
        caption="Mark this factor as complete when you've finished reviewing the response, rationale, and strategies."
        variant='info-grey'
        size='full-width'
        icon={null}
      >
        <Button
          label='Mark complete'
          leftIcon={<CheckIcon height='1rem' width='1rem' />}
        />
      </InlineMessage>
      <InlineMessage
        label='Ready to finish this factor?'
        caption="Mark this factor as complete when you've finished reviewing the response, rationale, and strategies."
        variant='info-grey'
        size='full-width'
        icon={null}
        isContentRight
      >
        <Button
          label='Mark complete'
          leftIcon={<CheckIcon height='1rem' width='1rem' />}
        />
      </InlineMessage>
      <InlineMessage
        label='Label'
        caption={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>Caption</p>
            <p>Caption</p>
          </div>
        }
        variant='error'
      />
      <InlineMessage label='Label' variant='success'>
        <p>Anything can live inside the inline message.</p>
      </InlineMessage>
    </div>
  </DemoWrapper>
)

export default InlineMessageDemo
