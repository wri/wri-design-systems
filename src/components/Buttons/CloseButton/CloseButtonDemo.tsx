import { CloseButton } from '../..'

const CloseButtonDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <CloseButton />
    <CloseButton disabled />
  </div>
)

export default CloseButtonDemo
