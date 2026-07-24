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
import { useLabels } from '../../../lib/i18n/useLabels'

const Badge = ({
  hasNotification,
  notificationCount,
  label,
  labels,
  children,
  size = 'large',
}: BadgeProps) => {
  const l = useLabels('Badge', labels)
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
  const iconSize = size === 'small' ? '1rem' : '1.5rem'

  let width = iconSize
  if (notificationCount && notificationCount > 99) {
    width = size === 'small' ? '1.25rem' : '1.75rem'
  } else if (notificationCount && notificationCount > 9) {
    width = size === 'small' ? '1rem' : '1.375rem'
  }

  if (isTablet) {
    return (
      <div css={badgeContainerStyles} role='status' aria-live='polite'>
        <div css={badgeNotificationContainerStyles()}>
          <NotificationIcon
            color='currentColor'
            height={iconSize}
            width={iconSize}
          />
          {hasNotification && !notificationCount && !label ? (
            <div css={badgeDotContainerStyles(size)} aria-hidden />
          ) : null}
        </div>

        {label ? <p>{label}</p> : null}
        {notification.length > 0 ? (
          <div css={badgeMobileCountContainerStyles(size)}>
            <p
              css={badgeMobileCountStyles(size)}
              aria-label={l.unreadMessagesLabel(notificationCount || 0)}
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
          <div css={badgeCountContainerStyles(size)}>
            <p
              css={badgeCountStyles(size)}
              aria-label={l.unreadMessagesLabel(notificationCount || 0)}
            >
              {notification}
            </p>
          </div>
        ) : null}
        {hasNotification && !notificationCount ? (
          <div css={badgeDotContainerStyles(size)} aria-hidden />
        ) : null}
        {children ?? (
          <NotificationIcon
            color='currentColor'
            height={iconSize}
            width={iconSize}
          />
        )}
      </div>
    </div>
  )
}

export default Badge
