/* eslint-disable no-console */

import { Avatar, Tooltip } from '../..'

const AvatarDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Avatar name='John Doe' src='https://bit.ly/sage-adebayo' />
    <Avatar
      name='Michael Scott'
      src='https://i.pravatar.cc/150?u=michael-scott'
      onClick={() => console.log('clicked')}
    />
    <Avatar name='Heather Perkins' onClick={() => console.log('clicked')} />
    <Avatar
      name='Jane Doe'
      src='https://i.pravatar.cc/150?u=jane-doe'
      notificationCount={3}
    />
    <Tooltip content='Fenny Delphine'>
      <Avatar
        name='Fenny Delphine'
        src='https://i.pravatar.cc/150?u=fenny-delphine'
      />
    </Tooltip>
  </div>
)

export default AvatarDemo
