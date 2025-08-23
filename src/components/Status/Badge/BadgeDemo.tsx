import { Badge } from '../..'

const BadgeDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Badge />
    <Badge hasNotification />
    <Badge notificationCount={100} />
    <Badge label='Notifications' notificationCount={3} />
    <Badge label='Notifications' hasNotification />
  </div>
)

export default BadgeDemo
