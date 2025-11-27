/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { forwardRef } from 'react'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { AvatarProps } from './types'
import { UserIcon } from '../../icons'
import { getThemedColor } from '../../../lib/theme'
import {
  avatarContainerStyles,
  avatarCountContainerStyles,
  avatarNotificationContainerStyles,
} from './styled'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      name,
      ariaLabel,
      size = 'medium',
      customSize = '',
      src,
      srcSet,
      onClick,
      notificationCount,
      disabled = true,
      customBackgroundColor = '',
    },
    ref,
  ) => {
    const handleClick = () => {
      if (!disabled) {
        onClick?.()
      }
    }
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
    const hasImage = !!src || !!srcSet
    const isClickable = onClick && !disabled
    return (
      <ChakraAvatar.Root
        aria-label={ariaLabel || name}
        ref={ref}
        css={avatarContainerStyles(
          size,
          customSize,
          disabled,
          customBackgroundColor,
        )}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (!disabled && e.key === 'Enter') {
            handleClick()
          }
        }}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        aria-disabled={disabled}
      >
        {hasImage ? (
          <ChakraAvatar.Image src={src} srcSet={srcSet} />
        ) : (
          <UserIcon
            size='100%'
            style={{
              padding: '15%',
              color: disabled ? getThemedColor('neutral', 400) : undefined,
            }}
          />
        )}
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
