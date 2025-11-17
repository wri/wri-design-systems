import { CloseButton } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const CloseButtonDemo = () => (
  <DemoWrapper title='Close Button'>
    <div style={{ display: 'flex', gap: '20px' }}>
      <CloseButton />
      <CloseButton disabled />
    </div>
  </DemoWrapper>
)

export default CloseButtonDemo
