import { Tag } from '../..'
import { InfoIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const TagDemo = () => (
  <DemoWrapper title='Tag'>
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Tag
          label='Small'
          size='small'
          variant='info-white'
          icon={<InfoIcon />}
        />
        <Tag
          label='Default'
          variant='info-white'
          icon={<InfoIcon />}
          closable
        />
        <Tag
          label='Large'
          size='large'
          variant='info-white'
          icon={<InfoIcon />}
          closable
        />
        <Tag label='Label' variant='info-white' />
        <Tag
          label='Disabled'
          variant='info-white'
          icon={<InfoIcon />}
          closable
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Tag
          label='Small'
          size='small'
          variant='info-grey'
          icon={<InfoIcon />}
        />
        <Tag label='Default' variant='info-grey' icon={<InfoIcon />} closable />
        <Tag
          label='Large'
          size='large'
          variant='info-grey'
          icon={<InfoIcon />}
          closable
        />
        <Tag label='Label' variant='info-grey' />
        <Tag
          label='Disabled'
          variant='info-grey'
          icon={<InfoIcon />}
          closable
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Tag label='Small' size='small' variant='success' icon={<InfoIcon />} />
        <Tag label='Default' variant='success' icon={<InfoIcon />} closable />
        <Tag
          label='Large'
          size='large'
          variant='success'
          icon={<InfoIcon />}
          closable
        />
        <Tag label='Label' variant='success' />
        <Tag
          label='Disabled'
          variant='success'
          icon={<InfoIcon />}
          closable
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Tag label='Small' size='small' variant='warning' icon={<InfoIcon />} />
        <Tag label='Default' variant='warning' icon={<InfoIcon />} closable />
        <Tag
          label='Large'
          size='large'
          variant='warning'
          icon={<InfoIcon />}
          closable
        />
        <Tag label='Label' variant='warning' />
        <Tag
          label='Disabled'
          variant='warning'
          icon={<InfoIcon />}
          closable
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Tag label='Small' size='small' variant='error' icon={<InfoIcon />} />
        <Tag label='Default' variant='error' icon={<InfoIcon />} closable />
        <Tag
          label='Large'
          size='large'
          variant='error'
          icon={<InfoIcon />}
          closable
        />
        <Tag label='Label' variant='error' />
        <Tag
          label='Disabled'
          variant='error'
          icon={<InfoIcon />}
          closable
          disabled
        />
      </div>
    </div>
  </DemoWrapper>
)

export default TagDemo
