import { Badge } from '../..'
import { InfoIcon, UserIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.75rem',
}

const rowStyle = {
  display: 'flex',
  gap: '2.5rem',
  flexWrap: 'wrap' as const,
  alignItems: 'center',
}

const sectionTitleStyle = {
  margin: 0,
  fontWeight: 600,
  fontSize: '0.875rem',
}

const BadgeDemo = () => (
  <DemoWrapper title='Badge'>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Default bell</p>
        <div style={rowStyle}>
          <Badge size='small' />
          <Badge size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Notification dot</p>
        <div style={rowStyle}>
          <Badge hasNotification size='small' />
          <Badge hasNotification size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Count (single digit)</p>
        <div style={rowStyle}>
          <Badge notificationCount={3} size='small' />
          <Badge notificationCount={3} size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Count (double digit)</p>
        <div style={rowStyle}>
          <Badge notificationCount={12} size='small' />
          <Badge notificationCount={12} size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Count overflow (99+)</p>
        <div style={rowStyle}>
          <Badge notificationCount={100} size='small' />
          <Badge notificationCount={150} size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>With label</p>
        <div style={rowStyle}>
          <Badge label='Notifications' notificationCount={3} size='small' />
          <Badge label='Notifications' notificationCount={3} size='large' />
          <Badge label='Notifications' hasNotification size='small' />
          <Badge label='Notifications' hasNotification size='large' />
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Custom icon — count</p>
        <div style={rowStyle}>
          <Badge notificationCount={3} size='small'>
            <UserIcon color='currentColor' height='1rem' width='1rem' />
          </Badge>
          <Badge notificationCount={3} size='large'>
            <UserIcon color='currentColor' height='1.5rem' width='1.5rem' />
          </Badge>
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Custom icon — dot</p>
        <div style={rowStyle}>
          <Badge hasNotification size='small'>
            <InfoIcon color='currentColor' height='1rem' width='1rem' />
          </Badge>
          <Badge hasNotification size='large'>
            <InfoIcon color='currentColor' height='1.5rem' width='1.5rem' />
          </Badge>
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={sectionTitleStyle}>Custom icon — overflow</p>
        <div style={rowStyle}>
          <Badge notificationCount={150} size='small'>
            <UserIcon color='currentColor' height='1rem' width='1rem' />
          </Badge>
          <Badge notificationCount={150} size='large'>
            <UserIcon color='currentColor' height='1.5rem' width='1.5rem' />
          </Badge>
        </div>
      </div>
    </div>
  </DemoWrapper>
)

export default BadgeDemo
