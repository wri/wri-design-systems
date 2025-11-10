/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { forwardRef } from 'react'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { AvatarProps } from './types'
import {
  avatarContainerStyles,
  avatarFallbackStyles,
  avatarCountContainerStyles,
  avatarNotificationContainerStyles,
} from './styled'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, ariaLabel, src, srcSet, onClick, notificationCount }, ref) => {
    const getNotificationCount = () => {
      let notification = ''
      if (notificationCount && notificationCount > 0) {
        notification = `${notificationCount > 99 ? '99+' : notificationCount}`
      }

      return notification
    }

    const notification = getNotificationCount()

    let width = '16px'
    if (notificationCount && notificationCount > 99) {
      width = '28px'
    } else if (notificationCount && notificationCount > 9) {
      width = '22px'
    }

    return (
      <ChakraAvatar.Root
        aria-label={ariaLabel || name}
        ref={ref}
        css={avatarContainerStyles}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick?.()
          }
        }}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <ChakraAvatar.Fallback name={name} css={avatarFallbackStyles} />
        <ChakraAvatar.Image src={src} srcSet={srcSet} />
        {notification.length > 0 ? (
          <div css={avatarNotificationContainerStyles(width)}>
            <div css={avatarCountContainerStyles(width)}>
              <p aria-label={`${notificationCount} unread message`}>
                {notification}
              </p>
            </div>
          </div>
        ) : null}
      </ChakraAvatar.Root>
    )
  },
)

export default Avatar
