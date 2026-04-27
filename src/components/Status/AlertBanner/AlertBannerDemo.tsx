import Tag from '../../Forms/Tag'
import { AlertBanner } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const AlertBannerDemo = () => (
  <DemoWrapper title='Alert Banner'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      <AlertBanner title='General white' variant='general-white' />
      <AlertBanner title='General gray' variant='general-grey'>
        <Tag label='Label' variant='info-white' />
      </AlertBanner>
      <AlertBanner title='Information' variant='information'>
        <Tag label='Label' variant='info-white' />
      </AlertBanner>
      <AlertBanner title='Success' variant='success'>
        <Tag label='Label' variant='info-white' />
      </AlertBanner>
      <AlertBanner title='Warning' variant='warning'>
        <Tag label='Label' variant='info-white' />
      </AlertBanner>
      <AlertBanner title='Error' variant='error'>
        <Tag label='Label' variant='info-white' />
      </AlertBanner>
    </div>
  </DemoWrapper>
)

export default AlertBannerDemo
