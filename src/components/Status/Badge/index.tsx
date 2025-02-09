// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { NotificationIcon } from '../../icons'
import {
  BadgeContainer,
  BadgeLabelContainer,
  BadgeLabel,
  BadgeDotContainer,
} from './styled'
import { BadgeProps } from './types'

const Badge = ({ hasNotification, notificationCount }: BadgeProps) => {
  const getNotificationCount = () => {
    let notification = ''
    if (notificationCount && notificationCount > 0) {
      notification = `${notificationCount > 99 ? '99+' : notificationCount}`
    }

    return notification
  }

  const notification = getNotificationCount()

  return (
    <BadgeContainer role='status' aria-live='polite'>
      {hasNotification && notification.length > 0 ? (
        <BadgeLabelContainer>
          <BadgeLabel aria-label={`${notificationCount} unread message`}>
            {notification}
          </BadgeLabel>
        </BadgeLabelContainer>
      ) : null}
      {hasNotification && !notificationCount ? (
        <BadgeDotContainer aria-hidden />
      ) : null}
      <NotificationIcon
        color='var(--chakra-colors-neutral-800)'
        height='16px'
        width='16px'
      />
    </BadgeContainer>
  )
}

export default Badge
