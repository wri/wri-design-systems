import Banner from '.'

const BannerDemo = () => (
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
        <Banner
          label='Label'
          caption='caption'
          variant='info-white'
          actionLabel='Label'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='info-white'
          actionLabel='Label'
          size='small'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='info-grey'
          actionLabel='Label'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='info-grey'
          actionLabel='Label'
          size='small'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='success'
          actionLabel='Label'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='success'
          actionLabel='Label'
          size='small'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='warning'
          actionLabel='Label'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='warning'
          actionLabel='Label'
          size='small'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='error'
          actionLabel='Label'
        />
        <Banner
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
        <Banner
          label='Label'
          caption='caption'
          variant='error'
          actionLabel='Label'
          size='small'
        />
        <Banner
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

export default BannerDemo
