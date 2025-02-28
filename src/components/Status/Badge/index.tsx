/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { NotificationIcon } from '../../icons'
import {
  badgeContainerStyles,
  badgeDotContainerStyles,
  badgeLabelContainerStyles,
  badgeLabelStyles,
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
    <div css={badgeContainerStyles} role='status' aria-live='polite'>
      {hasNotification && notification.length > 0 ? (
        <div css={badgeLabelContainerStyles}>
          <p
            css={badgeLabelStyles}
            aria-label={`${notificationCount} unread message`}
          >
            {notification}
          </p>
        </div>
      ) : null}
      {hasNotification && !notificationCount ? (
        <div css={badgeDotContainerStyles} aria-hidden />
      ) : null}
      <NotificationIcon
        color='var(--chakra-colors-neutral-800)'
        height='16px'
        width='16px'
      />
    </div>
  )
}

export default Badge
