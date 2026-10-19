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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <AlertBanner variant='general-white'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            General white
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='general-grey'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            General gray
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='information' isCentered>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Information centered
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='success'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Success
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='warning'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Warning
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='error'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Error
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <AlertBanner variant='general-white' width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            General white
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='general-grey' width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            General gray
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='information' isCentered width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Information centered
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='success' width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Success
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='warning' width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Warning
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
        <AlertBanner variant='error' width='inline'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Error
            <Button variant='secondary' size='small' label='Label' />
          </div>
        </AlertBanner>
      </div>
    </div>
  </DemoWrapper>
)

export default AlertBannerDemo
