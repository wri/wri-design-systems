import Button from '../../Forms/Actions/Button'
import { AlertBanner } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const AlertBannerDemo = () => (
  <DemoWrapper title='Alert Banner'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <AlertBanner title='General white' variant='general-white' />
        <AlertBanner title='General gray' variant='general-grey'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner
          title='Information centered'
          variant='information'
          isCentered
        >
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Success' variant='success'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Warning' variant='warning'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Error' variant='error'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <AlertBanner
          title='General white'
          variant='general-white'
          width='inline'
        >
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='General gray' variant='general-grey' width='inline'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner
          title='Information centered'
          variant='information'
          isCentered
          width='inline'
        >
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Success' variant='success' width='inline'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Warning' variant='warning' width='inline'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
        <AlertBanner title='Error' variant='error' width='inline'>
          <Button variant='secondary' size='small' label='Label' />
        </AlertBanner>
      </div>
    </div>
  </DemoWrapper>
)

export default AlertBannerDemo
