import { Badge } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const BadgeDemo = () => (
  <DemoWrapper title='Badge'>
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <Badge />
      <Badge hasNotification />
      <Badge notificationCount={100} />
      <Badge label='Notifications' notificationCount={3} />
      <Badge label='Notifications' hasNotification />
    </div>
  </DemoWrapper>
)

export default BadgeDemo
