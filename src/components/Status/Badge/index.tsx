/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react'
import { NotificationIcon } from '../../icons'
import {
  badgeContainerStyles,
  badgeDotContainerStyles,
  badgeCountContainerStyles,
  badgeCountStyles,
  badgeNotificationContainerStyles,
  badgeMobileCountContainerStyles,
  badgeMobileCountStyles,
} from './styled'
import { BadgeProps } from './types'

const Badge = ({ hasNotification, notificationCount, label }: BadgeProps) => {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1024) {
        setIsTablet(true)
      } else {
        setIsTablet(false)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const getNotificationCount = () => {
    let notification = ''
    if (notificationCount && notificationCount > 0) {
      notification = `${notificationCount > 99 ? '99+' : notificationCount}`
    }

    return notification
  }

  const notification = getNotificationCount()

  let width = '1rem'
  if (notificationCount && notificationCount > 99) {
    width = '1.75rem'
  } else if (notificationCount && notificationCount > 9) {
    width = '1.375rem'
  }

  if (isTablet) {
    return (
      <div css={badgeContainerStyles} role='status' aria-live='polite'>
        <div css={badgeNotificationContainerStyles()}>
          <NotificationIcon color='currentColor' height='1rem' width='1rem' />
          {hasNotification && !notificationCount && !label ? (
            <div css={badgeDotContainerStyles} aria-hidden />
          ) : null}
        </div>

        {label ? <p>{label}</p> : null}
        {notification.length > 0 ? (
          <div css={badgeMobileCountContainerStyles}>
            <p
              css={badgeMobileCountStyles}
              aria-label={`${notificationCount} unread message`}
            >
              {notification}
            </p>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div css={badgeContainerStyles} role='status' aria-live='polite'>
      {label ? <p>{label}</p> : null}
      <div css={badgeNotificationContainerStyles(width)}>
        {notification.length > 0 ? (
          <div css={badgeCountContainerStyles}>
            <p
              css={badgeCountStyles}
              aria-label={`${notificationCount} unread message`}
            >
              {notification}
            </p>
          </div>
        ) : null}
        {hasNotification && !notificationCount ? (
          <div css={badgeDotContainerStyles} aria-hidden />
        ) : null}
        <NotificationIcon color='currentColor' height='1rem' width='1rem' />
      </div>
    </div>
  )
}

export default Badge
