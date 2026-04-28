import { CloseButton } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const CloseButtonDemo = () => (
  <DemoWrapper title='Close Button'>
    <div style={{ display: 'flex', gap: '1.25rem' }}>
      <CloseButton />
      <CloseButton disabled />
    </div>
  </DemoWrapper>
)

export default CloseButtonDemo
