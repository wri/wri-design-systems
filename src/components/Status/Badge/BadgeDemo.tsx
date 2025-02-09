import { Badge } from '../..'

const BadgeDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Badge />
    <Badge hasNotification />
    <Badge notificationCount={100} hasNotification />
  </div>
)

export default BadgeDemo
