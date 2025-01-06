import { InlineMessage } from '..'

const InlineMessageDemo = () => (
  <>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <InlineMessage
          label='Label'
          caption='caption'
          variant='info-white'
          actionLabel='Label'
        />
        <InlineMessage
          label='Label'
          caption='caption'
          variant='info-white'
          actionLabel='Label'
          isButtonRight
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      </div>
    </div>
  </>
)

export default InlineMessageDemo
